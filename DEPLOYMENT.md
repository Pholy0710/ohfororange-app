# OhforOrange Read & Play — Deployment Guide

## Prerequisites
- Node.js 18.17+ 
- npm or yarn
- PostgreSQL database (local or cloud)
- Vercel account (for deployment)
- Cloudinary account (for image/audio storage)

---

## 1. Local Development Setup

### Install Dependencies
```bash
cd ohfororange-app
npm install
```

### Environment Variables
Copy `.env.example` to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

Required variables:
```env
DATABASE_URL="postgresql://user:pass@localhost:5432/ohfororange_db"
DIRECT_URL="postgresql://user:pass@localhost:5432/ohfororange_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-min-32-chars"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
```

### Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with demo data
npm run db:seed
```

### Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

Demo accounts:
- Admin: admin@ohfororange.com / admin123
- Parent: demo@ohfororange.com / demo123

---

## 2. Production Database (Supabase - Free)

1. Go to https://supabase.com and create a free project
2. Go to Settings > Database > Connection String
3. Copy the `URI` connection string
4. Use it as `DATABASE_URL` (replace `[YOUR-PASSWORD]`)
5. For `DIRECT_URL`, use the same string

---

## 3. Cloudinary Setup (Free)

1. Sign up at https://cloudinary.com
2. Go to Dashboard > API Keys
3. Copy Cloud Name, API Key, API Secret
4. Add to your `.env.local`

---

## 4. Deploy to Vercel

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
```

Follow prompts and set environment variables.

### Option B: Vercel Dashboard
1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Add environment variables in Settings > Environment Variables
5. Deploy!

### Post-Deployment
```bash
# Run migrations on production
vercel env pull .env.production.local
npx prisma migrate deploy
```

---

## 5. Environment Variables for Vercel

In Vercel Dashboard > Settings > Environment Variables, add:

| Key | Value |
|-----|-------|
| DATABASE_URL | postgresql://... |
| DIRECT_URL | postgresql://... |
| NEXTAUTH_URL | https://your-domain.vercel.app |
| NEXTAUTH_SECRET | (generate with: `openssl rand -base64 32`) |
| CLOUDINARY_CLOUD_NAME | your-cloud-name |
| CLOUDINARY_API_KEY | your-api-key |
| CLOUDINARY_API_SECRET | your-api-secret |
| NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME | your-cloud-name |
| NEXT_PUBLIC_APP_URL | https://your-domain.vercel.app |

---

## 6. Custom Domain

In Vercel Dashboard > Domains:
1. Add your domain (e.g., app.ohfororange.com)
2. Update DNS records at your domain registrar
3. Vercel will automatically provision SSL

---

## 7. App Routes Summary

### Child Mode
- `/home` — Home screen with navigation
- `/letters` — Alphabet A-Z grid
- `/letters/[letter]` — Individual letter page with activities
- `/sounds` — Phonics sounds (s, a, t, p, i, n)
- `/sounds/[sound]` — Individual sound page with activities
- `/blending` — CVC word blending activities
- `/games` — Games hub
- `/games/sound-hunt` — Sound Hunt game
- `/games/build-word` — Build the Word game
- `/games/match-rhyme` — Match the Rhyme game
- `/games/pop-letter` — Pop the Letter balloon game
- `/games/treasure-trail` — Treasure Trail adventure game
- `/stories` — Story library
- `/stories/[id]` — Individual story reader
- `/worksheets` — Worksheet library (120+ sheets)
- `/worksheets/[id]` — Individual worksheet viewer & printer
- `/progress` — Progress tracking
- `/rewards` — Badges, stickers, certificates

### Parent Portal
- `/parent/dashboard` — Parent overview & analytics
- `/parent/progress` — Detailed progress report
- `/parent/worksheets` — Worksheet packs & downloads

### Admin Panel
- `/admin/dashboard` — Admin overview
- `/admin/stories` — Manage stories
- `/admin/worksheets` — Manage worksheets
- `/admin/users` — Manage users
- `/admin/analytics` — Platform analytics

### Auth
- `/login` — Parent login
- `/register` — Parent registration

### API Routes
- `POST /api/auth/[...nextauth]` — Authentication
- `GET/POST /api/progress` — Progress tracking
- `GET/POST /api/children` — Child profile management
- `GET /api/worksheets` — Worksheet data
- `GET /api/stories` — Story data

---

## 8. SEO Setup

The app includes:
- Meta tags in `layout.tsx`
- OpenGraph tags
- PWA manifest at `/manifest.json`
- Proper viewport settings

Add `sitemap.ts` for better SEO:
```typescript
// src/app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://app.ohfororange.com', lastModified: new Date() },
    { url: 'https://app.ohfororange.com/home', lastModified: new Date() },
    { url: 'https://app.ohfororange.com/letters', lastModified: new Date() },
    // ... more routes
  ]
}
```

---

## 9. Performance Optimization

Built-in optimizations:
- Next.js App Router with React Server Components
- Framer Motion for smooth animations
- Image optimization via Next.js Image
- Font optimization with Google Fonts
- Code splitting per route

Additional recommendations:
- Enable Vercel Edge Network (CDN)
- Use `next/image` for all images
- Enable ISR for story/worksheet pages

---

## 10. PWA Support

The app is PWA-ready with:
- Web App Manifest at `/public/manifest.json`
- Theme color set to #FF6B2B
- Standalone display mode

To add a Service Worker for offline support, install:
```bash
npm install next-pwa
```

---

## Folder Structure

```
ohfororange-app/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Demo data seeder
├── public/
│   ├── manifest.json          # PWA manifest
│   └── images/                # Static images
├── src/
│   ├── app/
│   │   ├── (auth)/            # Login & register pages
│   │   ├── (child)/           # Child-mode pages
│   │   │   ├── home/          # Home screen
│   │   │   ├── letters/       # Alphabet A-Z
│   │   │   ├── sounds/        # Phonics sounds
│   │   │   ├── blending/      # CVC word blending
│   │   │   ├── games/         # 5 interactive games
│   │   │   ├── stories/       # 4 decodable stories
│   │   │   ├── worksheets/    # 120+ worksheets
│   │   │   ├── progress/      # Progress tracking
│   │   │   └── rewards/       # Badges & certificates
│   │   ├── parent/            # Parent portal
│   │   ├── admin/             # Admin CMS panel
│   │   ├── api/               # API routes
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── shared/            # Reusable components
│   │   └── layout/            # Nav & layout components
│   ├── data/                  # Static content data
│   │   ├── letters.ts         # A-Z letter data
│   │   ├── sounds.ts          # Phonics sounds data
│   │   ├── stories.ts         # 4 complete stories
│   │   ├── worksheets.ts      # 120+ worksheets
│   │   └── games.ts           # Game levels & content
│   ├── lib/
│   │   ├── auth.ts            # NextAuth config
│   │   ├── db.ts              # Prisma client
│   │   └── utils.ts           # Utilities
│   └── types/                 # TypeScript types
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Support

For issues, visit: https://github.com/ohfororange/read-and-play/issues
