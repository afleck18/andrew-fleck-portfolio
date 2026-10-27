import type { Metadata } from "next";
import Link from "next/link";
import { ContextVisual } from "../../ContextVisual";
import { Eyebrow, Shell } from "../../components";

const pageTitle = "Observer Dynamics in Robotic State Estimation";
const manuscriptTitle = "The Ghost in the Observer: Silent Propagation and Re-Exposure of Historical Actions";
const description = "A submitted ACC 2027 manuscript on observer dynamics in robotic state estimation using Astrobee's native estimator and recorded flight data.";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const url = `${base}/publications/observer-dynamics-robotic-state-estimation/`;

export const metadata: Metadata = { title: pageTitle, description, alternates: { canonical: url }, openGraph: { title: pageTitle, description, url, type: "article" }, twitter: { card: "summary", title: pageTitle, description } };

export default function ObserverDynamicsRoboticStateEstimation() {
  return <Shell><article className="paper-detail project-detail">
    <header className="paper-header">
      <Eyebrow>Manuscript</Eyebrow>
      <h1>{manuscriptTitle}</h1>
      <p className="project-manuscript-title">{pageTitle}</p>
      <p className="paper-authors">Aditi Acharya and Andrew Fleck</p>
    </header>
    <ContextVisual variant="acc" />
    <section className="paper-layout">
      <aside><dl><div><dt>Venue</dt><dd>ACC 2027</dd></div><div><dt>Status</dt><dd>Submitted</dd></div><div><dt>Context</dt><dd>Robotic state estimation</dd></div><div><dt>Platform</dt><dd>Astrobee</dd></div></dl></aside>
      <div className="paper-body">
        <section><h2>Project context</h2>
          <p>This manuscript extends the broader observer-reliability research into robotic state estimation. Its distinct setting is an implementation workflow built around Astrobee&apos;s native estimator and recorded flight data. Rather than centering structured corruption in physical sensing, as the related SII project does, this work focuses on observer interventions: how adjustments or corrections fit into the evolution of an estimator and how later state estimates should be interpreted within a robotic workflow.</p>
          <p>Using the native estimator grounds the project in the structure of an existing robotic estimation stack, where measurements, estimator configuration, state propagation, and recorded system behavior meet. Recorded flight data provides a repeatable context for examining that workflow over time without presenting Astrobee as a stand-in for every robotic platform. The manuscript therefore emphasizes estimation as an engineering process in which the observer incorporates measurement information and correction while producing state estimates for later technical assessment.</p>
          <p>This implementation context gives the ACC manuscript its own role within the larger research program. It connects to the SII manuscript through their shared concern with dependable physical state estimates, but shifts attention from corrupted sensing and measurement interpretation to intervention and estimator behavior in a robotic system. The page&apos;s scope remains at the system level: the platform, native estimator, recorded data, and observer-intervention setting. That distinction preserves the relationship between the manuscripts without making their research questions interchangeable.</p>
        </section>
        <div className="paper-detail-links"><Link className="text-link" href="/publications">← All publications</Link><Link className="text-link" href="/publications/when-corruption-looks-normal">Related SII manuscript →</Link><Link className="text-link" href="/research/#observer-reliability">Related research theme →</Link></div>
      </div>
    </section>
  </article></Shell>;
}
