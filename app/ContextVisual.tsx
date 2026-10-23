type ContextVisualProps = {
  variant: "sii" | "acc";
};

const visuals = {
  sii: {
    label: "Observer-reliability context from physical sensing through reliability assessment",
    title: "Observer reliability context",
    stages: ["Physical sensing", "Measurement interpretation", "Observer dynamics", "Reliability assessment"],
    footer: "Sensing conditions shape the information available downstream",
  },
  acc: {
    label: "Robotic state-estimation context using recorded flight data and a native estimator",
    title: "Robotic estimation context",
    stages: ["Recorded flight data", "Native estimator", "Observer context", "Reliability analysis"],
    footer: "Implementation context grounds the observer-dynamics question",
  },
} as const;

export function ContextVisual({ variant }: ContextVisualProps) {
  const visual = visuals[variant];
  return <figure className={`context-visual context-visual-${variant}`}>
    <div className="context-visual-frame" role="img" aria-label={visual.label}>
      <div className="context-visual-head"><span>System context</span><strong>{visual.title}</strong></div>
      <div className="context-stages">{visual.stages.map((stage, index) => <div className="context-stage" key={stage}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{stage}</strong>
      </div>)}</div>
      <p>{visual.footer}</p>
    </div>
    <figcaption>General context diagram; no unpublished result data are shown.</figcaption>
  </figure>;
}
