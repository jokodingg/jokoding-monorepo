# jokoding-web

Monorepo for every Jokoding site, managed with pnpm workspaces and Turborepo.

| Folder | Package | Domain |
| --- | --- | --- |
| `apps/jokoding.id` | `@jokoding/jokoding.id` | jokoding.id |
| `apps/pro.jokoding.id` | `@jokoding/pro.jokoding.id` | pro.jokoding.id |
| `packages/config` | `@jokoding/config` | Shared contact data: WhatsApp number, email, Instagram, `waLink()` |

To change the WhatsApp number or other contact data, edit `packages/config/src/index.js`. Every app picks it up.

## Development

Requires Node 20+ and pnpm 10 (`corepack enable` picks the version from `packageManager`).

```sh
pnpm install
pnpm dev:jokoding   # only jokoding.id
pnpm dev:pro        # only pro.jokoding.id
pnpm dev            # every app
pnpm build          # build every app
```

## Adding an app

1. Create `apps/<domain>` with a `package.json` named `@jokoding/<domain>` and `build` / `dev` scripts.
2. Add `"@jokoding/config": "workspace:*"` to its dependencies if it needs contact data.
3. Add `apps/<domain>/vercel.json` with `"ignoreCommand": "npx turbo-ignore"` so Vercel skips builds when the app did not change.
4. Create a new Vercel project from this repo with Root Directory `apps/<domain>`.

## Vercel

Each app is its own Vercel project, all deploying from `main`:

| Vercel project | Root Directory | Production branch |
| --- | --- | --- |
| `joki-koding-web` | `apps/jokoding.id` | `main` |
| `pro-jokoding-web` | `apps/pro.jokoding.id` | `main` |

Keep "Include files outside the root directory in the Build Step" enabled (the default) so the build can reach `packages/` and the root lockfile.
