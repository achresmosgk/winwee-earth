<div align="center">

# 🌿 WINWEE EARTH

### **Empowering Young Eco-Leaders — One Action at a Time**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-15.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![NextAuth](https://img.shields.io/badge/NextAuth-4.24-purple?style=for-the-badge)](https://next-auth.js.org)

<br/>

> *A platform where students aged 9–12 track waste, take eco-actions, and grow into Earth's next generation of guardians.*


</div>

---

## ✦ What Is WinWee Earth?

**WinWee Earth** is a student-focused environmental action platform designed to make sustainability fun, trackable, and rewarding. Built for schools in Vadodara, Gujarat and beyond, it gives students, teachers, and parents a shared space to learn, act, and celebrate eco-responsibility.

The platform combines gamified waste tracking, a student-led digital magazine, project showcases, and a school leaderboard — all wrapped in a polished, dark-mode-ready web experience.

---

## ✦ The Mission

Pollution doesn't wait. Neither should awareness.

- **8.1M+** deaths globally from air pollution annually
- **1.36M+** deaths caused by water pollution
- **900M+** people live near contaminated soil

WinWee Earth bridges the gap between knowing these numbers and doing something about them — starting in the classroom.

---

## ✦ Features

- **Waste Tracker** — Students log plastic, paper, and food waste daily; progress unlocks eco-themed badges
- **WinWee Magazine** — Student-led stories, comics, and eco-project showcases
- **Leaderboards** — Recognizing top eco-schools and students globally
- **Marketplace** — Eco-friendly products made by students (coming soon)
- **Project Showcase** — Real student-led environmental initiatives with scope, school, and funding info
- **Blog** — Curated articles on culture, design, sustainability, and environmental trends
- **Auth System** — Google OAuth + email/password sign-in via NextAuth
- **Dark Mode** — Full light/dark theme toggle powered by `next-themes`
- **Contact Form** — Nodemailer-powered email delivery
- **Fully Responsive** — Mobile-first design with Tailwind CSS v4

---

## ✦ Architecture

```
winwee-earth/
├── markdown/
│   ├── blogs/          # MDX blog posts (gray-matter parsed)
│   └── projects/       # MDX project entries with frontmatter
│
├── src/
│   ├── app/
│   │   ├── (site)/     # All public pages
│   │   │   ├── (auth)/ # Sign in, Sign up, Forgot password
│   │   │   ├── about/
│   │   │   ├── blog/[slug]/
│   │   │   ├── projects/[slug]/
│   │   │   ├── contact/
│   │   │   └── documentation/
│   │   │
│   │   ├── api/        # REST API routes
│   │   │   ├── auth/   # NextAuth handler
│   │   │   ├── blog/   # Blog list endpoint
│   │   │   ├── projects/  # Project list endpoint
│   │   │   ├── contact/   # Nodemailer email handler
│   │   │   ├── layout-data/  # Nav + footer config
│   │   │   └── page-data/    # Stats, services, team, FAQ
│   │   │
│   │   └── components/ # All UI components (feature-scoped)
│   │       ├── home/   # Hero, Services, Stats, Contact, FAQ...
│   │       ├── layout/ # Header, Footer, Logo
│   │       ├── auth/   # Sign-in, Sign-up, OAuth
│   │       ├── shared/ # HeroBanner, NavigationLink, Loader...
│   │       └── ui/     # Radix-based Accordion
│   │
│   └── lib/
│       ├── auth.ts           # NextAuth config (Google + GitHub)
│       ├── markdown.ts       # Project MDX reader
│       ├── blogmarkdown.ts   # Blog MDX reader
│       └── markdownToHtml.ts # remark HTML converter
```

---

## ✦ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15.2.6 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4, tw-animate-css |
| UI Components | Radix UI (Accordion), shadcn/ui, Lucide React |
| Animations | react-scroll-parallax, react-fast-marquee, react-countup |
| Carousel | Swiper.js |
| Auth | NextAuth v4 (Google + GitHub OAuth) |
| Email | Nodemailer |
| Content | MDX + gray-matter + remark |
| Theme | next-themes (light/dark) |
| Icons | Iconify |
| Deployment | Vercel |

---

## ✦ Content System

All blog posts and project entries are written in **MDX** and parsed at build time using `gray-matter` and `remark`.

### Blog Frontmatter

```yaml
---
title: "The Modern Lens: Perspectives on Culture & Trends"
detail: "Short description shown in listings"
date: 2025-12-24
coverImage: /images/home/resources/resources_4.png
scrolltoread: "Pull quote shown on the detail page"
galleryImg: /images/blog/blog-detail/blogcover-4.png
---
```

### Project Frontmatter

```yaml
---
title: "Antrix-I"
slug: "pixelforge"
ScopeOfWork:
  - "GIS led development"
school: "Gaurika Kalia (student)"
raised: "-"
coverImage: /images/projects/projectlist/project3-cover.jpg
gallery:
  - /images/projects/projectlist/project_3-img-1.jpg
---
```

---

## ✦ API Routes

All page data is served through internal Next.js API routes — no external CMS needed.

| Route | Method | Description |
|-------|--------|-------------|
| `/api/page-data` | GET | Stats, services, team, FAQ, contact, avatars |
| `/api/layout-data` | GET | Navigation menu + footer content |
| `/api/blog` | GET | All blog posts (title, slug, date, coverImage) |
| `/api/projects` | GET | All projects (title, slug, ScopeOfWork, coverImage) |
| `/api/contact` | POST | Sends email via Nodemailer |
| `/api/auth/[...nextauth]` | GET/POST | NextAuth OAuth handler |

---

## ✦ Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Installation

```bash
git clone https://github.com/your-org/winwee-earth.git
cd winwee-earth
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
# NextAuth
SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Email (Nodemailer)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password

# Optional
SITE_NAME=WinWee Earth
AUTHOR_NAME=WinWee Team
```

### Run Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

---

## ✦ Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Stats, Services, Contact |
| `/about` | About WinWee, team, full-width image, stats |
| `/projects` | All student projects grid |
| `/projects/[slug]` | Project detail with gallery |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog detail with full content |
| `/contact` | Contact form |
| `/documentation` | Developer docs (package versions, setup, config) |
| `/signin` | Email + Google sign-in |
| `/signup` | Registration |
| `/forgot-password` | Password reset flow |
| `/privacy-policy` | Privacy statement |
| `/terms-and-conditions` | Terms of service |

---

## ✦ Color System

Defined in `src/app/globals.css` via Tailwind v4 theme tokens:

```css
--color-primary: #7effe4;       /* Mint green — CTAs, badges, highlights */
--color-secondary: #1F2A2E;     /* Dark teal — text, backgrounds */
--color-lightgray: #F4F8FA;     /* Off-white — section backgrounds */
--color-darkblack: #273338;     /* Dark sections */
--color-twilliteblack: #181f22; /* Deepest dark — mobile nav bg */
--color-gray: #365564;          /* Mid tone */
```

---

## ✦ Roadmap

- [ ] Waste tracker dashboard with badge progression
- [ ] School leaderboard (global + regional)
- [ ] Student eco-marketplace
- [ ] Push notifications for eco-challenges
- [ ] Teacher + parent dashboard
- [ ] Multi-language support (Hindi, Gujarati)
- [ ] Mobile app (React Native)

---
<div align="center">

**Together for Earth 🌍**

Built with 💚· Powered by Next.js + Vercel

**[⬆ back to top](#-winwee-earth)**

</div>
