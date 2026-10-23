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
      <Eyebrow>Submitted manuscript · SII 2027</Eyebrow>
      <h1>{pageTitle}</h1>
      <p className="project-manuscript-title">{manuscriptTitle}</p>
      <p className="paper-authors">Aditi Acharya and Andrew Fleck</p>
      <p className="acceptance-note">Submitted to the 2027 IEEE/SICE International Symposium on System Integration (SII 2027).</p>
    </header>
    <ContextVisual variant="sii" />
    <section className="paper-layout">
      <aside><dl><div><dt>Venue</dt><dd>IEEE/SICE SII 2027</dd></div><div><dt>Status</dt><dd>Submitted</dd></div><div><dt>Focus</dt><dd>Observer reliability</dd></div></dl></aside>
      <div className="paper-body">
        <section><h2>Project context</h2>
          <p>Reliable state estimation depends on more than whether a sensor produces plausible values. Physical sensing conditions shape the data entering an estimator, while measurement interpretation determines what that data means for the state being reconstructed. This project studies observer reliability across that full chain, connecting physical sensing, measurement interpretation, observer dynamics, configurable correction, and reliability assessment rather than treating any one layer in isolation.</p>
          <p>The central concern is whether the information available to an observer is sufficient for dependable operation. Information sufficiency and observer decisions are therefore presented as downstream consequences of the sensing and estimation system, not as the project&apos;s primary identity. The work asks how corrupted sensing can affect the observer&apos;s evolving state, how configurable correction interacts with the information that is actually available, and how the resulting estimate should be assessed before it supports a later technical judgment.</p>
          <p>This public account describes the scope and engineering context without disclosing unpublished mechanisms, theorem details, special experimental constructions, numerical outcomes, private code, or result figures. The manuscript, authored by Aditi Acharya and Andrew Fleck, is submitted to SII 2027. No public paper or code artifact is currently linked. The diagram above is a general context visual rather than an illustration of the manuscript&apos;s unpublished methods or findings.</p>
        </section>
        <div className="paper-detail-links"><Link className="text-link" href="/publications">← All publications</Link><Link className="text-link" href="/research/#observer-reliability">Related research theme →</Link></div>
      </div>
    </section>
  </article></Shell>;
}
