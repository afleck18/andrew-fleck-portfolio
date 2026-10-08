import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const basePath = process.env.PAGES_BASE_PATH || "";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "Andrew Fleck — Systems Engineer & Researcher", template: "%s — Andrew Fleck" },
  description: "Research in nonlinear control, state estimation, learning-enabled sensing, and partially observed dynamical systems.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
  openGraph: { title: "Andrew Fleck — Systems Engineer & Researcher", description: "Reliable inference for partially observed dynamical systems.", url: base, type: "website" },
  icons: { icon: `${basePath}/favicon.svg` },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
