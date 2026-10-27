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
          <p>This manuscript studies observer reliability when physical sensing is affected by structured corruption. Its scope begins with the sensing process itself: how changes in physical measurements pass through the interpretation that relates those measurements to the physical state being estimated. From there, the project considers how the observer&apos;s internal dynamics carry that interpreted information forward and how configurable correction interacts with the measurement stream. The emphasis is on the dependability of the resulting physical state estimate, not simply whether an individual sensor value appears plausible.</p>
          <p>The project organizes this setting as a connected engineering chain spanning physical sensing, measurement interpretation, observer dynamics, configurable correction, and downstream reliability assessment. That framing keeps the state estimate at the center of the manuscript. Information availability and observer action selection remain relevant, but they are treated as downstream consequences of the sensing and estimation conditions rather than as the work&apos;s primary subject. The resulting overview connects what occurs at the sensor to how the estimator evolves and how its output should be interpreted before supporting a later technical assessment.</p>
          <p>Within the broader research program, the SII manuscript is the study centered on corrupted physical sensing and its consequences for observer behavior. It complements the related ACC manuscript, which carries the intervention question into a robotic state-estimation workflow using an existing estimator and recorded flight data. The two projects share a concern with reliable state estimation while examining that concern from distinct system contexts.</p>
        </section>
        <div className="paper-detail-links"><Link className="text-link" href="/publications">← All publications</Link><Link className="text-link" href="/publications/observer-dynamics-robotic-state-estimation">Related ACC manuscript →</Link><Link className="text-link" href="/research/#observer-reliability">Related research theme →</Link></div>
      </div>
    </section>
  </article></Shell>;
}
