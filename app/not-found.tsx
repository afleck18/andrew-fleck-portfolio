import Link from "next/link"; import { Shell } from "./components";
export default function NotFound(){return <Shell><section className="page-intro"><p className="eyebrow">404 · Signal not found</p><h1>This state is outside the observed domain.</h1><p>The page may have moved, or the link may be incomplete.</p><Link className="button" href="/">Return home</Link></section></Shell>}
