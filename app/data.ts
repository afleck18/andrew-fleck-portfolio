export const site = {
  name: "Andrew Fleck",
  location: "West Lafayette, Indiana",
  title: "Systems Engineer & Researcher",
  statement: "I develop methods for estimating and analyzing dynamical systems under partial observability, with an emphasis on stability, robustness, and sensing uncertainty.",
  bio: "Andrew Fleck is an engineer and researcher working at the intersection of nonlinear control, state estimation, learning-enabled sensing, and dynamical systems. His work studies how partial observability and sensing degradation affect estimator stability and reliability, and how control-theoretic structure can make learning-enabled systems more dependable.",
  aboutBio: "Andrew Fleck develops nonlinear observers and state-estimation methods for partially observed dynamical systems. His research examines how measurement geometry, sensing degradation, and information constraints affect estimator contraction, stability, and robustness—and how observer structure and gain design can restore reliable estimation. His work spans learning-enabled measurement models, adaptive sensing, latent stability inference, and physics-structured estimation for time-varying systems.",
  links: { email: "mailto:afleck18@gmail.com", github: "https://github.com/afleck18", linkedin: "https://www.linkedin.com/in/andrewfleck" },
};

export const aboutBiography = [
  "I am an engineer and independent researcher interested in dynamical systems, control, and state estimation. I study how we can infer the behavior of physical systems from incomplete or uncertain measurements, and develop estimation methods that account for their dynamics and sensing conditions.",
  "My interests include nonlinear observer design, robustness, inverse problems, and the integration of learned models with physical structure. I am particularly drawn to problems in aerospace, robotics, and environmental sensing, where understanding a system requires connecting mathematical analysis with practical constraints on measurement and computation.",
  "I earned a B.S. in Biomedical Engineering from Purdue University, with a minor in Chemistry. My experience spans physiological signal reconstruction, vision-based sensing and tracking, and distributed clinical computing infrastructure. Across these settings, I have developed an interest in connecting rigorous mathematical reasoning with the design and evaluation of working engineering systems.",
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
    cardTitle: "Estimator Reliability Under Degraded Sensing",
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
    repo: "https://github.com/afleck18/latent-dynamics-stability",
  },
  {
    slug: "vision-tracking",
    number: "03",
    title: "Vision-Based State Estimation and Tracking",
    area: "Perception · multi-object tracking",
    problem: "How can reliable trajectories be estimated from noisy RGB and thermal video observations?",
    approach: "YOLOv8 instance segmentation and ByteTrack tracking, supported by Kalman filtering, Hungarian assignment, and Mahalanobis gating.",
    validation: "Uses probabilistic trajectory estimation and filtering to reason about association and observation uncertainty.",
    significance: "Connects learning-enabled sensing to state estimation in environmental and hybrid biological systems.",
    repo: null,
  },
  {
    slug: "ecg-reconstruction",
    number: "04",
    title: "ECG Inverse Waveform Reconstruction",
    area: "Inverse imaging · signal preservation",
    problem: "How can physiologically meaningful waveform dynamics be recovered from scanned ECG images?",
    approach: "A senior thesis treating reconstruction as an inverse imaging problem with filtering under noise and distortion.",
    validation: "Evaluates image-processing choices by their ability to preserve the structure of the underlying waveform.",
    significance: "Frames document-image processing around recovery of a physical signal rather than image appearance alone.",
    repo: null,
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
    paper: "https://arxiv.org/abs/2608.14925",
    pdf: "https://arxiv.org/pdf/2608.14925",
    doi: "https://doi.org/10.48550/arXiv.2608.14925",
  },
  {
    slug: null,
    anchor: "when-corruption-looks-normal",
    title: "When Corruption Looks Normal: Identical Inputs, Incompatible Observer Actions",
    authors: "Aditi Acharya and Andrew Fleck",
    venue: "Submitted to the 2027 IEEE/SICE International Symposium on System Integration (SII 2027).",
    status: "Submitted",
    detail: null,
    paper: null,
    pdf: null,
    doi: null,
  },
  { slug: null, anchor: null, title: "State Estimation in Non-Stationary Geophysical Systems under Forcing and Sparse Sensing", authors: null, venue: null, status: "In preparation", detail: null, paper: null, pdf: null, doi: null },
  { slug: null, anchor: null, title: "Operator-Based Stability Certification for Partially Observed, Forced Geophysical Systems", authors: null, venue: null, status: "In preparation", detail: null, paper: null, pdf: null, doi: null },
];

export const capabilities = [
  ["Estimation", "Nonlinear observers, recursive filtering, Kalman filtering, probabilistic tracking"],
  ["Analysis and modeling", "Nonlinear dynamical systems, stability and contraction analysis, convex optimization"],
  ["Sensing and reconstruction", "Computer vision, RGB/thermal sensing, inverse imaging, signal processing"],
  ["Scientific computing", "Python (NumPy, SciPy, OpenCV), MATLAB"],
  ["Engineering systems", "Data pipelines, distributed infrastructure, Azure, Citrix, PowerShell"],
];
