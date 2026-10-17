# Our House Care Group website

Marketing and information website for **Our House Care Group Limited** and **Bridgeway Home**, built from the
home's Statement of Purpose.

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · Motion · Radix UI · React Hook Form + Zod · Inter (self-hosted)

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Edit business details

All contact details live in one file, **`src/config/site.ts`**:

| Field | Used for |
|---|---|
| `url` | Website address (ourhousecare.co.uk). Also hard-coded in `index.html` canonical/social tags |
| `email` | Header, footer, contact page, and the inbox the contact and careers forms are sent to |
| `referralsEmail` | Footer, contact and referrals pages, and the inbox the referral form is sent to |
| `phone` | Leave `''` to hide it; add your number and it appears in the header, footer and contact page |
| `registeredOffice` | Footer, About and Contact pages |
| `statementOfPurpose` | Review dates and status shown on the Statement of Purpose page |

Navigation is in `src/config/navigation.ts`. Page copy is in `src/pages/*` and `src/data/*`.

## Forms

The contact, referral and careers forms validate in the browser, then:

- **With `VITE_FORM_ENDPOINT` set** (copy `.env.example` to `.env`), they POST JSON to that URL. Any form service
  works, e.g. Formspree, Getform or Web3Forms.
- **Without it**, they open the visitor's email app with the message pre-filled, addressed to `site.email` (or `site.referralsEmail` for the referral form).

## Deploy

The site is hosted on Vercel and connected to this GitHub repository: every push to `main` deploys to production,
and every other branch or pull request gets its own preview URL. Vercel runs `npm run build` and serves `dist/`.

`npm run build` outputs a static site that can be hosted anywhere. Single-page-app rewrites are included for Vercel
(`vercel.json`) and Netlify (`public/_redirects`). On nginx, use `try_files $uri /index.html;`.

## Notes

- The home's street address is intentionally **not** published, in line with the Statement of Purpose's
  commitment to a discreet setting. Only the registered office address appears.
- Photography is from [Unsplash](https://unsplash.com/license) (free for commercial use) and stored in
  `public/images`.
- The Bridgeway Home page shows grey placeholder boxes until real photos of the home are supplied. To add one, put
  the file in `public/images` and pass it as `src={img('file-name')}` to the matching `<PhotoSlot>` in
  `src/pages/BridgewayHome.tsx`.
- Brand colours come from the logo and are defined as tokens at the top of `src/index.css`.
