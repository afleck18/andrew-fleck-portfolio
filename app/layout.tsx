import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const basePath = process.env.PAGES_BASE_PATH || "";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "Andrew Fleck — Dynamical Systems & Estimation", template: "%s — Andrew Fleck" },
  description: "Research on how sensing conditions shape state estimation, observer dynamics, and the reliability of downstream assessments.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
  openGraph: { title: "Andrew Fleck — Dynamical Systems & Estimation", description: "Measurement geometry, observer dynamics, and estimation reliability.", url: base, type: "website" },
  twitter: { card: "summary", title: "Andrew Fleck — Dynamical Systems & Estimation", description: "Measurement geometry, observer dynamics, and estimation reliability." },
  icons: { icon: `${basePath}/favicon.svg` },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
