# SAPBridge Technologies
A responsive Next.js 14 website for an early-stage, independent enterprise technology initiative.

## Included
- Home, Services, Solutions, Our Work, About, Insights and Contact pages
- Responsive navigation and dark navy visual system
- Concept portfolio clearly marked as illustrative
- Contact API with Zod validation and optional Resend email delivery
- Basic metadata, robots and sitemap routes

## Run locally
Requires Node.js 18.17+ (Node 20 LTS recommended).
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Contact email configuration
Without environment variables, the contact endpoint safely returns a message that email delivery is not configured. To enable sending, verify a domain with Resend and set these server-side variables in Vercel or your local `.env.local`:
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `CONTACT_FROM`

Never commit `.env.local` or expose the Resend key in browser code.

## Deploy on Vercel
Import this repository into Vercel and keep the framework preset as Next.js. Update the canonical URL in `app/layout.tsx`, `app/robots.ts` and `app/sitemap.ts` after choosing a production domain.

## Before launch
- Confirm business name and domain availability; this repository does not establish trademark rights.
- Add a real privacy notice and terms appropriate to the business and jurisdiction.
- Use a monitored business contact channel.
- Review every service claim against actual delivery capability.
- Do not claim SAP certification, SAP authorization, client results or partnerships unless independently verified and permitted.
- Portfolio entries are concept demonstrations, not completed client work or live SAP integrations.
- Conduct a security and spam-protection review before production lead capture.