import Image, { type StaticImageData } from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "./components";
import { projects, publications } from "./data";
import cdcGeometryContraction from "../public/cdc-geometry-contraction-rmse.png";
import systemDiagram from "../public/robust-estimation-system-diagram.png";
import visionStability from "../public/vision-stability.png";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const homeTitle = "Andrew Fleck — Dynamical Systems & Estimation";
const homeDescription = "Research on how sensing conditions shape state estimation, observer dynamics, and the reliability of downstream assessments.";
export const metadata: Metadata = { title: { absolute: homeTitle }, description: homeDescription, alternates: { canonical: `${base}/` }, openGraph: { title: homeTitle, description: homeDescription, url: `${base}/`, type: "website" }, twitter: { card: "summary", title: homeTitle, description: homeDescription } };

const publicationSummaries: Record<string, string> = {
  "when-corruption-looks-normal": "Examines observer reliability across physical sensing, measurement interpretation, observer dynamics, configurable correction, and downstream assessment.",
  "observer-dynamics-robotic-state-estimation": "Extends the observer-reliability program into a robotic implementation context using Astrobee's native estimator and recorded flight data.",
};

const publicationDisplayTitles: Record<string, string> = {
  "when-corruption-looks-normal": "Observer Reliability Under Corrupted Sensing",
  "observer-dynamics-robotic-state-estimation": "Observer Dynamics in Robotic State Estimation",
};

const projectVisuals: Record<string, { src: StaticImageData; alt: string }> = {
  "robust-estimation": {
    src: systemDiagram,
    alt: "Experimental framework for estimator reliability under degraded sensing",
  },
  "latent-dynamics": {
    src: visionStability,
    alt: "Effect of measurement quality on stability estimation",
  },
};

export default function Home() {
  const cdc = publications[0];
  const submittedPublications = publications.slice(1, 3);

  return <Shell>
    <section className="engineering-hero">
      <div className="hero-copy">
        <p className="system-label">Andrew Fleck · Dynamical Systems &amp; Estimation</p>
        <h1>Measurement geometry. Observer dynamics. Estimation reliability.</h1>
        <p>Research on how sensing conditions shape state estimation and the reliability of downstream assessments. Mathematical analysis and computational experiments connect measurement geometry to observer contraction, estimation error, and uncertainty characterization.</p>
        <div className="actions"><Link className="button" href="/research">View research</Link><Link className="text-link" href="/publications">Publications <span aria-hidden="true">→</span></Link></div>
      </div>
      <aside className="featured-paper" aria-labelledby="featured-cdc-title">
        <div className="featured-paper-visual"><Image src={cdcGeometryContraction} alt="Sensitivity, contraction-certificate, and observer-RMSE figure from the accepted CDC paper" sizes="(max-width: 950px) min(100vw - 64px, 620px), 420px" priority unoptimized /></div>
        <div className="featured-paper-body">
          <p className="publication-meta">Accepted · IEEE CDC 2026</p>
          <h2 id="featured-cdc-title"><Link href={`/publications/${cdc.slug}`}>{cdc.title}</Link></h2>
          <p className="featured-paper-authors">{cdc.authors}</p>
          <p>Derives the observer error operator induced by learned measurement geometry, identifies when scalar-gain repair is possible, and develops uncertainty-aware contraction certification.</p>
          <div className="home-card-actions"><Link href={`/publications/${cdc.slug}`}>Paper details →</Link><a href={cdc.paper!} target="_blank" rel="noopener noreferrer">Paper ↗</a></div>
        </div>
      </aside>
    </section>

    <section className="home-publications">
      <div className="home-section-heading"><p className="section-code">01 / Submitted work</p><div><h2>Submitted work</h2><p>Observer-reliability research in corrupted-sensing and robotic state-estimation contexts.</p></div></div>
      <div className="home-publication-list">{submittedPublications.map((publication) => {
        const href = `/publications/${publication.slug}`;
        const status = publication.venue?.includes("SII") ? "Submitted · IEEE/SICE SII 2027" : "Submitted · ACC 2027";
        return <article className="home-publication" key={publication.title}>
          <p className="publication-meta">{status}</p>
          <h3><Link href={href}>{publicationDisplayTitles[publication.slug!]}</Link></h3>
          <p className="home-publication-authors">{publication.authors}</p>
          {publication.detail && <p className="home-publication-detail">{publication.detail}</p>}
          <p className="home-publication-summary">{publicationSummaries[publication.slug!]}</p>
          <div className="home-card-actions"><Link href={href}>Publication details →</Link>{publication.paper && <a href={publication.paper} target="_blank" rel="noopener noreferrer">Paper ↗</a>}</div>
        </article>;
      })}</div>
      <Link className="text-link home-section-link" href="/publications">All publications <span aria-hidden="true">→</span></Link>
    </section>

    <section className="work-section">
      <div className="home-section-heading"><p className="section-code">02 / Selected projects</p><div><h2>Selected projects</h2><p>Two computational implementations focused on estimation reliability and dynamical inference.</p></div></div>
      <div className="selected-project-grid">{projects.map((project) => {
        const detailHref = `/research/projects/${project.slug}`;
        const visual = projectVisuals[project.slug];
        return <article className={`selected-project-card${visual ? " has-project-visual" : ""}`} key={project.slug}>
          {visual && <Link className="selected-project-visual" href={detailHref} aria-label={`View details for ${project.homeTitle}`}><Image src={visual.src} alt={visual.alt} sizes="(max-width: 700px) calc(100vw - 28px), 460px" unoptimized/></Link>}
          <div className="selected-project-body">
            <p className="project-meta">Project {project.number} · {project.area}</p>
            <h3><Link href={detailHref}>{project.homeTitle}</Link></h3>
            <p>{project.homeSummary}</p>
            <div className="home-card-actions"><Link href={detailHref}>Research summary →</Link>{project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Code ↗</a>}</div>
          </div>
        </article>;
      })}</div>
    </section>
  </Shell>;
}
