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
      <Eyebrow>Submitted manuscript · ACC 2027</Eyebrow>
      <h1>{pageTitle}</h1>
      <p className="project-manuscript-title">{manuscriptTitle}</p>
      <p className="paper-authors">Aditi Acharya and Andrew Fleck</p>
      <p className="acceptance-note">Submitted to the 2027 American Control Conference (ACC 2027).</p>
    </header>
    <ContextVisual variant="acc" />
    <section className="paper-layout">
      <aside><dl><div><dt>Venue</dt><dd>ACC 2027</dd></div><div><dt>Status</dt><dd>Submitted</dd></div><div><dt>Context</dt><dd>Robotic state estimation</dd></div><div><dt>Platform</dt><dd>Astrobee</dd></div></dl></aside>
      <div className="paper-body">
        <section><h2>Project context</h2>
          <p>This project extends the broader observer-reliability program into robotic state estimation. It examines the general observer-intervention context: when an estimator has been adjusted or corrected, how should engineers reason about its subsequent dynamics and the interpretation of later outputs? The project gives that question an implementation-centered identity rather than treating it as another corrupted-sensing study.</p>
          <p>The implementation context uses Astrobee&apos;s native estimator and recorded flight data. Working with the native estimator grounds the investigation in a real robotic estimation stack, where sensing, estimator configuration, and recorded data meet. Recorded data provides a repeatable setting for examining observer behavior without presenting the platform as a proxy for every robotic system.</p>
          <p>The public description intentionally remains at the system level: the estimator, the data source, the intervention context, and the reliability question. It does not disclose the submitted manuscript&apos;s mechanisms, experimental constructions, numerical outcomes, unpublished figures, or private code. The manuscript, authored by Aditi Acharya and Andrew Fleck, is submitted to ACC 2027. It is related to the larger observer-reliability effort but is specifically concerned with robotic state-estimation workflows and practical implementation context. Public paper or code links will be added only if those resources become available.</p>
        </section>
        <div className="paper-detail-links"><Link className="text-link" href="/publications">← All publications</Link><Link className="text-link" href="/research/#observer-reliability">Related research theme →</Link></div>
      </div>
    </section>
  </article></Shell>;
}
