import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharjeel Safdar — AI Engineer | ML, RAG & Production Systems",
  description:
    "AI Engineer specializing in forecasting systems (R² 0.82), RAG pipelines, LLM integration and production-ready ML — FastAPI, Next.js, Python stack.",
  keywords: [
    "AI Engineer", "Machine Learning Engineer", "RAG Engineer",
    "LLM Integration", "Data Science", "Python", "FastAPI",
    "Next.js", "Sharjeel Safdar", "Karachi", "Pakistan",
  ],
  authors: [{ name: "Sharjeel Safdar" }],
  creator: "Sharjeel Safdar",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sharjeel Safdar — AI Engineer",
    description: "ML systems, RAG pipelines, and production AI engineering.",
    siteName: "Sharjeel Safdar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharjeel Safdar — AI Engineer",
    description: "Most ML portfolios demo. Mine deploy.",
    creator: "@sharjeel435",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        {/* Inline theme script to avoid flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (preferred === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  );
}
