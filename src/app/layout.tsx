import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharjeel Safdar — AI Engineer | Machine Learning & RAG",
  description:
    "AI Engineer and Computer Science graduate specializing in machine learning, Retrieval-Augmented Generation, LLM applications, data science and production AI systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "RAG Engineer",
    "Data Scientist",
    "LLM",
    "Python",
    "FastAPI",
    "Next.js",
    "Sharjeel Safdar",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "Sharjeel Safdar" }],
  creator: "Sharjeel Safdar",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sharjeelsafdar.dev",
    title: "Sharjeel Safdar — AI Engineer | Machine Learning & RAG",
    description:
      "AI Engineer and Computer Science graduate specializing in machine learning, Retrieval-Augmented Generation, LLM applications and production AI systems.",
    siteName: "Sharjeel Safdar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharjeel Safdar — AI Engineer | Machine Learning & RAG",
    description:
      "AI Engineer specializing in ML, RAG, LLM integration and production AI systems.",
    creator: "@sharjeel435",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#07070f] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
