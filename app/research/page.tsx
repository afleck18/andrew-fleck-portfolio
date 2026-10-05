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
    question: "How do measurement geometry and information degradation affect observer contraction, confidence, and decision reliability?",
    summary: "This theme studies nonlinear observers under learning-enabled, state-dependent, and corrupted measurement maps. It connects contraction analysis and gain design with controlled estimation experiments that separate realized error from covariance-based confidence.",
    projectIndexes: [0],
    publicationIndexes: [0, 1],
    visualIndex: 0,
  },
  {
    slug: "latent-stability",
    number: "02",
    title: "Stability Under Partial Observation",
    keywords: "Time-varying dynamics · sparse sensing · stability inference",
    question: "What stability information remains recoverable when dynamics are time-varying, forced, and only partially observed?",
    summary: "This theme develops estimation and operator-based tools for reconstructing latent dynamics and assessing local stability from sparse, noisy observations. It compares dynamics-based stability measures with statistical indicators to clarify when warning signals are trustworthy.",
    projectIndexes: [1],
    publicationIndexes: [2, 3],
    visualIndex: 1,
  },
  {
    slug: "learning-enabled-sensing",
    number: "03",
    title: "Learning-Enabled Sensing and Inverse Reconstruction",
    keywords: "Perception · tracking · inverse imaging",
    question: "How can physical state and signal structure be recovered when observations arrive through imperfect learned or image-based sensing systems?",
    summary: "This theme treats perception and reconstruction as estimation problems. It spans vision-based multi-object tracking and ECG waveform recovery, emphasizing uncertainty, association, filtering, and preservation of physically meaningful structure.",
    projectIndexes: [2, 3],
    publicationIndexes: [],
    visualIndex: 2,
  },
];

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
      <p>Research themes connect the underlying engineering questions to their associated publications, manuscripts, and implementation projects. Unreleased formulations and manuscript details are intentionally omitted.</p>
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
        <dl>
          <div><dt>Question</dt><dd>{theme.question}</dd></div>
          <div><dt>Summary</dt><dd>{theme.summary}</dd></div>
        </dl>
        <div className="theme-work">
          <section className="theme-work-group" aria-labelledby={`${theme.slug}-projects`}>
            <h3 id={`${theme.slug}-projects`}>Projects</h3>
            <div className="theme-item-list">{theme.projectIndexes.map((projectIndex) => {
              const project = projects[projectIndex];
              return <article className="theme-item theme-project" id={project.slug} key={project.slug}>
                <p className="theme-item-kicker">Project {project.number} · {project.area}</p>
                <h4>{project.title}</h4>
                <p>{project.approach} {project.significance}</p>
                {project.repo ? <a className="theme-item-link" href={project.repo}>Code repository ↗</a> : <span className="artifact-note">Code link not currently public</span>}
              </article>;
            })}</div>
          </section>
          {theme.publicationIndexes.length > 0 && <section className="theme-work-group" aria-labelledby={`${theme.slug}-publications`}>
            <h3 id={`${theme.slug}-publications`}>Publications & manuscripts</h3>
            <div className="theme-item-list">{theme.publicationIndexes.map((publicationIndex) => {
              const publication = publications[publicationIndex];
              const publicationHref = publication.slug ? `/publications/${publication.slug}` : publication.anchor ? `/publications/#${publication.anchor}` : null;
              return <article className="theme-item theme-publication" key={publication.title}>
                <span className={`status ${publication.status === "Accepted" ? "accepted" : publication.status === "Submitted" ? "submitted" : "preparation"}`}>{publication.status}</span>
                <h4>{publicationHref ? <Link href={publicationHref}>{publication.title}</Link> : publication.title}</h4>
                {publication.authors && <p className="theme-item-authors">{publication.authors}</p>}
                <p>{publication.venue || "Manuscript in development"}</p>
              </article>;
            })}</div>
          </section>}
        </div>
      </div>
    </section>)}</div>
  </Shell>;
}
