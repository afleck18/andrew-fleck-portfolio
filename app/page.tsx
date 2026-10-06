import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Shell } from "./components";
import { projects, publications } from "./data";
import systemDiagram from "../public/robust-estimation-system-diagram.png";
import visionStability from "../public/vision-stability.png";

const publicationSummaries = [
  "Examines how learned measurement geometry affects observer contraction and when scalar-gain adjustment can recover it.",
  "Studies when histories that are indistinguishable through an observer’s available information require incompatible next actions.",
];

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
  const selectedPublications = publications.slice(0, 2);

  return <Shell>
    <section className="engineering-hero">
      <div className="hero-copy">
        <p className="system-label">Andrew Fleck / Engineer & Researcher</p>
        <h1>Understanding dynamical systems from partial observations.</h1>
        <p>I develop methods for estimating and analyzing physical systems from incomplete or uncertain measurements, with interests in nonlinear dynamics, control, robustness, and sensing.</p>
        <div className="actions"><Link className="button" href="/research">View research</Link><Link className="text-link" href="/publications">Publications <span aria-hidden="true">→</span></Link></div>
      </div>
      <aside className="hero-console" aria-labelledby="research-interests-title">
        <div className="console-top"><span id="research-interests-title">Research interests</span></div>
        <dl>
          <div><dt>01</dt><dd>Nonlinear dynamics and control</dd></div>
          <div><dt>02</dt><dd>State estimation and observer design</dd></div>
          <div><dt>03</dt><dd>Robustness and sensing uncertainty</dd></div>
          <div><dt>04</dt><dd>Inverse problems and physical modeling</dd></div>
        </dl>
        <div className="console-equation" role="img" aria-label="Measurement model: y sub t equals h of x sub t plus v sub t">
          y<sub>t</sub> = h(x<sub>t</sub>) + v<sub>t</sub><span>Measurement model</span>
        </div>
      </aside>
    </section>

    <section className="bio-strip">
      <p className="section-code">00 / Profile</p>
      <div>
        <h2>Research interests and approach</h2>
        <p>I am interested in how dynamics, physical structure, and available measurements shape what we can infer about a system. My work combines mathematical analysis, computational modeling, and experimental evaluation, with particular interests in aerospace, robotics, and environmental sensing.</p>
        <div className="profile-facts"><span>B.S. Biomedical Engineering, Purdue University</span><span>Based in West Lafayette, Indiana</span></div>
        <Link className="text-link profile-link" href="/about">About and experience <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="home-publications">
      <div className="home-section-heading"><p className="section-code">01 / Selected publications</p><div><h2>Selected publications</h2><p>Peer-reviewed and submitted work in nonlinear observation and information-constrained estimation.</p></div></div>
      <div className="home-publication-list">{selectedPublications.map((publication, index) => {
        const href = publication.slug ? `/publications/${publication.slug}` : `/publications/#${publication.anchor}`;
        const status = index === 0 ? "Accepted · IEEE CDC 2026" : "Submitted · IEEE/SICE SII 2027";
        return <article className="home-publication" key={publication.title}>
          <p className="publication-meta">{status}</p>
          <h3><Link href={href}>{publication.title}</Link></h3>
          <p className="home-publication-authors">{publication.authors}</p>
          {publication.detail && <p className="home-publication-detail">{publication.detail}</p>}
          <p className="home-publication-summary">{publicationSummaries[index]}</p>
          <div className="home-card-actions"><Link href={href}>Publication details →</Link>{publication.paper && <a href={publication.paper} target="_blank" rel="noopener noreferrer">Paper ↗</a>}</div>
        </article>;
      })}</div>
      <Link className="text-link home-section-link" href="/publications">All publications <span aria-hidden="true">→</span></Link>
    </section>

    <section className="work-section">
      <div className="home-section-heading"><p className="section-code">02 / Selected projects</p><div><h2>Selected projects</h2><p>Projects exploring estimation, sensing, and reconstruction through computational and experimental work.</p></div></div>
      <div className="selected-project-grid">{projects.map((project) => {
        const detailHref = `/research/#${project.slug}`;
        const visual = projectVisuals[project.slug];
        return <article className={`selected-project-card${visual ? " has-project-visual" : ""}`} key={project.slug}>
          {visual && <Link className="selected-project-visual" href={detailHref} aria-label={`View details for ${project.homeTitle}`}><Image src={visual.src} alt={visual.alt} sizes="(max-width: 700px) calc(100vw - 28px), 460px" unoptimized/></Link>}
          <div className="selected-project-body">
            <p className="project-meta">Project {project.number} · {project.area}</p>
            <h3><Link href={detailHref}>{project.homeTitle}</Link></h3>
            <p>{project.homeSummary}</p>
            <div className="home-card-actions"><Link href={detailHref}>Project details →</Link>{project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer">Code ↗</a>}</div>
          </div>
        </article>;
      })}</div>
    </section>
  </Shell>;
}
