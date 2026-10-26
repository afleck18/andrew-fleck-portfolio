import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const base = "https://afleck18.github.io/andrew-fleck-portfolio";
const pages = [
  ["out/index.html", `${base}/`],
  ["out/research/index.html", `${base}/research/`],
  ["out/research/projects/robust-estimation/index.html", `${base}/research/projects/robust-estimation/`],
  ["out/research/projects/latent-dynamics/index.html", `${base}/research/projects/latent-dynamics/`],
  ["out/publications/index.html", `${base}/publications/`],
  ["out/publications/geometry-induced-observers/index.html", `${base}/publications/geometry-induced-observers/`],
  ["out/publications/when-corruption-looks-normal/index.html", `${base}/publications/when-corruption-looks-normal/`],
  ["out/publications/observer-dynamics-robotic-state-estimation/index.html", `${base}/publications/observer-dynamics-robotic-state-estimation/`],
  ["out/about/index.html", `${base}/about/`],
];

test("static export contains complete navigation, privacy metadata, and canonical URLs", async () => {
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

test("homepage uses the requested opening and foregrounds the accepted CDC paper", async () => {
  const html = await readFile("out/index.html", "utf8");
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] || "";
  assert.match(html, /<title>Andrew Fleck — Dynamical Systems &amp; Estimation<\/title>/);
  assert.match(html, /Andrew Fleck · Dynamical Systems &amp; Estimation/);
  assert.match(html, /Measurement geometry\. Observer dynamics\. Estimation reliability\./);
  assert.match(html, /Research on how sensing conditions shape state estimation and the reliability of downstream assessments/);
  assert.match(html, /Accepted · IEEE CDC 2026/);
  assert.match(html, /cdc-geometry-contraction-rmse/);
  assert.match(html, /arxiv\.org\/abs\/2608\.14925/);
  assert.match(html, /Observer Reliability Under Corrupted Sensing/);
  assert.match(html, /Observer Dynamics in Robotic State Estimation/);
  assert.match(html, /research\/projects\/robust-estimation\//);
  assert.match(html, /research\/projects\/latent-dynamics\//);
  assert.match(html, /02 \/ Selected projects/);
  assert.match(html, /<h2>Selected projects<\/h2>/);
  assert.doesNotMatch(main, /Public projects/);
  assert.doesNotMatch(main, /When Corruption Looks Normal: Identical Inputs|The Ghost in the Observer|research\/projects\/(?:vision-tracking|ecg-reconstruction)\//);
  assert.doesNotMatch(html, /Research interests and approach|Research interests<\/span>/);
});

test("publication groups restore accepted, submitted, and work-in-progress detail", async () => {
  const html = await readFile("out/publications/index.html", "utf8");
  const accepted = html.indexOf("Accepted papers");
  const submitted = html.indexOf("Submitted manuscripts");
  const preparation = html.indexOf("Work in progress");
  assert.ok(accepted >= 0 && submitted > accepted && preparation > submitted);
  assert.match(html, /Proceedings publication forthcoming/);
  assert.match(html, /When Corruption Looks Normal: Identical Inputs, Incompatible Observer Actions/);
  assert.match(html, /The Ghost in the Observer: Silent Propagation and Re-Exposure of Historical Actions/);
  assert.match(html, /American Control Conference \(ACC 2027\)/);
  assert.match(html, /publications\/observer-dynamics-robotic-state-estimation\//);
  assert.match(html, /State Estimation in Non-Stationary Geophysical Systems under Forcing and Sparse Sensing/);
  assert.match(html, /Operator-Based Stability Certification for Partially Observed, Forced Geophysical Systems/);
  assert.match(html, /Derives the observer error operator induced by learned measurement geometry/);
  assert.doesNotMatch(html, /Paper ID|1246|Under review|Published|IEEE Xplore/);
});

test("CDC detail preserves the accepted-paper abstract and public resources", async () => {
  const html = await readFile("out/publications/geometry-induced-observers/index.html", "utf8");
  assert.match(html, /Accepted paper · CDC 2026/);
  assert.match(html, /Aditi Acharya and Andrew Fleck/);
  assert.match(html, /arxiv\.org\/abs\/2608\.14925/);
  assert.match(html, /arxiv\.org\/pdf\/2608\.14925/);
  assert.match(html, /arXiv DOI/);
});

test("SII page has distinct framing, compact status, and a disclosure-safe context visual", async () => {
  const html = await readFile("out/publications/when-corruption-looks-normal/index.html", "utf8");
  assert.match(html, /Observer Reliability Under Corrupted Sensing/);
  assert.match(html, /When Corruption Looks Normal: Identical Inputs, Incompatible Observer Actions/);
  assert.match(html, /Aditi Acharya and Andrew Fleck/);
  assert.match(html, /Submitted to the 2027 IEEE\/SICE International Symposium on System Integration/);
  assert.match(html, /Physical sensing.*Measurement interpretation.*Observer dynamics.*Reliability assessment/);
  assert.match(html, /General context diagram; no unpublished result data are shown/);
  assert.doesNotMatch(html, /<h2>Abstract<\/h2>|DOI|arXiv|Paper ↗|bounded, diagnostically nominal|coherent corruption/);
});

test("ACC page has a distinct robotic implementation identity without private detail", async () => {
  const html = await readFile("out/publications/observer-dynamics-robotic-state-estimation/index.html", "utf8");
  assert.match(html, /Observer Dynamics in Robotic State Estimation/);
  assert.match(html, /The Ghost in the Observer: Silent Propagation and Re-Exposure of Historical Actions/);
  assert.match(html, /Aditi Acharya and Andrew Fleck/);
  assert.match(html, /Submitted to the 2027 American Control Conference/);
  assert.match(html, /Astrobee.*native estimator.*recorded flight data/);
  assert.match(html, /General context diagram; no unpublished result data are shown/);
  assert.doesNotMatch(html, /historical calibration|matched-action chronology|differential silence|Paper ↗|Code ↗/i);
});

test("research index links every substantive card to a real detail page", async () => {
  const html = await readFile("out/research/index.html", "utf8");
  for (const route of [
    "publications/geometry-induced-observers/",
    "publications/when-corruption-looks-normal/",
    "publications/observer-dynamics-robotic-state-estimation/",
    "research/projects/robust-estimation/",
    "research/projects/latent-dynamics/",
  ]) assert.ok(html.includes(route), `missing ${route}`);
  assert.match(html, /Future directions/);
  assert.match(html, /Geophysical State Reconstruction and Stability Assessment/);
  assert.match(html, /physics-structured state reconstruction and stability assessment/);
  assert.doesNotMatch(html, /Vision-Based State Estimation|ECG Waveform Reconstruction|research\/projects\/(?:vision-tracking|ecg-reconstruction)\/|Non-Stationary Geophysical Systems|Operator-Based Stability Certification|historical calibration|matched-action chronology|differential silence/);
});

test("public engineering project pages preserve existing technical facts and resources", async () => {
  const estimation = await readFile("out/research/projects/robust-estimation/index.html", "utf8");
  assert.match(estimation, /Technical question/);
  assert.match(estimation, /state-dependent and intermittent information loss/);
  assert.match(estimation, /adaptive-sensing-robustness/);
  assert.match(estimation, /robust-estimation-system-diagram/);
  const dynamics = await readFile("out/research/projects/latent-dynamics/index.html", "utf8");
  assert.match(dynamics, /latent-dynamics-stability/);
  assert.match(dynamics, /vision-stability/);
});

test("about page restores the fuller experience, education, capabilities, dates, and résumé", async () => {
  const html = await readFile("out/about/index.html", "utf8");
  assert.match(html, /December 2025 — Present/);
  assert.match(html, /October 2023 — December 2025/);
  assert.match(html, /December 2022 — July 2023/);
  assert.match(html, /vision-based sensing and probabilistic tracking pipelines for RGB and thermal video/);
  assert.match(html, /ECG waveform reconstruction from scanned images as an inverse imaging problem/);
  assert.match(html, /Analysis and modeling/);
  assert.match(html, /Sensing and reconstruction/);
  assert.match(html, /Engineering systems/);
  assert.match(html, /andrew-fleck-resume\.pdf/);
  const pdf = await readFile("out/andrew-fleck-resume.pdf");
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
});

test("removed project routes are absent from the export and sitemap", async () => {
  const sitemap = await readFile("out/sitemap.xml", "utf8");
  assert.doesNotMatch(sitemap, /vision-tracking|ecg-reconstruction/);
  const home = await readFile("out/index.html", "utf8");
  const research = await readFile("out/research/index.html", "utf8");
  assert.doesNotMatch(home + research, /research\/projects\/(?:vision-tracking|ecg-reconstruction)\//);
  await assert.rejects(readFile("out/research/projects/vision-tracking/index.html", "utf8"), { code: "ENOENT" });
  await assert.rejects(readFile("out/research/projects/ecg-reconstruction/index.html", "utf8"), { code: "ENOENT" });
});

test("mobile CSS keeps navigation and context visuals responsive", async () => {
  const css = await readFile("app/globals.css", "utf8");
  assert.doesNotMatch(css, /nav a:nth-child\(3\)|nav-disabled\{display:none/);
  assert.match(css, /nav\{flex-wrap:wrap;justify-content:flex-end\}/);
  assert.match(css, /\.context-stages\{grid-template-columns:1fr 1fr\}/);
});
