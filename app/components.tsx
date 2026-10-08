import Link from "next/link";
import { site } from "./data";

export function Header() {
  return <header className="site-header"><Link className="wordmark" href="/">AF<span>.</span></Link><nav aria-label="Primary navigation"><Link href="/research">Research</Link><Link href="/publications">Publications</Link><Link href="/about">About</Link><Link href="/andrew-fleck-resume.pdf">Résumé</Link></nav></header>;
}

export function Footer() {
  return <footer><p>Andrew Fleck · West Lafayette, Indiana</p><div><a href={site.links.email}>afleck18@gmail.com</a><a href={site.links.github}>GitHub <span aria-hidden="true">↗</span></a><a href={site.links.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a></div></footer>;
}

export function Shell({ children }: { children: React.ReactNode }) {
  return <><a className="skip-link" href="#main">Skip to content</a><div className="shell"><Header /><main id="main">{children}</main><Footer /></div></>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
