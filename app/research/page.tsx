import Link from "next/link";
import { Eyebrow, Shell } from "../components";
import { projects, publications } from "../data";
import { TechnicalPanel, type PanelType } from "../ResearchCarousel";
import systemDiagram from "../../public/robust-estimation-system-diagram.png";
import visionStability from "../../public/vision-stability.png";

export const metadata = { title: "Research" };

const visualTypes: PanelType[] = ["estimation", "dynamics", "tracking", "ecg"];
const visualHrefs = [systemDiagram.src, visionStability.src, null, null];
const visualCaptions = ["Open full diagram ↗", "Open full figure ↗", "Tracking simulation", "Reconstruction view"];
const themes = [
  {
    slug: "observer-reliability",
    number: "01",
    title: "Observer Geometry and Reliable Estimation",
    keywords: "Nonlinear observers · measurement geometry · robustness",
    items: [
      { kind: "publication", index: 0, context: "CDC 2026", summary: "Studies how state-dependent measurement sensitivity changes nonlinear-observer contraction margins and develops a Jacobian-based gain normalization that restores stable estimation without retraining the measurement model." },
      { kind: "publication", index: 1, context: "SII 2027", summary: "Examines cases where identical corrupted inputs can require incompatible observer responses, exposing limits of fixed correction logic under measurement corruption." },
      { kind: "project", index: 0, summary: "Benchmarks an Extended Kalman Filter under nominal, state-dependent, and intermittent sensing degradation to compare estimation error, confidence, and observation-derived stability diagnostics." },
    ],
    visualIndex: 0,
  },
  {
    slug: "latent-stability",
    number: "02",
    title: "Stability Under Partial Observation",
    keywords: "Time-varying dynamics · sparse sensing · stability inference",
    items: [
      { kind: "publication", index: 2, context: "Manuscript in preparation", summary: "Develops state-estimation methods for non-stationary geophysical systems observed through sparse sensing under external forcing." },
      { kind: "publication", index: 3, context: "Manuscript in preparation", summary: "Investigates operator-based certificates for assessing stability in forced geophysical systems when only partial observations are available." },
      { kind: "project", index: 1, summary: "Tests how reliably time-varying dynamics and stability transitions can be inferred from partial, noisy measurements under forcing." },
    ],
    visualIndex: 1,
  },
  {
    slug: "learning-enabled-sensing",
    number: "03",
    title: "Learning-Enabled Sensing and Inverse Reconstruction",
    keywords: "Perception · tracking · inverse imaging",
    items: [
      { kind: "project", index: 2, summary: "Combines segmentation, multi-object tracking, and recursive filtering to estimate trajectories from noisy RGB and thermal imagery." },
      { kind: "project", index: 3, summary: "Treats ECG recovery as an inverse-imaging problem, prioritizing preservation of the underlying physiological waveform under scanning noise and distortion." },
    ],
    visualIndex: 2,
  },
] as const;

function DiagramThumbnail({ index, mobile = false }: { index: number; mobile?: boolean }) {
  const panel = <TechnicalPanel type={visualTypes[index]}/>;
  const href = visualHrefs[index];
  return <figure className={mobile ? "case-diagram case-diagram-mobile" : "case-diagram case-diagram-desktop"}>
    {href ? <a className="case-diagram-link" href={href} target="_blank" rel="noreferrer" aria-label={`Open the full ${index === 0 ? "experimental framework diagram" : "stability estimation figure"}`}>{panel}</a> : <div className="case-diagram-frame">{panel}</div>}
    <figcaption>{visualCaptions[index]}</figcaption>
  </figure>;
}

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
        <DiagramThumbnail index={theme.visualIndex}/>
      </div>
      <div>
        <h2>{theme.title}</h2>
        <DiagramThumbnail index={theme.visualIndex} mobile/>
        <div className="theme-work">
          <section className="theme-work-group" aria-labelledby={`${theme.slug}-projects`}>
            <h3 id={`${theme.slug}-projects`}>Projects</h3>
            <div className="theme-item-list">{theme.items.map((item) => {
              if (item.kind === "publication") {
                const publication = publications[item.index];
                const publicationHref = publication.slug ? `/publications/${publication.slug}` : publication.anchor ? `/publications/#${publication.anchor}` : null;
                return <article className="theme-item theme-project" key={publication.title}>
                  <p className="theme-item-kicker">Research project · {item.context}</p>
                  <span className={`status ${publication.status === "Accepted" ? "accepted" : publication.status === "Submitted" ? "submitted" : "preparation"}`}>{publication.status}</span>
                  <h4>{publicationHref ? <Link href={publicationHref}>{publication.title}</Link> : publication.title}</h4>
                  <p>{item.summary}</p>
                  {publicationHref && <Link className="theme-item-link" href={publicationHref}>Project details →</Link>}
                </article>;
              }
              const project = projects[item.index];
              return <article className="theme-item theme-project" id={project.slug} key={project.slug}>
                <p className="theme-item-kicker">Implementation project · {project.area}</p>
                <h4>{project.title}</h4>
                <p>{item.summary}</p>
                {project.repo ? <a className="theme-item-link" href={project.repo}>Code repository ↗</a> : <span className="artifact-note">Code link not currently public</span>}
              </article>;
            })}</div>
          </section>
        </div>
      </div>
    </section>)}</div>
  </Shell>;
}
