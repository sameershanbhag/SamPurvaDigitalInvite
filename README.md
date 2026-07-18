# Sam & Purva — Digital Wedding Invitation 💍

A digital wedding invitation website with RSVP functionality, photo gallery, countdown timer, and an admin dashboard for viewing RSVPs.

**Stack:** React 18 + Vite + Tailwind CSS + shadcn/ui (frontend) · Vercel Serverless Functions (`api/`) · MongoDB Atlas · Express (local dev server only)

## Project Structure

```
├── api/              # Vercel serverless functions (used in production)
│   ├── rsvp.ts       # POST /api/rsvp — submit an RSVP
│   ├── rsvps.ts      # GET /api/rsvps — list RSVPs (admin)
│   └── lib/mongodb.ts
├── client/           # React frontend (Vite)
├── server/           # Express server (local development only, excluded from Vercel)
├── shared/           # Shared types/schemas
└── vercel.json       # Vercel build + routing config
```

## Prerequisites

- Node.js 20+
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (free tier works)

## Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Required | Description |
|---|---|---|
| `MONGODB_URI` | ✅ | MongoDB Atlas connection string |
| `DATABASE_NAME` | No | Mongo database name (defaults to `wedding_invitation`) |
| `VITE_ADMIN_USERNAME` | ✅ | Username for the `/dashboard` admin page |
| `VITE_ADMIN_PASSWORD` | ✅ | Password for the `/dashboard` admin page |
| `PORT` | No | Local dev server port (defaults to `5000`) |
| `DATABASE_URL` | No | Postgres URL — only needed if you run `npm run db:push` (Drizzle). The app itself uses MongoDB. |

> ⚠️ `VITE_*` variables are bundled into the client at build time and are visible to anyone inspecting the site's JS. The dashboard login is a convenience gate, not real security — don't reuse a sensitive password.

## Run Locally

```bash
npm install
npm run dev
```

This starts the Express dev server with Vite middleware at **http://localhost:5000**.

Pages:

- `/` — the invitation
- `/dashboard` — admin RSVP dashboard (login with `VITE_ADMIN_USERNAME` / `VITE_ADMIN_PASSWORD`)

Other scripts:

```bash
npm run build   # production build → dist/public
npm run check   # TypeScript type-check
```

## Deploy to Vercel

Production works differently from local dev: Vercel serves the static Vite build from `dist/public` and runs the files in `api/` as serverless functions (the `server/` folder is excluded via `.vercelignore`). This is all configured in `vercel.json` — no changes needed.

### Option A: Vercel Dashboard (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel picks up `vercel.json` automatically (build command `npm run build`, output `dist/public`).
4. Under **Settings → Environment Variables**, add:
   - `MONGODB_URI`
   - `DATABASE_NAME` (optional)
   - `VITE_ADMIN_USERNAME`
   - `VITE_ADMIN_PASSWORD`
5. Deploy. Every push to `main` auto-deploys; PRs get preview deployments.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel link          # link the project (first time only)
vercel env add MONGODB_URI
vercel env add VITE_ADMIN_USERNAME
vercel env add VITE_ADMIN_PASSWORD
vercel --prod        # deploy to production
```

### MongoDB Atlas note

Under Atlas **Network Access**, allow access from anywhere (`0.0.0.0/0`) — Vercel serverless functions don't have static IPs.
