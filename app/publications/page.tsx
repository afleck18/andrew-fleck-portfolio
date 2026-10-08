import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Shell } from "../components";
import { publications } from "../data";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://afleck18.github.io/andrew-fleck-portfolio";
const title = "Publications — Andrew Fleck";
const description = "Publications and manuscripts in state estimation and dynamical systems.";
export const metadata: Metadata = { title: "Publications", description, alternates: { canonical: `${base}/publications/` }, openGraph: { title, description, url: `${base}/publications/`, type: "website" }, twitter: { card: "summary", title, description } };

const groups = [
  { title: "Accepted papers", entries: publications.filter((publication) => publication.status === "Accepted") },
  { title: "Submitted manuscripts", entries: publications.filter((publication) => publication.status === "Submitted") },
  { title: "Work in progress", entries: publications.filter((publication) => publication.status === "In preparation") },
];

export default function Publications() {
  return <Shell>
    <section className="page-intro publication-intro">
      <Eyebrow>Publications & manuscripts</Eyebrow>
      <h1>Research output</h1>
      <p>Publications and manuscripts in state estimation and dynamical systems.</p>
    </section>
    <div className="publication-groups">{groups.map((group) => <section className="publication-group" key={group.title}>
      <h2>{group.title}</h2>
      <div className="publication-list">{group.entries.map((publication) => {
        const number = publications.indexOf(publication) + 1;
        return <article id={publication.anchor || undefined} key={publication.title}>
          <span className="pub-number">{String(number).padStart(2, "0")}</span>
          <div>
            <span className={`status ${publication.status === "Accepted" ? "accepted" : publication.status === "Submitted" ? "submitted" : "preparation"}`}>{publication.status}</span>
            <h3>{publication.slug ? <Link href={`/publications/${publication.slug}`}>{publication.title}</Link> : publication.title}</h3>
            {publication.authors && <p className="publication-authors">{publication.authors}</p>}
            {publication.venue && <p>{publication.venue}</p>}
            {publication.detail && <p>{publication.detail}</p>}
            {"summary" in publication && <p className="publication-summary">{publication.summary}</p>}
            {(publication.paper || publication.slug) && <div className="publication-actions">
              {publication.paper && <><a href={publication.paper} target="_blank" rel="noopener noreferrer" aria-label="View the paper on arXiv">Paper ↗</a><a href={publication.pdf!} target="_blank" rel="noopener noreferrer" aria-label="Download the arXiv PDF">arXiv PDF ↗</a></>}
              {publication.slug && <Link href={`/publications/${publication.slug}`}>Details →</Link>}
            </div>}
          </div>
        </article>;
      })}</div>
    </section>)}</div>
  </Shell>;
}
