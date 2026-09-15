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
      panel: "estimation" as const,
    },
    {
      key: publications[1].anchor!,
      label: "MANUSCRIPT",
      number: "02",
      title: publications[1].title,
      meta: "Submitted",
      href: `/publications/#${publications[1].anchor}`,
      artifactHref: null,
      artifactLabel: null,
      panel: "dynamics" as const,
    },
    ...projects.slice(0, 3).map((project, index) => ({
      key: project.slug,
      label: "PROJECT",
      number: project.number,
      title: project.cardTitle || project.title,
      meta: project.area,
      href: `/research/#${project.slug}`,
      artifactHref: project.repo,
      artifactLabel: project.repo ? "Code ↗" : null,
      panel: panelTypes[index],
    })),
  ];
  const lastPage = featuredItems.length - 2;
  const visibleItems = featuredItems.slice(page, page + 2);
  const showPrevious = () => setPage((current) => current === 0 ? lastPage : current - 1);
  const showNext = () => setPage((current) => current === lastPage ? 0 : current + 1);

  return <div className="carousel-shell">
    <button className="carousel-arrow carousel-arrow-left" type="button" onClick={showPrevious} aria-label="Show previous research items" aria-controls="featured-research"><span>{"<"}</span></button>
    <div className="work-grid" id="featured-research" aria-live="polite">{visibleItems.map((item) => {
      return <article className="work-card" key={item.key}><Link className="work-card-visual-link" href={item.href} aria-label={`View ${item.title}`}><TechnicalPanel type={item.panel}/></Link><div className="work-card-body"><p className="project-meta project-title-line"><Link className="project-entry-link" href={item.href}>{item.label} {item.number} · {item.title}</Link>{item.artifactHref && <> · <a className="project-code-link" href={item.artifactHref} target="_blank" rel="noopener noreferrer">{item.artifactLabel}</a></>}</p><p className="project-keywords">{item.meta}</p></div></article>;
    })}</div>
    <button className="carousel-arrow carousel-arrow-right" type="button" onClick={showNext} aria-label="Show next research items" aria-controls="featured-research"><span>{">"}</span></button>
    <p className="carousel-position">{String(page + 1).padStart(2, "0")}–{String(page + 2).padStart(2, "0")} / 05</p>
  </div>;
}
