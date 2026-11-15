# SAPBridge Technologies website

A responsive Next.js 14 + TypeScript + Tailwind CSS website for an early-stage enterprise technology services agency.

## Included
- Home, Services, Solutions, Our Work, About, Insights and Contact pages
- Responsive desktop/tablet/mobile navigation
- Dark navy visual system, responsive cards and subtle motion
- Honest portfolio labels: concept demonstrations, sample data and architecture concepts
- Contact form API route with Zod validation and Resend email delivery
- Metadata and Open Graph basics

## Requirements
- Node.js 18.17 or newer (Node 20 LTS recommended)
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The contact form will return a configuration message until valid Resend settings are added. To enable email delivery:

1. Create a Resend account and verify a sending domain.
2. Set `RESEND_API_KEY`, `CONTACT_EMAIL` and `CONTACT_FROM` in `.env.local`.
3. Ensure `CONTACT_FROM` uses a sender/domain verified in Resend.
4. Restart the development server and submit a test enquiry.

Never commit `.env.local` or expose the Resend API key in browser code.

## Deploy to Vercel

1. Push this project to a private or public Git repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Add `RESEND_API_KEY`, `CONTACT_EMAIL` and `CONTACT_FROM` as server-side environment variables in Vercel project settings.
5. Replace `https://example.com` in `lib/site.ts` with the actual production domain.
6. Add the domain in Vercel and configure its DNS records as instructed by Vercel.
7. Deploy, then test all routes, mobile navigation and the contact form.

## Before public launch
- Confirm business name and domain availability; this sample name is not a trademark clearance.
- Replace the placeholder canonical URL in `lib/site.ts`.
- Add a real privacy notice and terms appropriate to your business and jurisdiction.
- Add a real company email/contact channel only after it exists and is monitored.
- Review all service claims against your actual delivery capability.
- Do not claim SAP certification, SAP authorization, customer results or client logos unless independently verified and permitted.
- Have a security review before using this form for production lead capture. Consider a managed anti-spam/rate-limiting service for higher traffic.

## Project structure

```text
app/
  about/page.tsx
  robots.ts
  sitemap.ts
  api/contact/route.ts
  contact/page.tsx
  insights/page.tsx
  services/page.tsx
  solutions/page.tsx
  work/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  animations.tsx
  contact-form.tsx
  cta.tsx
  footer.tsx
  header.tsx
  page-hero.tsx
  section-heading.tsx
lib/site.ts
```

## Notes
- The portfolio contains concepts only, not completed customer engagements.
- The SAP references are capability areas to explore, not claims of current certification or partnership.
- The contact endpoint uses Resend's REST API and does not store submissions in a database.
