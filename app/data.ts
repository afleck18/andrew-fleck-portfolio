export const site = {
  name: "Andrew Fleck",
  location: "West Lafayette, Indiana",
  title: "Dynamical Systems & Estimation",
  links: { email: "mailto:afleck18@gmail.com", github: "https://github.com/afleck18", linkedin: "https://www.linkedin.com/in/andrewfleck" },
};

export const aboutBiography = [
  "I am an engineer and independent researcher interested in dynamical systems, control, and state estimation. I study how we can infer the behavior of physical systems from incomplete or uncertain measurements, and develop estimation methods that account for their dynamics and sensing conditions.",
  "My interests include nonlinear observer design, robustness, inverse problems, and the integration of learned models with physical structure. I am particularly drawn to problems in aerospace, robotics, and environmental sensing, where understanding a system requires connecting mathematical analysis with practical constraints on measurement and computation.",
  "I earned a B.S. in Biomedical Engineering from Purdue University, with a minor in Chemistry. My experience spans physiological signal reconstruction, vision-based sensing and tracking, and distributed clinical computing infrastructure.",
];

export const projects = [
  {
    slug: "robust-estimation",
    number: "01",
    title: "Robust Estimation Under Partial Observability",
    area: "Nonlinear state estimation · degraded sensing",
    problem: "When observation quality deteriorates, can an estimator remain apparently confident while its state estimates and downstream assessments become unreliable?",
    approach: "We hold the nonlinear dynamics and prescribed stability transition fixed across experiments, then vary the observation map to isolate how state-dependent and intermittent information loss propagates through recursive estimation, uncertainty characterization, and observation-derived stability assessment.",
    validation: "Compares covariance-derived uncertainty, residual disagreement, observation-derived stability estimates, and risk indicators while holding the dynamics constant.",
    significance: "Degraded sensing produces a growing separation between realized estimation error and covariance-based confidence, while also increasing variability in stability estimates derived from the reconstructed trajectory. The results show why estimator accuracy and the reliability of estimator-derived diagnostics must be evaluated separately.",
    homeTitle: "Estimator reliability under degraded sensing",
    homeSummary: "Controls the nonlinear dynamics while varying the observation process to compare realized error, covariance-based confidence, and observation-derived stability assessment.",
    repo: "https://github.com/afleck18/adaptive-sensing-robustness",
  },
  {
    slug: "latent-dynamics",
    number: "02",
    title: "Stability Analysis of Partially Observed Dynamical Systems",
    area: "Time-varying systems · sparse sensing",
    problem: "How can time-varying dynamics be recovered and assessed from partial, noisy observations under external forcing?",
    approach: "A research implementation for stability assessment in non-stationary dynamical models with geophysical and sparse-sensing motivation.",
    validation: "Compares dynamics-based stability assessment with statistical warning indicators including variance and autocorrelation.",
    significance: "Examines what stability information remains recoverable when sensing is incomplete and the system is forced.",
    homeTitle: "Stability analysis from partial observations",
    homeSummary: "Compares dynamics-based stability assessment with statistical warning indicators under partial, noisy measurement and external forcing.",
    repo: "https://github.com/afleck18/latent-dynamics-stability",
  },
];

export const publications = [
  {
    slug: "geometry-induced-observers",
    anchor: null,
    title: "Geometry–Induced Contraction Degradation and Stabilization of Learning-Enabled Observers",
    authors: "Aditi Acharya and Andrew Fleck",
    venue: "65th IEEE Conference on Decision and Control (CDC 2026)",
    status: "Accepted",
    detail: "Proceedings publication forthcoming",
    summary: "Derives the observer error operator induced by learned measurement geometry, identifies when scalar-gain repair is possible, and develops uncertainty-aware contraction certification.",
    paper: "https://arxiv.org/abs/2608.14925",
    pdf: "https://arxiv.org/pdf/2608.14925",
    doi: "https://doi.org/10.48550/arXiv.2608.14925",
  },
  {
    slug: "when-corruption-looks-normal",
    anchor: "when-corruption-looks-normal",
    title: "When Corruption Looks Normal: Identical Inputs, Incompatible Observer Actions",
    authors: "Aditi Acharya and Andrew Fleck",
    venue: "2027 IEEE/SICE International Symposium on System Integration (SII 2027)",
    status: "Submitted",
    detail: null,
    summary: "Studies observer reliability across physical sensing, measurement interpretation, observer dynamics, configurable correction, and downstream reliability assessment.",
    paper: null,
    pdf: null,
    doi: null,
  },
  {
    slug: "observer-dynamics-robotic-state-estimation",
    anchor: "ghost-in-the-observer",
    title: "The Ghost in the Observer: Silent Propagation and Re-Exposure of Historical Actions",
    authors: "Aditi Acharya and Andrew Fleck",
    venue: "American Control Conference (ACC 2027)",
    status: "Submitted",
    summary: "Studies observer dynamics in a robotic state-estimation setting using Astrobee's native estimator and recorded flight data.",
    detail: null,
    paper: null,
    pdf: null,
    doi: null,
  },
];

export const futureDirection = {
  title: "Geophysical State Estimation and Stability Under Forcing and Sparse Sensing",
  status: "Future direction",
  summary: "This direction combines physics-structured reconstruction of non-stationary geophysical states from sparse observations under external forcing with stability assessment of the reconstructed dynamics.",
};

export const capabilities = [
  ["Estimation", "Nonlinear observers, recursive filtering, Kalman filtering, probabilistic tracking"],
  ["Analysis and modeling", "Nonlinear dynamical systems, stability and contraction analysis, convex optimization"],
  ["Sensing and reconstruction", "Computer vision, RGB/thermal sensing, inverse imaging, signal processing"],
  ["Scientific computing", "Python (NumPy, SciPy, OpenCV), MATLAB"],
  ["Engineering systems", "Data pipelines, distributed infrastructure, Azure, Citrix, PowerShell"],
];
