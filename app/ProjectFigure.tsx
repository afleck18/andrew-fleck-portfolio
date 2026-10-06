"use client";

import { useRef } from "react";
import { TechnicalPanel, type PanelType } from "./TechnicalPanel";

export type ProjectFigureData = {
  type: PanelType;
  href: string | null;
  caption: string;
  ariaLabel: string;
};

export function ProjectFigure({ visual }: { visual: ProjectFigureData }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return <figure className="theme-item-visual">
    <div className={`project-figure-preview ${visual.type}`}>
      <TechnicalPanel type={visual.type}/>
    </div>
    <figcaption className="project-figure-caption">{visual.caption}</figcaption>
    <button className="project-figure-enlarge" type="button" onClick={() => dialogRef.current?.showModal()} aria-label={`Enlarge ${visual.ariaLabel}`}>Enlarge ↗</button>
    <dialog className="project-figure-dialog" ref={dialogRef} aria-label={`Enlarged ${visual.ariaLabel}`} onClick={(event) => {
      if (event.target === event.currentTarget) event.currentTarget.close();
    }}>
      <div className="project-figure-dialog-body">
        <button className="project-figure-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close enlarged figure">×</button>
        <TechnicalPanel type={visual.type}/>
        <div className="project-figure-dialog-footer"><span>{visual.caption}</span>{visual.href && <a href={visual.href} target="_blank" rel="noreferrer">Open original ↗</a>}</div>
      </div>
    </dialog>
  </figure>;
}
