"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cdcGeometryContraction from "../public/cdc-geometry-contraction-rmse.png";
import systemDiagram from "../public/robust-estimation-system-diagram.png";
import visionStability from "../public/vision-stability.png";
import { projects, publications } from "./data";

const projectPanelTypes = ["estimation", "dynamics", "tracking", "ecg"] as const;
export type PanelType = "cdc" | "manuscript" | (typeof projectPanelTypes)[number];

export function TechnicalPanel({ type }: { type: PanelType }) {
  if (type === "cdc") {
    return <div className="technical-panel diagram-panel"><Image src={cdcGeometryContraction} alt="Sensitivity, contraction certificate, and observer RMSE under sensitivity variation" fill sizes="(max-width: 700px) calc(100vw - 116px), 380px" priority unoptimized/></div>;
  }
  if (type === "estimation") {
    return <div className="technical-panel diagram-panel"><Image src={systemDiagram} alt="Experimental framework for estimator reliability under degraded sensing" fill sizes="(max-width: 700px) calc(100vw - 116px), 380px" unoptimized/></div>;
  }
  if (type === "dynamics") {
    return <div className="technical-panel diagram-panel"><Image src={visionStability} alt="Effect of measurement quality on stability estimation" fill sizes="(max-width: 700px) calc(100vw - 116px), 380px" unoptimized/></div>;
  }
  const labels = { cdc: "OBS-P01", manuscript: "OBS-M02", estimation: "EST-01", dynamics: "DYN-02", tracking: "TRK-03", ecg: "SIG-04" };
  const modes = { cdc: "CONTRACTION", manuscript: "ANALYSIS", estimation: "SIMULATION", dynamics: "SIMULATION", tracking: "SIMULATION", ecg: "RECONSTRUCTION" };
  const variables = { cdc: "e(t), V(t)", manuscript: "y(t), u(t)", estimation: "x(t), x̂(t)", dynamics: "x(t), x̂(t)", tracking: "x̂, ŷ", ecg: "V(t)" };
  return <div className={`technical-panel ${type}`} aria-hidden="true">
    <div className="panel-header"><span>{labels[type]}</span><span>{modes[type]}</span></div>
    <div className="plot-area"><i className="axis-x"/><i className="axis-y"/><i className="curve primary"/><i className="curve secondary"/>{type === "tracking" && <><b className="target t1"/><b className="target t2"/><b className="target t3"/></>}</div>
    <div className="panel-footer"><span>t = 0 → T</span><span>{variables[type]}</span></div>
  </div>;
}

export function ResearchCarousel() {
  const [page, setPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  useEffect(() => {
    const phoneLayout = window.matchMedia("(max-width: 700px)");
    const updateItemsPerView = () => setItemsPerView(phoneLayout.matches ? 1 : 2);
    updateItemsPerView();
    phoneLayout.addEventListener("change", updateItemsPerView);
    return () => phoneLayout.removeEventListener("change", updateItemsPerView);
  }, []);
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
      panel: "cdc" as const,
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
      panel: "manuscript" as const,
    },
    ...projects.map((project, index) => ({
      key: project.slug,
      label: "PROJECT",
      number: project.number,
      title: project.cardTitle || project.title,
      meta: project.area,
      href: `/research/#${project.slug}`,
      artifactHref: project.repo,
      artifactLabel: project.repo ? "Code ↗" : null,
      panel: projectPanelTypes[index],
    })),
  ];
  const lastPage = featuredItems.length - itemsPerView;
  const visiblePage = Math.min(page, lastPage);
  const visibleItems = featuredItems.slice(visiblePage, visiblePage + itemsPerView);
  const showPrevious = () => setPage((current) => {
    const normalizedPage = Math.min(current, lastPage);
    return normalizedPage === 0 ? lastPage : normalizedPage - 1;
  });
  const showNext = () => setPage((current) => {
    const normalizedPage = Math.min(current, lastPage);
    return normalizedPage === lastPage ? 0 : normalizedPage + 1;
  });
  const position = itemsPerView === 1
    ? `${String(visiblePage + 1).padStart(2, "0")} / 06`
    : `${String(visiblePage + 1).padStart(2, "0")}–${String(visiblePage + 2).padStart(2, "0")} / 06`;

  return <div className="carousel-shell">
    <button className="carousel-arrow carousel-arrow-left" type="button" onClick={showPrevious} aria-label="Show previous research items" aria-controls="featured-research"><span>{"<"}</span></button>
    <div className="work-grid" id="featured-research" aria-live="polite">{visibleItems.map((item) => {
      return <article className="work-card" key={item.key}><Link className="work-card-visual-link" href={item.href} aria-label={`View ${item.title}`}><TechnicalPanel type={item.panel}/></Link><div className="work-card-body"><p className="project-meta project-title-line"><Link className="project-entry-link" href={item.href}>{item.label} {item.number} · {item.title}</Link>{item.artifactHref && <> · <a className="project-code-link" href={item.artifactHref} target="_blank" rel="noopener noreferrer">{item.artifactLabel}</a></>}</p><p className="project-keywords">{item.meta}</p></div></article>;
    })}</div>
    <button className="carousel-arrow carousel-arrow-right" type="button" onClick={showNext} aria-label="Show next research items" aria-controls="featured-research"><span>{">"}</span></button>
    <p className="carousel-position">{position}</p>
  </div>;
}
