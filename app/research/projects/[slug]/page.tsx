import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, Shell } from "../../../components";
import { projects } from "../../../data";
import { ProjectFigure, type ProjectFigureData } from "../../../ProjectFigure";
import systemDiagram from "../../../../public/robust-estimation-system-diagram.png";
import visionStability from "../../../../public/vision-stability.png";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";

const visuals: Partial<Record<string, ProjectFigureData>> = {
  "robust-estimation": {
    type: "estimation",
    href: systemDiagram.src,
    caption: "Public experimental-framework diagram for the degraded-sensing benchmark.",
    ariaLabel: "estimator-reliability experimental-framework diagram",
  },
  "latent-dynamics": {
    type: "dynamics",
    href: visionStability.src,
    caption: "Public comparison of stability estimates under good and degraded measurement quality.",
    ariaLabel: "measurement-quality and stability-estimation figure",
  },
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};
  const url = `${base}/research/projects/${slug}/`;
  const description = project.homeSummary;
  return { title: project.title, description, alternates: { canonical: url }, openGraph: { title: project.title, description, url, type: "article" }, twitter: { card: "summary", title: project.title, description } };
}

export default async function ResearchProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  const visual = visuals[project.slug];

  return <Shell><article className="paper-detail engineering-project-detail">
    <header className="paper-header">
      <Eyebrow>Public engineering project · {project.number}</Eyebrow>
      <h1>{project.title}</h1>
      <p className="acceptance-note">{project.area}</p>
      {project.repo && <div className="publication-actions"><a className="button" href={project.repo} target="_blank" rel="noopener noreferrer">Code repository ↗</a></div>}
    </header>
    <section className={`paper-layout${visual ? " project-page-with-visual" : ""}`}>
      <aside>
        <dl><div><dt>Project</dt><dd>{project.number}</dd></div><div><dt>Area</dt><dd>{project.area}</dd></div><div><dt>Resource</dt><dd>{project.repo ? "Public code" : "Project summary"}</dd></div></dl>
        {visual && <ProjectFigure visual={visual} />}
      </aside>
      <div className="paper-body">
        <section><h2>Technical question</h2><p>{project.problem}</p></section>
        <section><h2>Approach</h2><p>{project.approach}</p></section>
        <section><h2>Evaluation</h2><p>{project.validation}</p></section>
        <section><h2>Engineering relevance</h2><p>{project.significance}</p></section>
        <div className="paper-detail-links"><Link className="text-link" href="/research">← Research index</Link>{project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">Code repository ↗</a>}</div>
      </div>
    </section>
  </article></Shell>;
}
