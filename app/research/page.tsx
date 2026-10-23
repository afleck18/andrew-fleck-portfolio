import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Shell } from "../components";
import { projects, publications } from "../data";
import { ProjectFigure, type ProjectFigureData } from "../ProjectFigure";
import cdcGeometryContraction from "../../public/cdc-geometry-contraction-rmse.png";
import systemDiagram from "../../public/robust-estimation-system-diagram.png";
import visionStability from "../../public/vision-stability.png";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const metadataTitle = "Research — Andrew Fleck";
const metadataDescription = "Research themes and projects in nonlinear observers, partial observation, sensing, tracking, and signal reconstruction.";
export const metadata: Metadata = { title: "Research", description: metadataDescription, alternates: { canonical: `${base}/research/` }, openGraph: { title: metadataTitle, description: metadataDescription, url: `${base}/research/`, type: "website" }, twitter: { card: "summary", title: metadataTitle, description: metadataDescription } };

const publicationVisuals: Array<ProjectFigureData | null> = [
  {
    type: "cdc",
    href: cdcGeometryContraction.src,
    caption: "Sensitivity sweep comparing contraction-certificate behavior and observer RMSE as measurement sensitivity varies.",
    ariaLabel: "CDC sensitivity, contraction-certificate, and observer-RMSE figure",
  },
  null,
  null,
  null,
  null,
];

const projectVisuals: Array<ProjectFigureData | null> = [
  {
    type: "estimation",
    href: systemDiagram.src,
    caption: "Experimental framework holding the system dynamics fixed while observation regimes vary.",
    ariaLabel: "estimator-reliability experimental-framework diagram",
  },
  {
    type: "dynamics",
    href: visionStability.src,
    caption: "Comparison of stability estimates under good and degraded measurement quality.",
    ariaLabel: "measurement-quality and stability-estimation figure",
  },
  null,
  null,
];

const themes = [
  {
    slug: "observer-reliability",
    number: "01",
    title: "Measurement Geometry and Observer Decisions",
    keywords: "Nonlinear observers · Measurement geometry · Information constraints",
    question: "How do measurement structure and available information limit the design and operation of observers?",
    items: [
      {
        kind: "publication",
        index: 0,
        label: "Research paper · IEEE CDC 2026",
        summary: "Examines how learned measurement geometry affects observer contraction, characterizes when scalar-gain adjustment can recover it, and develops uncertainty-aware certification for gain intervention.",
      },
      {
        kind: "publication",
        index: 1,
        label: "Submitted manuscript · IEEE/SICE SII 2027",
        summary: "Studies observer reliability across physical sensing, measurement interpretation, observer dynamics, configurable correction, and downstream reliability assessment.",
      },
      {
        kind: "publication",
        index: 2,
        label: "Submitted manuscript · ACC 2027",
        summary: "Extends the observer-reliability project into robotic state estimation using Astrobee's native estimator and recorded flight data.",
      },
      {
        kind: "project",
        index: 0,
        label: "Computational study · Nonlinear estimation · Degraded sensing",
        displayTitle: "Estimator Reliability Under Degraded Sensing",
        summary: "Controlled sensing regimes are compared while the underlying dynamics remain fixed. The study examines how estimation error, covariance-based confidence, and observation-derived diagnostics respond to information loss.",
      },
    ],
  },
  {
    slug: "latent-stability",
    number: "02",
    title: "Dynamical Inference from Partial Observations",
    keywords: "State reconstruction · Time-varying dynamics · Stability assessment",
    question: "How can physical dynamics and known forcing support state reconstruction and dynamical analysis from sparse, noisy observations?",
    items: [
      {
        kind: "project",
        index: 1,
        label: "Computational study · Dynamical inference",
        displayTitle: "Stability Analysis from Partial Observations",
        summary: "The project compares dynamical stability estimates under good and degraded measurements, examining whether observation quality changes the apparent timing and character of system transitions.",
      },
    ],
  },
  {
    slug: "learning-enabled-sensing",
    number: "03",
    title: "Sensing, Tracking, and Signal Reconstruction",
    keywords: "Visual sensing · Probabilistic tracking · Inverse imaging",
    question: "How can trajectories and meaningful signal structure be recovered from noisy visual and image-based measurements?",
    items: [
      {
        kind: "project",
        index: 2,
        label: "Research engineering · Visual sensing · Tracking",
        displayTitle: "Vision-Based State Estimation and Tracking",
        summary: "Developed sensing and tracking pipelines that combine learned visual measurements with probabilistic filtering to estimate trajectories from RGB and thermal video.",
      },
      {
        kind: "project",
        index: 3,
        label: "Undergraduate thesis · Inverse imaging",
        displayTitle: "ECG Waveform Reconstruction",
        summary: "Reconstructed ECG waveforms from scanned images using image processing and filtering, with an emphasis on preserving physiological signal structure under noise and distortion.",
      },
    ],
  },
] as const;

function statusClass(status: string) {
  if (status === "Accepted") return "accepted";
  if (status === "Submitted") return "submitted";
  return "preparation";
}

export default function Research() {
  return <Shell>
    <section className="page-intro publication-intro">
      <Eyebrow>Research & projects</Eyebrow>
      <h1>Estimation and inference under incomplete sensing</h1>
      <p>My research explores how dynamics, sensing conditions, and physical structure shape estimation and inference. The themes below connect theoretical work with computational studies and sensing applications.</p>
    </section>
    <div className="case-studies">{themes.map((theme) => <section className="case-study research-theme" id={theme.slug} key={theme.slug}>
      <div className="case-index">
        <span>T-{theme.number}</span>
        <p>{theme.keywords}</p>
      </div>
      <div>
        <header className="theme-heading">
          <h2>{theme.title}</h2>
          <p className="theme-question"><span>Question</span>{theme.question}</p>
        </header>
        <div className="theme-work">
          <section className="theme-work-group" aria-labelledby={`${theme.slug}-projects`}>
            <h3 id={`${theme.slug}-projects`}>Projects</h3>
            <div className="theme-item-list">{theme.items.map((item) => {
              if (item.kind === "publication") {
                const publication = publications[item.index];
                const publicationHref = publication.slug ? `/publications/${publication.slug}` : publication.anchor ? `/publications/#${publication.anchor}` : null;
                const visual = publicationVisuals[item.index];
                return <article className={`theme-item theme-project${visual ? " has-visual" : ""}`} key={publication.title}>
                  <div className="theme-item-content">
                    <p className="theme-item-kicker">{item.label}</p>
                    <span className={`status ${statusClass(publication.status)}`}>{publication.status}</span>
                    <h4>{publicationHref ? <Link href={publicationHref}>{publication.title}</Link> : publication.title}</h4>
                    {publication.authors && <p className="theme-item-authors">{publication.authors}</p>}
                    {publication.detail && <p className="theme-item-detail">{publication.detail}</p>}
                    <p>{item.summary}</p>
                    {(publicationHref || publication.paper) && <div className="theme-item-actions">{publicationHref && <Link className="theme-item-link" href={publicationHref}>Publication details →</Link>}{publication.paper && <a className="theme-item-link" href={publication.paper} target="_blank" rel="noopener noreferrer">Paper ↗</a>}</div>}
                  </div>
                  {visual && <ProjectFigure visual={visual}/>}
                </article>;
              }

              const project = projects[item.index];
              const visual = projectVisuals[item.index];
              const projectHref = `/research/projects/${project.slug}`;
              return <article className={`theme-item theme-project${visual ? " has-visual" : ""}`} id={project.slug} key={project.slug}>
                <div className="theme-item-content">
                  <p className="theme-item-kicker">{item.label}</p>
                  <h4><Link href={projectHref}>{item.displayTitle}</Link></h4>
                  <p>{item.summary}</p>
                  <div className="theme-item-actions"><Link className="theme-item-link" href={projectHref}>Project details →</Link>{project.repo && <a className="theme-item-link" href={project.repo} target="_blank" rel="noopener noreferrer">Code repository ↗</a>}</div>
                </div>
                {visual && <ProjectFigure visual={visual}/>}
              </article>;
            })}</div>
          </section>
        </div>
      </div>
    </section>)}</div>
    <section className="future-directions" aria-labelledby="future-directions-title">
      <p className="section-code">Future directions</p>
      <div><h2 id="future-directions-title">Work in preparation</h2><p>Early-stage topics are listed separately from completed projects and submitted manuscripts.</p><ul>{publications.filter((publication) => publication.status === "In preparation").map((publication) => <li key={publication.title}>{publication.title}</li>)}</ul></div>
    </section>
  </Shell>;
}
