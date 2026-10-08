"use client";

import { useId, useRef, type KeyboardEvent } from "react";
import { TechnicalPanel, type PanelType } from "./TechnicalPanel";

export type ProjectFigureData = {
  type: PanelType;
  href: string | null;
  caption: string;
  ariaLabel: string;
};

export function ProjectFigure({ visual }: { visual: ProjectFigureData }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  function openDialog() {
    dialogRef.current?.showModal();
    requestAnimationFrame(() => closeRef.current?.focus());
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function keepFocusInDialog(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDialog();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return <figure className="theme-item-visual">
    <div className={`project-figure-preview ${visual.type}`}>
      <TechnicalPanel type={visual.type}/>
    </div>
    <figcaption className="project-figure-caption">{visual.caption}</figcaption>
    <button className="project-figure-enlarge" ref={triggerRef} type="button" onClick={openDialog} aria-haspopup="dialog" aria-label={`Enlarge ${visual.ariaLabel}`}>Enlarge ↗</button>
    <dialog className="project-figure-dialog" ref={dialogRef} aria-labelledby={titleId} onKeyDown={keepFocusInDialog} onCancel={(event) => { event.preventDefault(); closeDialog(); }} onClose={() => triggerRef.current?.focus()} onClick={(event) => {
      if (event.target === event.currentTarget) closeDialog();
    }}>
      <div className="project-figure-dialog-body">
        <div className="project-figure-dialog-toolbar"><h2 id={titleId}>Enlarged {visual.ariaLabel}</h2><button className="project-figure-close" ref={closeRef} type="button" onClick={closeDialog} aria-label="Close enlarged figure">×</button></div>
        <TechnicalPanel type={visual.type}/>
        <div className="project-figure-dialog-footer"><span>{visual.caption}</span>{visual.href && <a href={visual.href} target="_blank" rel="noreferrer">Open original ↗</a>}</div>
      </div>
    </dialog>
  </figure>;
}
