---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components"]
---

## Scope

Single-page portfolio (app/page.tsx and its section components). Mode: Experience, read by backend hiring teams.

## Audience, job, action

Backend recruiters and engineering managers scanning between candidates. Job: confirm role fit, see shipped work, get the resume or a contact. Primary actions: Resume PDF, View projects, Email / LinkedIn.

## Constraints

Every section stays separate (About, Projects, Experience, Skills, Certifications, Education, Resume / contact). Photo in the opening screen. Light / dark toggle stays, dark default. Static export, BASE_PATH-prefixed assets. No fabricated metrics, dates or traction.

## Direction contract

THESIS: A calm, engineer-made dark workspace where every section is a working window; it refuses the neon-gradient, glass-and-glow developer portfolio the site used to be.

OWN-WORLD: Deep navy ground (#0a0f1d) in dark, white ground in light (user-pinned). Flat cards one step off the ground with 1px hairline borders and a window bar (three muted dots, a mono path, right-aligned meta). Neo-grotesk sans for reading text at heavy display weights; mono for paths, tags, dates, config values and the nav labels (reference-pinned). One indigo-violet accent (user-pinned, replacing green) that means "live / current / actionable" and fills the primary buttons. 6px corners. No gradients, glows, blur or decorative motion.

STORY: In seconds the visitor reads name, backend role and stack, sees two live AI products one scroll away, then the Wissen track record, and leaves with the resume or an email.

FIRST VIEWPORT: Left: availability pill, name at display scale (two lines), a rotating role line under the name (user-pinned), summary (the user's own three sentences, kept verbatim until they approve a rewrite), primary View projects + secondary Resume, a two-fact row (2+ yrs, 2 AI apps live). Right (lg and up): a ~/siddarth/profile.png window holding the photo large (square, up to 25rem wide) with a two-line caption (role; company and city). Below lg the photo window leads the hero, above the pill and name, at up to 18rem (20rem from sm). The user removed the earlier application.yml card as unnecessary.

FORM: User-pinned reference (dark terminal-native developer portfolio, iamayushkhandelwal.me), adapted rather than copied; it supersedes the rolled hand. seed:b3394a9a7e7f77e4 (roll superseded by user pin).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

The opening screen: the heavy two-line name with the rotating role beneath it, beside the large framed photo.

## Unresolved

Project screenshots do not exist; cards stay text-first until real captures are added.
