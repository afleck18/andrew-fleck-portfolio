"use client";

import { useRef } from "react";
import { TechnicalPanel, type PanelType } from "./ResearchCarousel";

export type ProjectFigureData = {
  type: PanelType;
  href: string | null;
  caption: string;
  ariaLabel: string;
};

export function ProjectFigure({ visual }: { visual: ProjectFigureData }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return <figure className="theme-item-visual">
    <button className="project-figure-trigger" type="button" onClick={() => dialogRef.current?.showModal()} aria-label={`Enlarge ${visual.ariaLabel.toLowerCase()}`}>
      <TechnicalPanel type={visual.type}/>
      <span>Enlarge ↗</span>
    </button>
    <dialog className="project-figure-dialog" ref={dialogRef} onClick={(event) => {
      if (event.target === event.currentTarget) event.currentTarget.close();
    }}>
      <div className="project-figure-dialog-body">
        <button className="project-figure-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close enlarged figure">×</button>
        <TechnicalPanel type={visual.type}/>
        <div className="project-figure-dialog-footer"><span>{visual.caption.replace(" ↗", "")}</span>{visual.href && <a href={visual.href} target="_blank" rel="noreferrer">Open original ↗</a>}</div>
      </div>
    </dialog>
  </figure>;
}
