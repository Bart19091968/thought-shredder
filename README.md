# ThoughtShredder

A symbolic "thought destroyer" website where visitors can destroy bad thoughts, frustrations, and negative energy through satisfying animations.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Hosted on Railway**
- **File-based counter** (upgradeable to Redis)
- **Google AdSense** ready

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production URL | Yes |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense publisher ID (`ca-pub-xxx`) | For ads |
| `COUNTER_SEED` | Initial counter value (default: 8412) | No |

## Deploy to Railway

### Option 1: GitHub (recommended)

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub repo
3. Railway auto-detects Next.js and configures the build
4. Add environment variables in Railway dashboard → Variables
5. Add a custom domain in Settings → Networking → Custom Domain

### Option 2: Railway CLI

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Post-deploy checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to your Railway/custom domain
- [ ] Set `NEXT_PUBLIC_ADSENSE_ID` once AdSense is approved
- [ ] Verify sitemap at `yourdomain.com/sitemap.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt at `yourdomain.com/robots.txt`
- [ ] Test all destruction animations on mobile
- [ ] Register domain and point DNS to Railway

## Project Structure

```
src/
├── app/
│   ├── api/counter/       # GET/POST counter API
│   ├── burn-negative-thoughts/
│   ├── destroy-bad-thoughts/
│   ├── digital-release-ritual/
│   ├── faq/
│   ├── flush-away-stress/
│   ├── how-to-let-go/
│   ├── let-go-of-frustration/
│   ├── globals.css         # All animations & styles
│   ├── layout.tsx          # Root layout, SEO, AdSense
│   ├── not-found.tsx       # Custom 404
│   ├── page.tsx            # Homepage
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # XML sitemap
├── components/
│   ├── ThoughtDestroyer.tsx  # Main client component
│   ├── SEOPage.tsx           # Reusable SEO landing template
│   └── backgrounds.ts       # SVG background data URIs
└── lib/
    └── counter.ts            # Counter persistence logic
```

## Counter

The global counter uses file-based storage (`counter-data.json`) by default. This works fine on Railway since the filesystem persists between deploys on the same service.

For higher reliability, upgrade to **Redis**:
1. Add a Redis service in Railway
2. Set `REDIS_URL` environment variable
3. Swap `src/lib/counter.ts` to use Redis client

The counter auto-increments by +1 every 2 hours.

## AdSense

AdSense Auto ads are loaded via the script in `layout.tsx`. Three manual ad zones are pre-positioned:
- Leaderboard (top)
- In-content (between tool and FAQ)
- Bottom banner

Replace the `<AdZone>` placeholder components with real `<ins class="adsbygoogle">` units once approved.

## SEO

Each page has unique metadata, canonical URLs, and Open Graph tags. The FAQ pages include FAQPage schema markup. The homepage includes WebApplication schema.

Target keywords: destroy bad thoughts, let go of frustration, release negative thoughts, burn bad thoughts, shred your anger, flush away stress, symbolic release tool, digital letting go ritual.
