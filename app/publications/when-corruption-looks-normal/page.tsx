import type { Metadata } from "next";
import Link from "next/link";
import { ContextVisual } from "../../ContextVisual";
import { Eyebrow, Shell } from "../../components";

const pageTitle = "Observer Reliability Under Corrupted Sensing";
const manuscriptTitle = "When Corruption Looks Normal: Identical Inputs, Incompatible Observer Actions";
const description = "A submitted SII 2027 manuscript on observer reliability across sensing, measurement interpretation, observer dynamics, correction, and assessment.";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const url = `${base}/publications/when-corruption-looks-normal/`;

export const metadata: Metadata = { title: pageTitle, description, alternates: { canonical: url }, openGraph: { title: pageTitle, description, url, type: "article" }, twitter: { card: "summary", title: pageTitle, description } };

export default function WhenCorruptionLooksNormal() {
  return <Shell><article className="paper-detail project-detail">
    <header className="paper-header">
      <Eyebrow>Manuscript</Eyebrow>
      <h1>{manuscriptTitle}</h1>
      <p className="project-manuscript-title">{pageTitle}</p>
      <p className="paper-authors">Aditi Acharya and Andrew Fleck</p>
    </header>
    <ContextVisual variant="sii" />
    <section className="paper-layout">
      <aside><dl><div><dt>Venue</dt><dd>2027 IEEE/SICE International Symposium on System Integration (SII 2027)</dd></div><div><dt>Status</dt><dd>Submitted</dd></div><div><dt>Focus</dt><dd>Observer reliability</dd></div></dl></aside>
      <div className="paper-body">
        <section><h2>Project context</h2>
          <p>This manuscript distinguishes the corrupted-sensing study by following observer reliability across physical sensing, measurement interpretation, observer dynamics, configurable correction, and reliability assessment. It treats information sufficiency and observer decisions as downstream consequences of the sensing and estimation conditions, connecting the broader reliability question across the full chain rather than reducing it to any single layer.</p>
        </section>
        <div className="paper-detail-links"><Link className="text-link" href="/publications">← All publications</Link><Link className="text-link" href="/research/#observer-reliability">Related research theme →</Link></div>
      </div>
    </section>
  </article></Shell>;
}
