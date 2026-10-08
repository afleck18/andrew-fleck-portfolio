import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Shell } from "../components";
import { aboutBiography, capabilities } from "../data";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const title = "About & Experience — Andrew Fleck";
const description = "Andrew Fleck's background in dynamical systems, control, state estimation, sensing, and engineering systems.";
export const metadata: Metadata = { title: "About & Experience", description, alternates: { canonical: `${base}/about/` }, openGraph: { title, description, url: `${base}/about/`, type: "website" }, twitter: { card: "summary", title, description } };

export default function About() {
  return <Shell>
    <section className="page-intro publication-intro about-intro">
      <Eyebrow>About & experience</Eyebrow>
      <h1>Dynamical systems, control, and estimation</h1>
      <div className="about-biography">{aboutBiography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <div className="about-links">
        <Link className="text-link" href="/research">Research <span aria-hidden="true">→</span></Link>
        <Link className="text-link" href="/publications">Publications <span aria-hidden="true">→</span></Link>
        <Link className="text-link" href="/andrew-fleck-resume.pdf" download>Download résumé</Link>
      </div>
    </section>
    <section className="timeline-section split">
      <Eyebrow>Experience</Eyebrow>
      <div className="timeline">
        <article>
          <time>December 2025 — Present</time>
          <h2>Independent Researcher</h2>
          <p className="timeline-subtitle">Dynamical systems and state estimation</p>
          <p className="timeline-description">Conducting research on nonlinear state estimation, observer design, and robustness under incomplete or uncertain sensing. Work combines mathematical analysis, computational modeling, and experimental evaluation using simulated and recorded data.</p>
        </article>
        <article>
          <time>October 2023 — December 2025</time>
          <h2>Research Assistant</h2>
          <p className="timeline-subtitle">Verma Lab · Purdue University</p>
          <p className="timeline-description">Developed vision-based sensing and probabilistic tracking pipelines for RGB and thermal video, integrating learned perception with filtering and trajectory estimation. Additional work addressed inverse imaging, signal reconstruction, and environmental sensing data.</p>
          <p className="timeline-note">Presented “Spatiotemporal State Estimation and Multi-Object Tracking in Hybrid Biological Systems” at Purdue ABE IRS in 2024.</p>
        </article>
        <article>
          <time>December 2022 — July 2023</time>
          <h2>System Engineer</h2>
          <p className="timeline-subtitle">Epic Systems</p>
          <p className="timeline-description">Worked on distributed clinical computing infrastructure, with responsibilities spanning deployment, availability, monitoring, incident response, and secure data handling. Developed PowerShell automation to standardize system configuration.</p>
        </article>
      </div>
    </section>
    <section className="education split">
      <Eyebrow>Education</Eyebrow>
      <div>
        <h2>B.S. Biomedical Engineering</h2>
        <p>Purdue University, 2022</p>
        <p className="muted">Minor in Chemistry</p>
        <p className="education-thesis">Senior thesis: ECG waveform reconstruction from scanned images as an inverse imaging problem, using image processing and filtering to recover physiological signals under noise and distortion.</p>
      </div>
    </section>
    <section className="capabilities">
      <div className="section-head about-capabilities-head"><Eyebrow>Technical capabilities</Eyebrow><h2>Methods and tools</h2></div>
      {capabilities.map(([name, items]) => <div className="capability-row" key={name}><h3>{name}</h3><p>{items}</p></div>)}
    </section>
  </Shell>;
}
