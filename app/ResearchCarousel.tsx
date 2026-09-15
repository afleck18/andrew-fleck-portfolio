"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import systemDiagram from "../public/robust-estimation-system-diagram.png";
import visionStability from "../public/vision-stability.png";
import { projects, publications } from "./data";

const panelTypes = ["estimation", "dynamics", "tracking", "ecg"] as const;
export type PanelType = (typeof panelTypes)[number];

export function TechnicalPanel({ type }: { type: PanelType }) {
  if (type === "estimation") {
    return <div className="technical-panel diagram-panel"><Image src={systemDiagram} alt="Experimental framework for estimator reliability under degraded sensing" fill sizes="(max-width: 700px) calc(100vw - 116px), 380px" priority unoptimized/></div>;
  }
  if (type === "dynamics") {
    return <div className="technical-panel diagram-panel"><Image src={visionStability} alt="Effect of measurement quality on stability estimation" fill sizes="(max-width: 700px) calc(100vw - 116px), 380px" unoptimized/></div>;
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
  const featuredItems = [
    {
      key: publications[0].slug!,
      label: "PAPER",
      number: "01",
      title: publications[0].title,
      meta: "Accepted · CDC 2026",
      href: `/publications/${publications[0].slug}`,
      artifactHref: publications[0].paper,
      artifactLabel: "Paper ↗",
    },
    {
      key: publications[1].anchor!,
      label: "MANUSCRIPT",
      number: "02",
      title: publications[1].title,
      meta: "Submitted · SII 2027",
      href: `/publications/#${publications[1].anchor}`,
      artifactHref: null,
      artifactLabel: null,
    },
    ...projects.slice(2).map((project) => ({
      key: project.slug,
      label: "PROJECT",
      number: project.number,
      title: project.cardTitle || project.title,
      meta: project.area,
      href: `/research/#${project.slug}`,
      artifactHref: project.repo,
      artifactLabel: project.repo ? "Code ↗" : null,
    })),
  ];
  const visibleItems = featuredItems.slice(page * 2, page * 2 + 2);
  const changePage = () => setPage((current) => current === 0 ? 1 : 0);

  return <div className="carousel-shell">
    <button className="carousel-arrow carousel-arrow-left" type="button" onClick={changePage} aria-label="Show previous research projects" aria-controls="featured-research"><span>{"<"}</span></button>
    <div className="work-grid" id="featured-research" aria-live="polite">{visibleItems.map((item,index) => {
      const itemIndex = page * 2 + index;
      return <article className="work-card" key={item.key}><Link className="work-card-visual-link" href={item.href} aria-label={`View ${item.title}`}><TechnicalPanel type={panelTypes[itemIndex]}/></Link><div className="work-card-body"><p className="project-meta project-title-line"><Link className="project-entry-link" href={item.href}>{item.label} {item.number} · {item.title}</Link>{item.artifactHref && <> · <a className="project-code-link" href={item.artifactHref} target="_blank" rel="noopener noreferrer">{item.artifactLabel}</a></>}</p><p className="project-keywords">{item.meta}</p></div></article>;
    })}</div>
    <button className="carousel-arrow carousel-arrow-right" type="button" onClick={changePage} aria-label="Show next research projects" aria-controls="featured-research"><span>{">"}</span></button>
    <p className="carousel-position">{page === 0 ? "01–02" : "03–04"} / 04</p>
  </div>;
}
