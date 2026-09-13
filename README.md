# VeYa

VeYa is a Turkish-language AI communication coach: it helps you make sense of
confusing conversations and work out what to say next.

This repo holds the React web app, packaged for iOS with Capacitor.

## Running it

```bash
npm install
npm start          # dev server on http://localhost:3000
npm test           # test suite
npm run build      # production bundle into build/
npx cap sync ios   # copy the bundle into the Xcode project
```

CI (`codemagic.yaml`) runs build → `cap sync ios` → IPA → TestFlight on pushes
to `main`.

## How it is put together

| Path | What lives there |
| --- | --- |
| `src/App.js` | Route table and screen switch |
| `src/veya/store.js` | App state + `localStorage` persistence, and the stack navigator |
| `src/veya/data.js` | Every string and seed record, lifted from the design |
| `src/veya/components/` | `Screen` frame, `TabBar`, and the UI primitives in `ui.js` |
| `src/veya/screens/` | One module per screen |

Design tokens live in `tailwind.config.js` under the `veya` colour key
(`bg #0d1117`, `surface #1a1e24`, `border #1f2530`, `ink #f9f9f9`,
`muted #a0b3c1`, `primary #d55e2d`, `onPrimary #050810`). Headings use Fredoka,
body copy uses Nunito; both are self-hosted in `public/fonts/` so the packaged
app renders correctly with no network.

Icons come from `lucide-react`, which is the same library the design's icons
were drawn from, so the glyphs match one-for-one.

## Screens

All 27 frames from the Figma file are implemented:

- **Onboarding** — splash, sign-up, goals (1/7), relationship (2/7), needs
  (3/7), coach style (5/7), privacy (6/7), notifications (son adım)
- **Core** — Bugün, Sohbetler, Konuşma, Koçunla konuş, Ne analiz edelim?,
  Ne arıyorsun?, Sende tekrar edenler, Yansıma, Günlük yansıma
- **Profile** — Profil, İlişki profilleri, Koçunun tarzı, Bildirimler,
  Gizlilik ve veriler, Abonelik, Yardım ve destek

## State of the build

This is the full UI layer with working navigation and local state. Onboarding
answers, coach-style dials, notification and privacy toggles, written
reflections, chat messages and conversation deletions all persist to
`localStorage` and survive a reload.

There is **no backend and no model behind it yet**. Specifically:

- The coach replies with one fixed acknowledgement; it does not analyse anything.
- The four non-transcript tabs on a conversation (Analiz, Koçluk, Yanıtlar,
  Yansımalar) show a placeholder rather than invented analysis.
- Sign-in buttons, "Verilerimi indir", "Premium'a göz at" and "Bize yaz" are
  inert.
- `src/firebase/config.js` is left over from the previous app and is unused.

## Deliberate deviations from the Figma file

1. **Conversation transcripts.** The file mocks the *same* Elif transcript
   inside all three Konuşma frames. Elif's conversation keeps that transcript
   verbatim; Mert's and Annem's got transcripts matching their own title and
   person, so the list does not read as broken.
2. **Search entry point.** "Ne arıyorsun?" is designed but nothing in the file
   links to it. A search button was added to the Sohbetler header.
3. **Apple / Google logos.** The file exports these two as SVG assets, but this
   build environment's egress policy blocks `figma.com`, so they could not be
   downloaded, and Lucide has no brand equivalents. Both marks are inlined in
   `src/veya/components/BrandIcons.js`. Every other icon is the real Lucide glyph.
4. **Onboarding steps 4 and 7.** The progress bar says "/ 7" but only steps
   1, 2, 3, 5, 6 and a final step were drawn. The flow runs those six and keeps
   the design's own step labels and progress positions.
5. **Stale layer names.** Several Figma text layers are still named "Clarify"
   from an earlier product name; the actual text content says "VeYa", which is
   what shipped.

## Relationship to the previous app

This repo previously held OyadaBu, an unrelated quiz game. Its screens
(`CategoryScreen`, `GameScreen`, `ResultScreen`, `data/questions.js`) were
removed to make room for VeYa and are recoverable from commit `6a990e9`.

The Capacitor `appId` (`app.oyadabu.oyun`) and the codemagic signing config are
**unchanged**, because they are the existing App Store and certificate identity.
Only the display name was changed to VeYa (`capacitor.config.ts` and
`CFBundleDisplayName`).
