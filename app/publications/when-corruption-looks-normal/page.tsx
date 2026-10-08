import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Shell } from "../../components";

const title = "When Corruption Looks Normal: Identical Inputs, Incompatible Observer Actions";
const description = "Submitted to the 2027 IEEE/SICE International Symposium on System Integration (SII 2027).";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const url = `${base}/publications/when-corruption-looks-normal/`;

export const metadata: Metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "article" }, twitter: { card: "summary", title, description } };

export default function WhenCorruptionLooksNormal() {
  return <Shell><article className="paper-detail">
    <header className="paper-header">
      <Eyebrow>Submitted manuscript · SII 2027</Eyebrow>
      <h1>{title}</h1>
      <p className="paper-authors">Aditi Acharya and Andrew Fleck</p>
      <p className="acceptance-note">Submitted to the 2027 IEEE/SICE International Symposium on System Integration (SII 2027).</p>
    </header>
    <section className="paper-layout">
      <aside><dl><div><dt>Venue</dt><dd>IEEE/SICE SII 2027</dd></div><div><dt>Status</dt><dd>Submitted</dd></div></dl></aside>
      <div className="paper-body">
        <section><h2>Research summary</h2><p>Characterizes when histories indistinguishable through a scheduler’s available information require incompatible observer actions. Experiments examine how bounded, diagnostically nominal estimates can remain physically incorrect under coherent corruption.</p></section>
        <div className="paper-detail-links"><Link className="text-link" href="/publications">← All publications</Link><Link className="text-link" href="/research/#observer-reliability">Related research theme →</Link></div>
      </div>
    </section>
  </article></Shell>;
}
