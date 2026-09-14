import Link from "next/link";
import { Shell } from "./components";
import { publications, site } from "./data";
import { ResearchCarousel } from "./ResearchCarousel";

export default function Home() {
  return <Shell>
    <section className="engineering-hero">
      <div className="hero-copy"><p className="system-label">ANDREW FLECK / SYSTEMS ENGINEERING</p><h1>State estimation for systems we cannot fully observe.</h1><p>{site.statement}</p><div className="actions"><Link className="button" href="/research">View research</Link><Link className="text-link" href="/publications">Publications →</Link></div></div>
      <div className="hero-console"><div className="console-top"><span>RESEARCH FOCUS</span><span className="live">ACTIVE</span></div><dl><div><dt>01</dt><dd>Nonlinear state estimation</dd></div><div><dt>02</dt><dd>Stability under partial observation</dd></div><div><dt>03</dt><dd>Learning-enabled sensing</dd></div><div><dt>04</dt><dd>Robustness to information loss</dd></div></dl><div className="console-equation">y<sub>t</sub> = h(x<sub>t</sub>) + v<sub>t</sub><span>partial observation model</span></div></div>
    </section>

    <section className="bio-strip"><p className="section-code">00 / PROFILE</p><div><h2>Control systems engineer and researcher</h2><p>{site.aboutBio}</p><p className="location">Purdue University · West Lafayette, Indiana</p></div></section>

    <section className="work-section"><div className="work-heading"><p className="section-code">01 / HIGHLIGHTED WORK</p><div><h2>Research implementations</h2><p>Each project is organized around a defined engineering question, an explicit estimation or analysis method, and a validation strategy.</p></div></div><ResearchCarousel /></section>

    <section className="output-section"><div><p className="section-code">02 / RESEARCH OUTPUT</p><h2>Manuscripts</h2></div><div className="output-list">{publications.map((p,i) => <article key={p.title}><span className="output-index">P-{String(i+1).padStart(2,"0")}</span><div><h3>{p.slug ? <Link href={`/publications/${p.slug}`}>{p.title}</Link> : p.title}</h3><p>{p.venue || "Manuscript in development"}</p>{p.authors && <p>{p.authors}</p>}{p.detail && <p>{p.detail}</p>}</div><span className={`status ${p.status === "Accepted" ? "accepted" : p.status === "Submitted" ? "submitted" : "preparation"}`}>{p.status}</span></article>)}<Link className="text-link" href="/publications">Publication details →</Link></div></section>
  </Shell>;
}
