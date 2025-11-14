# Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Vercel CLI installed (already in package.json)

## Deployment Steps

### 1. Login to Vercel
```bash
npx vercel login
```

### 2. Deploy to Vercel
```bash
npx vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Choose your account
- Link to existing project? **No** (first time)
- What's your project's name? **SamPurvaDigitalInvite** (or your choice)
- In which directory is your code located? **./** (press Enter)

### 3. Configure Environment Variables

After initial deployment, add your environment variables:

**Option A: Via Vercel Dashboard**
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:
   - `MONGODB_URI` = `mongodb+srv://sameershanbhag1995_db_user:J9v3qNluIRiwEgsg@cluster0.hqmuvtn.mongodb.net/?appName=Cluster0`
   - `DATABASE_NAME` = `wedding_invitation`

**Option B: Via CLI**
```bash
npx vercel env add MONGODB_URI
# Paste your MongoDB URI when prompted

npx vercel env add DATABASE_NAME
# Enter: wedding_invitation
```

### 4. Deploy to Production
```bash
npx vercel --prod
```

## Project Structure

```
api/
  _lib/
    mongodb.ts      # MongoDB connection (serverless-optimized)
  rsvp.ts          # POST /api/rsvp endpoint
  rsvps.ts         # GET /api/rsvps endpoint
client/
  src/             # React application
dist/              # Built files (generated)
vercel.json        # Vercel configuration
```

## How It Works

### Serverless Functions
- Each file in `/api` becomes a serverless function endpoint
- `api/rsvp.ts` → `/api/rsvp`
- `api/rsvps.ts` → `/api/rsvps`

### MongoDB Connection
- Connection pooling is handled automatically
- Cached connections for better performance

### Static Files
- React app is served from `/dist/public`
- All routes fallback to `index.html` for client-side routing

## Accessing Your Deployed App

After deployment:
- **Production URL**: `https://sam-purva-digital-invite.vercel.app` (or your custom domain)
- **Preview URLs**: Generated for each git push
- **Admin RSVPs**: `https://your-domain.vercel.app/admin-rsvps`

## MongoDB Atlas Network Access

⚠️ **Important**: Make sure MongoDB Atlas allows connections from Vercel:

1. Go to MongoDB Atlas → Network Access
2. Add IP Address: **0.0.0.0/0** (Allow access from anywhere)
   - Or add Vercel's IP ranges (recommended for production)

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments

To connect GitHub:
1. Go to Vercel Dashboard → Your Project
2. Settings → Git
3. Connect your GitHub repository

## Troubleshooting

### MongoDB Connection Failed
- Check environment variables are set correctly
- Verify MongoDB Atlas Network Access allows Vercel IPs
- Check MongoDB URI format

### API Routes Not Working
- Ensure `vercel.json` is in root directory
- Check API function logs in Vercel dashboard

### Build Errors
- Run `npm run build` locally first
- Check Vercel build logs in dashboard

## Local Development

For local development, continue using:
```bash
npm run dev
```

This uses the Express server. Vercel deployment uses serverless functions.

## Commands Summary

```bash
# Login to Vercel
npx vercel login

# Deploy to preview
npx vercel

# Deploy to production
npx vercel --prod

# View deployment logs
npx vercel logs

# Pull environment variables from Vercel
npx vercel env pull
```

## Next Steps

1. Deploy using `npx vercel`
2. Add environment variables
3. Deploy to production with `npx vercel --prod`
4. (Optional) Add custom domain in Vercel dashboard
5. (Optional) Set up GitHub integration for auto-deployments
