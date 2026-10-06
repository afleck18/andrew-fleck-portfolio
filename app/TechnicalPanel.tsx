import Image from "next/image";
import cdcGeometryContraction from "../public/cdc-geometry-contraction-rmse.png";
import systemDiagram from "../public/robust-estimation-system-diagram.png";
import visionStability from "../public/vision-stability.png";

export type PanelType = "cdc" | "estimation" | "dynamics";

const panels = {
  cdc: {
    src: cdcGeometryContraction,
    alt: "Sensitivity, contraction certificate, and observer RMSE under sensitivity variation",
  },
  estimation: {
    src: systemDiagram,
    alt: "Experimental framework for estimator reliability under degraded sensing",
  },
  dynamics: {
    src: visionStability,
    alt: "Effect of measurement quality on stability estimation",
  },
};

export function TechnicalPanel({ type }: { type: PanelType }) {
  const panel = panels[type];
  return <div className="technical-panel diagram-panel">
    <Image src={panel.src} alt={panel.alt} fill sizes="(max-width: 700px) calc(100vw - 116px), 380px" unoptimized/>
  </div>;
}
