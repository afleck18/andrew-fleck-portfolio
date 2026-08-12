import Link from "next/link";
import { Eyebrow, Shell } from "./components";
import { projects, publications, site } from "./data";

export default function Home() {
  return <Shell>
    <section className="hero">
      <div><Eyebrow>{site.title}</Eyebrow><h1>Dynamics, observed <em>imperfectly.</em></h1><p className="lede">{site.statement}</p><div className="actions"><Link className="button" href="/research">Explore research</Link><Link className="text-link" href="/publications">View publications <span aria-hidden="true">→</span></Link></div></div>
      <div className="signal-card" aria-label="Abstract state estimation motif"><div className="grid-lines"/><span className="trace trace-a"/><span className="trace trace-b"/><span className="measurement m1"/><span className="measurement m2"/><span className="measurement m3"/><p><b>x̂(t)</b><span>estimated state</span></p></div>
    </section>
    <section className="intro split"><Eyebrow>Research position</Eyebrow><div><h2>Reliable inference for physical systems.</h2><p>{site.bio}</p><div className="theme-row"><span>Partial observability</span><span>Estimator stability</span><span>Sensing uncertainty</span></div></div></section>
    <section className="selected"><div className="section-head"><div><Eyebrow>Selected work</Eyebrow><h2>Questions, methods, evidence.</h2></div><Link className="text-link" href="/research">All research <span aria-hidden="true">→</span></Link></div><div className="project-list">{projects.slice(0,3).map(p => <Link className="project-row" href={`/research/#${p.slug}`} key={p.slug}><span className="number">{p.number}</span><div><h3>{p.title}</h3><p>{p.problem}</p></div><span className="arrow" aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="publication-preview split"><div><Eyebrow>Current writing</Eyebrow><p className="count">03</p><p className="muted">manuscripts</p></div><div>{publications.map((p) => <article className="pub-mini" key={p.title}><span className={`status ${p.status === "Submitted" ? "submitted" : "preparation"}`}>{p.status}</span><h3>{p.title}</h3></article>)}<Link className="text-link" href="/publications">Publication details <span aria-hidden="true">→</span></Link></div></section>
  </Shell>;
}
