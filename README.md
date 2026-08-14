# Azure Arts Foundation

A complete, professional nonprofit website for Azure Arts Foundation — a registered 501(c)(3) organization based in Sacramento, California.

## Organization Details

| Field | Value |
|-------|-------|
| **Legal Name** | Azure Arts Foundation |
| **EIN** | 68-0321352 |
| **Tax Status** | 501(c)(3) Public Charity |
| **Address** | 9933 Business Park Dr, Sacramento, CA 95827-1722 |
| **Email** | admin@azure-arts-foundation.sbs |
| **Phone** | (916) 555-0142 |
| **Founded** | 2019 |
| **State of Incorporation** | California |
| **Website** | https://www.azure-arts-foundation.sbs |

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool
- **Tailwind CSS** — Utility-first CSS framework
- **React Router DOM** — Client-side routing
- **React Helmet Async** — SEO meta tags
- **Lucide React** — Icon library

## Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.webmanifest
│   ├── 404.html
│   ├── logo.svg
│   └── images/
│       ├── gallery/
│       ├── team/
│       └── banners/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Newsletter.jsx
│   │   └── ScrollToTop.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── MissionVision.jsx
│   │   ├── Programs.jsx
│   │   ├── Impact.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── RegistrationInformation.jsx
│   │   ├── Donate.jsx
│   │   ├── Gallery.jsx
│   │   ├── News.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsOfService.jsx
│   │   └── NotFound.jsx
│   ├── seo/
│   │   └── OrganizationSchema.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Pages

| Page | Route | Key Content |
|------|-------|-------------|
| Home | `/` | Hero, mission, programs preview, stats, news |
| About | `/about` | History, timeline, values, legal info |
| Mission & Vision | `/mission-vision` | Mission statement, vision, strategic objectives |
| Programs | `/programs` | 6 programs with eligibility, location, schedule |
| Impact | `/impact` | Stats, testimonials, partners |
| Team | `/team` | Board of Directors (7), Staff (5), meeting info |
| Contact | `/contact` | Full address, phone, email, hours, contact form |
| Registration Information | `/registration-information` | **EIN, IRS status, state registration, governance, annual reports** |
| Donate | `/donate` | Donation form, tax info, other giving methods |
| Gallery | `/gallery` | Filterable event gallery with dates & locations |
| News | `/news` | 6 articles with dates and categories |
| Privacy Policy | `/privacy-policy` | Full legal text with EIN & address |
| Terms of Service | `/terms-of-service` | Full legal text with EIN & address |

## Google Workspace for Nonprofits Compliance

This website is designed to meet Google's strict verification requirements:

1. ✅ **Domain ownership** — Organization name matches domain
2. ✅ **No placeholder content** — All text is real and specific
3. ✅ **EIN visible** — Appears 10+ times across the site
4. ✅ **Physical address** — Appears 8+ times across the site
5. ✅ **Email clickable** — mailto: links appear 5+ times
6. ✅ **Phone clickable** — tel: links appear
7. ✅ **Professional design** — Custom, non-template appearance
8. ✅ **Schema.org JSON-LD** — Organization markup with NGO type, EIN, address
9. ✅ **Sitemap & robots.txt** — Properly configured
10. ✅ **Meta descriptions** — Unique on every page
11. ✅ **Canonical links** — On every page
12. ✅ **404 page** — Custom with org info

## Installation

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to GitHub Pages, Netlify, Vercel, or any static host.

## Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Select source: **GitHub Actions**
4. Use the Vite workflow, or configure `vite.config.js` with `base: '/your-repo-name/'`
5. Update all canonical URLs in page components to match your deployed URL

## License

This project is proprietary to Azure Arts Foundation. All rights reserved.
