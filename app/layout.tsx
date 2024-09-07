import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";

export const metadata: Metadata = {
  title: "Gakunn | Academic Presentation Generator",
  description: "Efficiently create academic presentations from arXiv papers using AI-powered tools. Streamline your research communication process.",
  keywords: ["academic presentations", "arXiv", "research communication", "AI-powered tools"],
  authors: [{ name: "Gakunn Team" }],
  openGraph: {
    title: "Gakunn | Academic Presentation Generator",
    description: "Create academic presentations from arXiv papers using AI-powered tools.",
    url: "https://gakunn.vercel.app",
    siteName: "Gakunn"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-shippori">{children}</body>
    </html>
  );
}
