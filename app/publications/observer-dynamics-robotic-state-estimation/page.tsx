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
          <p>This manuscript extends the broader observer-reliability project into robotic state estimation, distinguishing itself through the general observer-intervention question and its implementation-centered setting. Astrobee&apos;s native estimator and recorded flight data ground that question in a real robotic estimation workflow where sensing, estimator configuration, and recorded data meet.</p>
        </section>
        <div className="paper-detail-links"><Link className="text-link" href="/publications">← All publications</Link><Link className="text-link" href="/research/#observer-reliability">Related research theme →</Link></div>
      </div>
    </section>
  </article></Shell>;
}
