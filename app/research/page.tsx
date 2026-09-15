import Image from "next/image";
import { Eyebrow, Shell } from "../components";
import { projects } from "../data";
import systemDiagram from "../../public/robust-estimation-system-diagram.png";

export const metadata = { title: "Research" };

const diagramHref = systemDiagram.src;

function DiagramThumbnail({ mobile = false }: { mobile?: boolean }) {
  return <figure className={mobile ? "case-diagram case-diagram-mobile" : "case-diagram case-diagram-desktop"}>
    <a className="case-diagram-link" href={diagramHref} target="_blank" rel="noreferrer" aria-label="Open the full experimental framework diagram">
      <Image src={systemDiagram} alt="Experimental framework for estimator reliability under degraded sensing" sizes={mobile ? "calc(100vw - 28px)" : "230px"} unoptimized/>
    </a>
    <figcaption>Open full diagram ↗</figcaption>
  </figure>;
}

export default function Research() {
  return <Shell>
    <section className="page-intro publication-intro">
      <Eyebrow>Research & projects</Eyebrow>
      <h1>Engineering questions under uncertain observation.</h1>
      <p>Case studies are framed around the question, method, and validation philosophy. Unreleased formulations and manuscript details are intentionally omitted.</p>
    </section>
    <div className="case-studies">{projects.map(p => <article className="case-study" id={p.slug} key={p.slug}>
      <div className="case-index">
        <span>{p.number}</span>
        <p>{p.area}</p>
        {p.slug === "robust-estimation" && <DiagramThumbnail/>}
      </div>
      <div>
        <h2>{p.title}</h2>
        {p.slug === "robust-estimation" && <DiagramThumbnail mobile/>}
        <dl>
          <div><dt>Question</dt><dd>{p.problem}</dd></div>
          <div><dt>{p.cardTitle ? "Method" : "Approach"}</dt><dd>{p.approach}</dd></div>
          <div><dt>Validation</dt><dd>{p.validation}</dd></div>
          <div><dt>{p.cardTitle ? "Finding" : "Why it matters"}</dt><dd>{p.significance}</dd></div>
        </dl>
        {p.repo ? <a className="text-link" href={p.repo}>View code repository <span aria-hidden="true">↗</span></a> : <span className="artifact-note">Code link not currently public</span>}
      </div>
    </article>)}</div>
  </Shell>;
}
