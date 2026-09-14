import Link from "next/link";
import { Shell } from "./components";
import { projects, publications, site } from "./data";

function TechnicalPanel({ type }: { type: "estimation" | "dynamics" | "tracking" }) {
  return <div className={`technical-panel ${type}`} aria-hidden="true">
    <div className="panel-header"><span>{type === "estimation" ? "EST-01" : type === "dynamics" ? "DYN-02" : "TRK-03"}</span><span>SIMULATION</span></div>
    <div className="plot-area"><i className="axis-x"/><i className="axis-y"/><i className="curve primary"/><i className="curve secondary"/>{type === "tracking" && <><b className="target t1"/><b className="target t2"/><b className="target t3"/></>}</div>
    <div className="panel-footer"><span>t = 0 → T</span><span>{type === "tracking" ? "x̂, ŷ" : "x(t), x̂(t)"}</span></div>
  </div>;
}

export default function Home() {
  return <Shell>
    <section className="engineering-hero">
      <div className="hero-copy"><p className="system-label">ANDREW FLECK / SYSTEMS ENGINEERING</p><h1>State estimation for systems we cannot fully observe.</h1><p>{site.statement}</p><div className="actions"><Link className="button" href="/research">View research</Link><Link className="text-link" href="/publications">Publications →</Link></div></div>
      <div className="hero-console"><div className="console-top"><span>RESEARCH FOCUS</span><span className="live">ACTIVE</span></div><dl><div><dt>01</dt><dd>Nonlinear state estimation</dd></div><div><dt>02</dt><dd>Stability under partial observation</dd></div><div><dt>03</dt><dd>Learning-enabled sensing</dd></div><div><dt>04</dt><dd>Robustness to information loss</dd></div></dl><div className="console-equation">y<sub>t</sub> = h(x<sub>t</sub>) + v<sub>t</sub><span>partial observation model</span></div></div>
    </section>

    <section className="bio-strip"><p className="section-code">00 / PROFILE</p><div><h2>Systems-focused engineer and researcher</h2><p>{site.bio}</p><p className="location">Purdue University · West Lafayette, Indiana</p></div></section>

    <section className="work-section"><div className="work-heading"><p className="section-code">01 / HIGHLIGHTED WORK</p><div><h2>Research implementations</h2><p>Each project is organized around a defined engineering question, an explicit estimation or analysis method, and a validation strategy.</p></div></div><div className="work-grid">{projects.slice(0,3).map((p,index) => <article className="work-card" key={p.slug}><TechnicalPanel type={index === 0 ? "estimation" : index === 1 ? "dynamics" : "tracking"}/><div className="work-card-body"><p className="project-meta">PROJECT {p.number} · {p.area}</p><h3>{p.title}</h3><p>{p.problem}</p><p className="method"><strong>Method</strong>{p.approach}</p><div className="card-links"><Link href={`/research/#${p.slug}`}>Case study →</Link>{p.repo && <a href={p.repo}>Code ↗</a>}</div></div></article>)}</div></section>

    <section className="output-section"><div><p className="section-code">02 / RESEARCH OUTPUT</p><h2>Manuscripts</h2></div><div className="output-list">{publications.map((p,i) => <article key={p.title}><span className="output-index">P-{String(i+1).padStart(2,"0")}</span><div><h3>{p.slug ? <Link href={`/publications/${p.slug}`}>{p.title}</Link> : p.title}</h3><p>{p.venue || "Manuscript in development"}</p>{p.authors && <p>{p.authors}</p>}{p.detail && <p>{p.detail}</p>}</div><span className={`status ${p.status === "Accepted" ? "accepted" : p.status === "Submitted" ? "submitted" : "preparation"}`}>{p.status}</span></article>)}<Link className="text-link" href="/publications">Publication details →</Link></div></section>
  </Shell>;
}
