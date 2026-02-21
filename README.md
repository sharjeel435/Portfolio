# Technical Project Manager Portfolio

A production-grade, recruiter-impressing personal portfolio website for a Technical Project Manager with hybrid expertise in ecommerce growth, paid media, and technical systems.

## 🚀 Setup Instructions

Since this project was generated in a clean environment, ensure you have Node.js (v18+) installed.

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌍 Deployment Guide (Vercel)

This project is optimized for zero-config deployment on Vercel.

1. Create a GitHub repository and push this codebase.
2. Log into [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel will auto-detect the Vite framework.
5. In the Environment Variables section, add any EmailJS API keys if you plan to use the contact form strictly securely.
6. Click **Deploy**. Your site will be live on a global CDN in under 2 minutes.

## ⚡ Performance Optimization Tips Implemented
- **Vite & React 18:** Leverages fast hot-module replacement and concurrent rendering.
- **Lazy Loading (Optional for Future):** As sections grow, you can use `React.lazy` to chunk route payloads.
- **Tailwind CSS JIT:** Only includes the CSS utilities actually used in the project, minimizing CSS bundle size.
- **Image Handling:** The native `loading="lazy"` attribute is used in the image gallery to prevent blocking the initial page load.

## 🏗️ Explanation of Architecture Decisions
1. **Tech Stack:** React + Vite provides a lightning-fast DX (Developer Experience) and lean production build. TypeScript ensures type safety, avoiding runtime bugs that could look unprofessional to recruiters.
2. **Styling:** Tailwind CSS was chosen to rapidly build out the custom dark, premium (Stripe/Linear inspired) theme using utility classes, preventing CSS bloat and saving time on media queries.
3. **Animations:** Framer Motion enables smooth scroll-triggered micro-interactions that make the site feel premium without significantly impacting performance.
4. **Project Structure:** 
   - `components/ui` for agnostic, reusable elements (Buttons, Cards).
   - `components/layout` for the structural shell (Header, Footer).
   - `sections` for logical segregation of the landing page, maintaining readability rather than dumping 800 lines into `Home.tsx`.

## 🌱 Suggestions for Future Scalability
- **Headless CMS integration (Sanity or Contentful):** If you decide to add constant new case studies or articles, hooking up a CMS allows you to publish without touching code.
- **Next.js Migration:** If SEO indexing for multiple blog routes becomes crucial, moving the logical components over to Next.js App Router will enable SSR/SSG.
- **Backend Infrastructure:** Integrating a serverless edge function (e.g., Vercel Functions or Supabase) for capturing lead emails instead of relying solely on client-side EmailJS.
