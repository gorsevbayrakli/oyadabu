import React from "react";
import { TAB_ROUTES, useNavigation, useVeyaStore } from "./veya/store";

import Splash from "./veya/screens/Splash";
import SignUp from "./veya/screens/SignUp";
import {
  OnboardingCoach,
  OnboardingGoals,
  OnboardingNeeds,
  OnboardingNotifications,
  OnboardingPrivacy,
  OnboardingRelationship,
} from "./veya/screens/OnboardingSteps";
import Today from "./veya/screens/Today";
import Conversations from "./veya/screens/Conversations";
import Conversation from "./veya/screens/Conversation";
import Coach from "./veya/screens/Coach";
import NewAnalysis from "./veya/screens/NewAnalysis";
import Search from "./veya/screens/Search";
import Patterns from "./veya/screens/Patterns";
import Reflection from "./veya/screens/Reflection";
import DailyReflection from "./veya/screens/DailyReflection";
import Profile from "./veya/screens/Profile";
import Subscription from "./veya/screens/Subscription";
import NotificationSettings from "./veya/screens/NotificationSettings";
import PrivacySettings from "./veya/screens/PrivacySettings";
import People from "./veya/screens/People";
import CoachStyle from "./veya/screens/CoachStyle";
import Help from "./veya/screens/Help";

const SCREENS = {
  splash: Splash,
  signup: SignUp,
  "onboarding-goals": OnboardingGoals,
  "onboarding-relationship": OnboardingRelationship,
  "onboarding-needs": OnboardingNeeds,
  "onboarding-coach": OnboardingCoach,
  "onboarding-privacy": OnboardingPrivacy,
  "onboarding-notifications": OnboardingNotifications,
  today: Today,
  conversations: Conversations,
  conversation: Conversation,
  coach: Coach,
  "new-analysis": NewAnalysis,
  search: Search,
  patterns: Patterns,
  reflection: Reflection,
  "daily-reflection": DailyReflection,
  profile: Profile,
  subscription: Subscription,
  notifications: NotificationSettings,
  privacy: PrivacySettings,
  people: People,
  "coach-style": CoachStyle,
  help: Help,
};

// Routes that keep the bottom navigation visible.
const TABBED = {
  today: "today",
  conversations: "conversations",
  reflection: "reflection",
  profile: "profile",
  "new-analysis": "today",
};

export default function App() {
  const store = useVeyaStore();
  // Returning users land on Bugün; everyone else starts at the splash.
  const nav = useNavigation(store.state.onboarded ? "today" : "splash");

  const ScreenComponent = SCREENS[nav.route] || Today;
  const activeTab = TABBED[nav.route];

  const tabProps = activeTab
    ? {
        tab: activeTab,
        onTabChange: (tab) => nav.go(TAB_ROUTES.includes(tab) ? tab : "today"),
        onCompose: () => nav.go("new-analysis"),
      }
    : undefined;

  return (
    <div className="min-h-screen min-h-[100dvh] bg-veya-bg">
      <ScreenComponent nav={nav} store={store} tabProps={tabProps} />
    </div>
  );
}
