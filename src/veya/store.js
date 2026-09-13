import { useCallback, useEffect, useMemo, useState } from "react";
import {
  COACH_DIALS,
  CONVERSATIONS,
  NOTIFICATION_SETTINGS,
  PEOPLE,
} from "./data";

const STORAGE_KEY = "veya.state.v1";

function defaultCoachStyle() {
  return COACH_DIALS.reduce(
    (acc, dial) => ({ ...acc, [dial.id]: dial.defaultValue }),
    {}
  );
}

function defaultNotifications() {
  return NOTIFICATION_SETTINGS.reduce(
    (acc, item) => ({ ...acc, [item.id]: item.defaultOn }),
    {}
  );
}

export function initialState() {
  return {
    onboarded: false,
    goals: ["understand-message", "handle-conflict"],
    relationships: ["partner"],
    needs: ["clarity", "overthinking", "words"],
    coachStyle: defaultCoachStyle(),
    dataConsent: false,
    notificationsAllowed: false,
    notifications: defaultNotifications(),
    hideNames: true,
    people: PEOPLE,
    conversations: CONVERSATIONS,
    reflections: [],
    coachMessages: [],
    acknowledgedSensitive: [],
  };
}

function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Merge so newly added keys pick up their defaults on upgrade.
    return { ...initialState(), ...parsed };
  } catch {
    return null;
  }
}

/**
 * Single app-wide store. Everything the user changes (onboarding answers,
 * settings, reflections, chat) is persisted to localStorage so the prototype
 * survives a reload — there is no backend in this build.
 */
export function useVeyaStore() {
  const [state, setState] = useState(() => readStored() || initialState());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Storage can be unavailable (private mode); the app still works.
    }
  }, [state]);

  const update = useCallback((patch) => {
    setState((prev) => ({
      ...prev,
      ...(typeof patch === "function" ? patch(prev) : patch),
    }));
  }, []);

  const toggleIn = useCallback(
    (key, id) =>
      setState((prev) => {
        const list = prev[key];
        return {
          ...prev,
          [key]: list.includes(id)
            ? list.filter((item) => item !== id)
            : [...list, id],
        };
      }),
    []
  );

  const setCoachDial = useCallback(
    (id, value) =>
      setState((prev) => ({
        ...prev,
        coachStyle: { ...prev.coachStyle, [id]: value },
      })),
    []
  );

  const setNotification = useCallback(
    (id, value) =>
      setState((prev) => ({
        ...prev,
        notifications: { ...prev.notifications, [id]: value },
      })),
    []
  );

  const addReflection = useCallback(
    (body) =>
      setState((prev) => ({
        ...prev,
        reflections: [
          {
            id: `r-${Date.now()}`,
            title: "Günlük yansıma",
            when: "Bugün",
            body,
          },
          ...prev.reflections,
        ],
      })),
    []
  );

  const addCoachMessage = useCallback(
    (message) =>
      setState((prev) => ({
        ...prev,
        coachMessages: [...prev.coachMessages, message],
      })),
    []
  );

  const acknowledgeSensitive = useCallback(
    (id) =>
      setState((prev) =>
        prev.acknowledgedSensitive.includes(id)
          ? prev
          : {
              ...prev,
              acknowledgedSensitive: [...prev.acknowledgedSensitive, id],
            }
      ),
    []
  );

  const deleteConversation = useCallback(
    (id) =>
      setState((prev) => ({
        ...prev,
        conversations: prev.conversations.filter((c) => c.id !== id),
      })),
    []
  );

  const addPerson = useCallback(
    (person) =>
      setState((prev) => ({ ...prev, people: [...prev.people, person] })),
    []
  );

  const reset = useCallback(() => setState(initialState()), []);

  return useMemo(
    () => ({
      state,
      update,
      toggleIn,
      setCoachDial,
      setNotification,
      addReflection,
      addCoachMessage,
      acknowledgeSensitive,
      deleteConversation,
      addPerson,
      reset,
    }),
    [
      state,
      update,
      toggleIn,
      setCoachDial,
      setNotification,
      addReflection,
      addCoachMessage,
      acknowledgeSensitive,
      deleteConversation,
      addPerson,
      reset,
    ]
  );
}

const TAB_ROUTES = ["today", "conversations", "reflection", "profile"];

/**
 * Minimal stack navigator. Tab roots reset the stack; everything else pushes,
 * so the back button always has somewhere sensible to go.
 */
export function useNavigation(initial = "splash") {
  const [stack, setStack] = useState([{ route: initial, params: {} }]);
  const current = stack[stack.length - 1];

  const go = useCallback((route, params = {}) => {
    setStack((prev) => {
      if (TAB_ROUTES.includes(route)) return [{ route, params }];
      return [...prev, { route, params }];
    });
  }, []);

  const replace = useCallback((route, params = {}) => {
    setStack((prev) => [...prev.slice(0, -1), { route, params }]);
  }, []);

  const back = useCallback(() => {
    setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  return { route: current.route, params: current.params, go, replace, back };
}

export { TAB_ROUTES };
