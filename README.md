# Andrew Fleck — Engineering Portfolio

A static research portfolio for work in nonlinear control, state estimation, learning-enabled sensing, and partially observed dynamical systems.

## Local development

Use Node.js 22 or newer. Run `npm install`, then `npm run dev`. Production validation is `npm run build && npm test && npm run lint`.

## Content updates

Identity, links, publication statuses, project metadata, and technical capabilities are centralized in `app/data.ts`. Page-level narrative lives in the corresponding route under `app/`.

## Résumé and other assets

The downloadable one-page résumé is stored at `public/andrew-fleck-resume.pdf`. Publication PDFs, posters, additional code links, repository screenshots, and the final headshot decision remain separate content decisions.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` deploys only when manually triggered. It derives the project-site base path from the repository name. For a user site named `afleck18.github.io`, the base path is empty. Enable **Settings → Pages → Source: GitHub Actions** when the site is ready to publish.

The repository can remain private while content is reviewed. GitHub Pages availability for private repositories depends on the account plan; the source is fully static and can be moved to a public repository later without code changes.
