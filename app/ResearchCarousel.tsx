"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import systemDiagram from "../public/robust-estimation-system-diagram.png";
import { projects } from "./data";

const panelTypes = ["estimation", "dynamics", "tracking", "ecg"] as const;
export type PanelType = (typeof panelTypes)[number];

export function TechnicalPanel({ type }: { type: PanelType }) {
  if (type === "estimation") {
    return <div className="technical-panel diagram-panel"><Image src={systemDiagram} alt="Experimental framework for estimator reliability under degraded sensing" fill sizes="(max-width: 700px) calc(100vw - 116px), 380px" priority unoptimized/></div>;
  }
  const labels = { estimation: "EST-01", dynamics: "DYN-02", tracking: "TRK-03", ecg: "SIG-04" };
  return <div className={`technical-panel ${type}`} aria-hidden="true">
    <div className="panel-header"><span>{labels[type]}</span><span>{type === "ecg" ? "RECONSTRUCTION" : "SIMULATION"}</span></div>
    <div className="plot-area"><i className="axis-x"/><i className="axis-y"/><i className="curve primary"/><i className="curve secondary"/>{type === "tracking" && <><b className="target t1"/><b className="target t2"/><b className="target t3"/></>}</div>
    <div className="panel-footer"><span>t = 0 → T</span><span>{type === "tracking" ? "x̂, ŷ" : type === "ecg" ? "V(t)" : "x(t), x̂(t)"}</span></div>
  </div>;
}

export function ResearchCarousel() {
  const [page, setPage] = useState(0);
  const visibleProjects = projects.slice(page * 2, page * 2 + 2);
  const changePage = () => setPage((current) => current === 0 ? 1 : 0);

  return <div className="carousel-shell">
    <button className="carousel-arrow carousel-arrow-left" type="button" onClick={changePage} aria-label="Show previous research projects" aria-controls="featured-research"><span>{"<"}</span></button>
    <div className="work-grid" id="featured-research" aria-live="polite">{visibleProjects.map((project,index) => {
      const projectIndex = page * 2 + index;
      return <article className="work-card" key={project.slug}><TechnicalPanel type={panelTypes[projectIndex]}/><div className="work-card-body"><p className="project-meta project-title-line"><Link className="project-entry-link" href={`/research/#${project.slug}`}>PROJECT {project.number} · {project.cardTitle || project.title}</Link>{project.repo && <> · <a className="project-code-link" href={project.repo}>Code ↗</a></>}</p><p className="project-keywords">{project.area}</p></div></article>;
    })}</div>
    <button className="carousel-arrow carousel-arrow-right" type="button" onClick={changePage} aria-label="Show next research projects" aria-controls="featured-research"><span>{">"}</span></button>
    <p className="carousel-position">{page === 0 ? "01–02" : "03–04"} / 04</p>
  </div>;
}
