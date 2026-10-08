import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const pages = [
  ["out/index.html", "https://afleck18.github.io/andrew-fleck-portfolio/"],
  ["out/research/index.html", "https://afleck18.github.io/andrew-fleck-portfolio/research/"],
  ["out/publications/index.html", "https://afleck18.github.io/andrew-fleck-portfolio/publications/"],
  ["out/publications/geometry-induced-observers/index.html", "https://afleck18.github.io/andrew-fleck-portfolio/publications/geometry-induced-observers/"],
  ["out/publications/when-corruption-looks-normal/index.html", "https://afleck18.github.io/andrew-fleck-portfolio/publications/when-corruption-looks-normal/"],
  ["out/about/index.html", "https://afleck18.github.io/andrew-fleck-portfolio/about/"],
];

test("static export contains complete navigation, review metadata, and page-specific URLs", async () => {
  for (const [page, url] of pages) {
    const html = await readFile(page, "utf8");
    assert.match(html, /Andrew Fleck/);
    assert.match(html, /mailto:afleck18@gmail\.com/);
    assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
    assert.ok(html.includes(`<meta property="og:url" content="${url}"`));
    assert.match(html, />Research<\/a>.*>Publications<\/a>.*>About<\/a>.*>Résumé<\/a>/);
    assert.doesNotMatch(html, /lorem ipsum|codex-preview/i);
  }
});

test("publication groups and statuses are precise", async () => {
  const html = await readFile("out/publications/index.html", "utf8");
  assert.match(html, /Accepted papers/);
  assert.match(html, /Submitted manuscripts/);
  assert.match(html, /Work in progress/);
  assert.match(html, /Proceedings publication forthcoming/);
  assert.match(html, /When Corruption Looks Normal: Identical Inputs, Incompatible Observer Actions/);
  assert.match(html, /The Ghost in the Observer: Silent Propagation and Re-Exposure of Historical Actions/);
  assert.match(html, /American Control Conference \(ACC 2027\)/);
  assert.match(html, /Studies how completed observer interventions can continue to influence subsequent observer dynamics and forecasts/);
  assert.doesNotMatch(html, /Paper ID|1246|Under review|Published|IEEE Xplore/);
});

test("CDC detail preserves the supplied abstract and valid external links", async () => {
  const html = await readFile("out/publications/geometry-induced-observers/index.html", "utf8");
  const exactAbstract = "Learned perception models increasingly serve as measurement maps within nonlinear observers. Their state-dependent Jacobians introduce measurement geometry that measurement-value accuracy does not constrain. Even when measurements satisfy standard accuracy criteria, the corresponding one-step Euclidean error operator can be noncontractive. Improving measurement accuracy or retuning the correction strength may leave this observer-level contraction failure unresolved. We derive the exact estimation-error operator and use it to determine whether scalar-gain adjustment can restore contraction or the correction structure must change. The analysis separates three distinct cases: a conservative certificate may be inconclusive, the nominal gain may be exactly noncontractive, or the correction geometry may lie beyond scalar-gain repair. Convexity makes this recovery boundary exactly computable. When scalar recovery remains possible, uncertainty-aware envelopes define a safe projection that changes the nominal gain only when contraction and same-state improvement are certified. Uniform local certification yields exponential error decay and explicit disturbance-dependent bounds. The method uses local composite-Jacobian information or a certified approximation and requires no retraining. Scalar experiments demonstrate certified contraction recovery and improved tracking when the geometry permits. Controlled real-image experiments provide numerical evidence of scalar-unrecoverable contraction loss despite accurate learned measurements.";
  assert.ok(html.includes(exactAbstract));
  assert.match(html, /arxiv\.org\/abs\/2608\.14925/);
  assert.match(html, /arxiv\.org\/pdf\/2608\.14925/);
  assert.match(html, /arXiv DOI/);
  assert.doesNotMatch(html, /representation aware gain normalization|restores a uniform Euclidean contraction bound/);
});

test("SII detail is an honest research summary", async () => {
  const html = await readFile("out/publications/when-corruption-looks-normal/index.html", "utf8");
  assert.match(html, /<h2>Research summary<\/h2>/);
  assert.match(html, /Submitted to the 2027 IEEE\/SICE International Symposium on System Integration/);
  assert.match(html, /bounded, diagnostically nominal estimates can remain physically incorrect under coherent corruption/);
  assert.match(html, /Related research theme/);
  assert.doesNotMatch(html, /<h2>Abstract<\/h2>|DOI|arXiv|Paper ↗/);
});

test("about page uses supplied dates and the downloadable résumé", async () => {
  const html = await readFile("out/about/index.html", "utf8");
  assert.match(html, /December 2025 — Present/);
  assert.match(html, /October 2023 — December 2025/);
  assert.match(html, /December 2022 — July 2023/);
  assert.match(html, /Download résumé/);
  assert.match(html, /andrew-fleck-resume\.pdf/);
  assert.doesNotMatch(html, /Download CV|pending|Affiliated Researcher|GPA 3\.57|physical chemistry and thermodynamics/);
  const pdf = await readFile("out/andrew-fleck-resume.pdf");
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
});

test("research page connects submitted work and qualified supporting evidence", async () => {
  const html = await readFile("out/research/index.html", "utf8");
  assert.match(html, /The Ghost in the Observer: Silent Propagation and Re-Exposure of Historical Actions/);
  assert.match(html, /Studies how completed observer interventions can continue to influence subsequent observer dynamics and forecasts/);
  assert.match(html, /Native replay results remain conditional on assumed historical calibration/);
  assert.match(html, /Experimental development/);
  assert.match(html, /Controlled sensing regimes are compared while the underlying dynamics remain fixed/);
  assert.match(html, /The project compares dynamical stability estimates under good and degraded measurements/);
  assert.match(html, /aria-haspopup="dialog"/);
  assert.match(html, /aria-labelledby=/);
});

test("homepage metadata and summary labels match the review brief", async () => {
  const html = await readFile("out/index.html", "utf8");
  assert.match(html, /<title>Andrew Fleck — Engineer &amp; Researcher<\/title>/);
  assert.match(html, /<meta property="og:title" content="Andrew Fleck — Engineer &amp; Researcher"/);
  assert.match(html, /<meta name="twitter:title" content="Andrew Fleck — Engineer &amp; Researcher"/);
  assert.match(html, /My work combines mathematical analysis, computational modeling, and experimental evaluation/);
  assert.match(html, /Research summary →/);
  assert.doesNotMatch(html, /Project details →/);
});

test("mobile CSS does not hide navigation links", async () => {
  const css = await readFile("app/globals.css", "utf8");
  assert.doesNotMatch(css, /nav a:nth-child\(3\)|nav-disabled\{display:none/);
  assert.match(css, /nav\{flex-wrap:wrap;justify-content:flex-end\}/);
});
