import Link from "next/link";
import { Eyebrow, Shell } from "../components";
import { projects, publications } from "../data";
import { ProjectFigure, type ProjectFigureData } from "../ProjectFigure";
import cdcGeometryContraction from "../../public/cdc-geometry-contraction-rmse.png";
import systemDiagram from "../../public/robust-estimation-system-diagram.png";
import visionStability from "../../public/vision-stability.png";

export const metadata = { title: "Research" };

const publicationVisuals: Array<ProjectFigureData | null> = [
  { type: "cdc", href: cdcGeometryContraction.src, caption: "Open CDC project figure ↗", ariaLabel: "Open the full CDC contraction and observer performance figure" },
  null,
  null,
  null,
];
const projectVisuals: ProjectFigureData[] = [
  { type: "estimation", href: systemDiagram.src, caption: "Open project framework ↗", ariaLabel: "Open the full estimator reliability framework" },
  { type: "dynamics", href: visionStability.src, caption: "Open project figure ↗", ariaLabel: "Open the full stability estimation figure" },
  { type: "tracking", href: null, caption: "Tracking simulation", ariaLabel: "Vision tracking simulation" },
  { type: "ecg", href: null, caption: "Reconstruction view", ariaLabel: "ECG reconstruction view" },
];
const themes = [
  {
    slug: "observer-reliability",
    number: "01",
    title: "Information Geometry and Reliable Observer Decisions",
    keywords: "Nonlinear observers · information geometry · decision sufficiency",
    question: "How do measurement geometry and information loss affect observer contraction, action selection, and downstream reliability?",
    items: [
      { kind: "publication", index: 0, context: "CDC 2026", summary: "Studies how state-dependent measurement sensitivity changes nonlinear-observer contraction margins and develops a Jacobian-based gain normalization that restores stable estimation without retraining the measurement model." },
      { kind: "publication", index: 1, context: "SII 2027", summary: "Formalizes when causal compression maps histories requiring incompatible observer actions to the same scheduler input, showing that bounded, nominal-looking tracking can still conceal persistent physical bias and altered downstream prediction." },
      { kind: "project", index: 0, summary: "Benchmarks an Extended Kalman Filter under nominal, state-dependent, and intermittent sensing degradation to compare estimation error, confidence, and observation-derived stability diagnostics." },
    ],
  },
  {
    slug: "latent-stability",
    number: "02",
    title: "Stability Under Partial Observation",
    keywords: "Time-varying dynamics · sparse sensing · stability inference",
    question: "What stability information remains recoverable when dynamics are time-varying, forced, and only partially observed?",
    items: [
      { kind: "publication", index: 2, context: "Manuscript", summary: "Develops state-estimation methods for non-stationary geophysical systems observed through sparse sensing under external forcing." },
      { kind: "publication", index: 3, context: "Manuscript", summary: "Investigates operator-based certificates for assessing stability in forced geophysical systems when only partial observations are available." },
      { kind: "project", index: 1, summary: "Tests how reliably time-varying dynamics and stability transitions can be inferred from partial, noisy measurements under forcing." },
    ],
  },
  {
    slug: "learning-enabled-sensing",
    number: "03",
    title: "Learning-Enabled Sensing and Inverse Reconstruction",
    keywords: "Perception · tracking · inverse imaging",
    question: "How can physical state and signal structure be recovered when observations arrive through imperfect learned or image-based sensing systems?",
    items: [
      { kind: "project", index: 2, summary: "Combines segmentation, multi-object tracking, and recursive filtering to estimate trajectories from noisy RGB and thermal imagery." },
      { kind: "project", index: 3, summary: "Treats ECG recovery as an inverse-imaging problem, prioritizing preservation of the underlying physiological waveform under scanning noise and distortion." },
    ],
  },
] as const;

export default function Research() {
  return <Shell>
    <section className="page-intro publication-intro">
      <Eyebrow>Research & projects</Eyebrow>
      <h1>Engineering questions under uncertain observation.</h1>
      <p>Research themes organize the individual projects that developed into implementations, manuscripts, and publications. Each entry provides a concise view of the engineering contribution.</p>
    </section>
    <div className="case-studies">{themes.map((theme) => <section className="case-study research-theme" id={theme.slug} key={theme.slug}>
      <div className="case-index">
        <span>T-{theme.number}</span>
        <p>{theme.keywords}</p>
      </div>
      <div>
        <header className="theme-heading">
          <h2>{theme.title}</h2>
          <p className="theme-question"><span>Research question</span>{theme.question}</p>
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
                  {visual && <ProjectFigure visual={visual}/>}<div className="theme-item-content">
                    <p className="theme-item-kicker">Research project · {item.context}</p>
                    <span className={`status ${publication.status === "Accepted" ? "accepted" : publication.status === "Submitted" ? "submitted" : "preparation"}`}>{publication.status}</span>
                    <h4>{publicationHref ? <Link href={publicationHref}>{publication.title}</Link> : publication.title}</h4>
                    <p>{item.summary}</p>
                    {publicationHref && <Link className="theme-item-link" href={publicationHref}>Project details →</Link>}
                  </div>
                </article>;
              }
              const project = projects[item.index];
              const visual = projectVisuals[item.index];
              return <article className="theme-item theme-project has-visual" id={project.slug} key={project.slug}>
                <ProjectFigure visual={visual}/><div className="theme-item-content">
                  <p className="theme-item-kicker">Implementation project · {project.area}</p>
                  <h4>{project.title}</h4>
                  <p>{item.summary}</p>
                  {project.repo ? <a className="theme-item-link" href={project.repo}>Code repository ↗</a> : <span className="artifact-note">Code link not currently public</span>}
                </div>
              </article>;
            })}</div>
          </section>
        </div>
      </div>
    </section>)}</div>
  </Shell>;
}
