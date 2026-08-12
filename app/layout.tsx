import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "Andrew Fleck — Systems Engineer & Researcher", template: "%s — Andrew Fleck" },
  description: "Research in nonlinear control, state estimation, learning-enabled sensing, and partially observed dynamical systems.",
  alternates: { canonical: "/" },
  openGraph: { title: "Andrew Fleck — Systems Engineer & Researcher", description: "Reliable inference for partially observed dynamical systems.", url: base, type: "website" },
  icons: { icon: "favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
