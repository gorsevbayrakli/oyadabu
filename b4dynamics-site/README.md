# b4dynamics — Storytelling website

A single-file static site (`index.html`). No server or build step: open it in a browser.

## Story flow
1. **Opening** — "Every great transformation starts on a Monday morning."
2. **Chapter 1 · The problem** — a composite character, Maria, and her chaotic Monday
3. **Chapter 2 · The guide** — b4dynamics: since 2008, 50+ experts, Hüfingen / Istanbul / Denver
4. **Chapter 3 · The plan** — Understand → Design → Implement & validate → Grow
5. **Chapter 4 · The transformation** — before/after toggle, process & discrete manufacturing
6. **Chapter 5 · A strong network** — the collana IT Group ("collana" = necklace) bead motif
7. **Epilogue** — "Which chapter is your story in?" contact form

## To finish
- **Brand colors:** every color comes from the tokens in the `:root` block of `index.html`
  (`--ink`, `--primary`, `--accent`, …). They are placeholders — replace them with the official b4dynamics hex codes.
- **Logo:** the nav and footer show a text wordmark. Add the official logo file next to `index.html`
  and replace the `.logo` text with `<img src="logo.svg" alt="b4dynamics">`.
- **Form:** only shows a thank-you message; connect `#contactForm` to a backend or form service.
