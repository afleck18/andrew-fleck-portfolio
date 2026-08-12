# Andrew Fleck — Engineering Portfolio

A static research portfolio for work in nonlinear control, state estimation, learning-enabled sensing, and partially observed dynamical systems.

## Local development

Use Node.js 22 or newer. Run `npm install`, then `npm run dev`. Production validation is `npm run build && npm test && npm run lint`.

## Content updates

Identity, links, publication statuses, project metadata, and technical capabilities are centralized in `app/data.ts`. Page-level narrative lives in the corresponding route under `app/`.

## Résumé and other pending assets

The résumé navigation item is intentionally inactive until a public-safe PDF is approved. To add it, place the PDF at `public/andrew-fleck-resume.pdf`, replace the disabled item in `app/components.tsx` with a link, and verify the PDF contains no private phone number. Publication PDFs, coauthors, posters, code links, repository screenshots, and the final headshot decision are also content TODOs.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys on pushes to `main`. It derives the project-site base path from the repository name. For a user site named `afleck18.github.io`, the base path is empty. Enable **Settings → Pages → Source: GitHub Actions** when the site is ready to publish.

The repository can remain private while content is reviewed. GitHub Pages availability for private repositories depends on the account plan; the source is fully static and can be moved to a public repository later without code changes.
