import Link from "next/link";
import { Eyebrow, Shell } from "../components";
import { projects, publications } from "../data";
import { ProjectFigure, type ProjectFigureData } from "../ProjectFigure";
import cdcGeometryContraction from "../../public/cdc-geometry-contraction-rmse.png";
import systemDiagram from "../../public/robust-estimation-system-diagram.png";
import visionStability from "../../public/vision-stability.png";

export const metadata = { title: "Research" };

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
        summary: "Examines how learned measurement geometry affects nonlinear-observer contraction, characterizes when scalar-gain adjustment can recover contraction, and develops uncertainty-aware certification for gain intervention without retraining the measurement model.",
      },
      {
        kind: "publication",
        index: 1,
        label: "Research paper · IEEE/SICE SII 2027",
        summary: "Characterizes when histories indistinguishable through a scheduler’s available information require incompatible observer actions. Experiments examine how bounded, diagnostically nominal estimates can remain physically incorrect under coherent corruption.",
      },
      {
        kind: "ongoing",
        title: "Historical Effects of Observer Interventions",
        label: "Ongoing research · Observer dynamics",
        status: "In development",
        summary: "Investigating how a completed observer intervention can continue to influence later estimates and forecasts. Current experiments use paired replay of NASA’s Astrobee estimator on recorded data to examine persistent state differences after a single correction intervention.",
        note: "Native replay results remain conditional on assumed historical calibration and do not yet establish the complete matched-action chronology of differential silence and re-exposure.",
      },
      {
        kind: "project",
        index: 0,
        label: "Computational study · Nonlinear estimation · Degraded sensing",
        displayTitle: "Estimator Reliability Under Degraded Sensing",
        summary: "Evaluates an Extended Kalman Filter under nominal, state-dependent, and intermittent sensing degradation, examining whether covariance-based confidence tracks realized estimation error and how observation quality affects stability diagnostics.",
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
        kind: "publication",
        index: 2,
        label: "Ongoing research · Geophysical reconstruction",
        summary: "Developing a physics-structured approach to sea-surface-temperature reconstruction under sparse observations, time-varying sensing, and known external forcing.",
      },
      {
        kind: "project",
        index: 1,
        label: "Computational study · Dynamical inference",
        displayTitle: "Stability Analysis from Partial Observations",
        summary: "Investigates how measurement quality affects estimates of dynamical stability and the detection of changes in system behavior.",
      },
      {
        kind: "publication",
        index: 3,
        label: "Ongoing research · Operator-based analysis",
        summary: "Investigates operator-based approaches to stability assessment for forced geophysical systems under partial observation.",
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
              if (item.kind === "ongoing") {
                return <article className="theme-item theme-project" key={item.title}>
                  <div className="theme-item-content">
                    <p className="theme-item-kicker">{item.label}</p>
                    <span className="status preparation">{item.status}</span>
                    <h4>{item.title}</h4>
                    <p>{item.summary}</p>
                    <p className="research-scope-note">{item.note}</p>
                  </div>
                </article>;
              }

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
              return <article className={`theme-item theme-project${visual ? " has-visual" : ""}`} id={project.slug} key={project.slug}>
                <div className="theme-item-content">
                  <p className="theme-item-kicker">{item.label}</p>
                  <h4>{item.displayTitle}</h4>
                  <p>{item.summary}</p>
                  {project.repo && <div className="theme-item-actions"><a className="theme-item-link" href={project.repo} target="_blank" rel="noopener noreferrer">Code repository ↗</a></div>}
                </div>
                {visual && <ProjectFigure visual={visual}/>}
              </article>;
            })}</div>
          </section>
        </div>
      </div>
    </section>)}</div>
  </Shell>;
}
