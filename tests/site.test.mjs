import test from "node:test"; import assert from "node:assert/strict"; import { readFile } from "node:fs/promises";
const pages=["out/index.html","out/research/index.html","out/publications/index.html","out/about/index.html"];
test("static export contains core pages and no prohibited placeholders",async()=>{for(const page of pages){const html=await readFile(page,"utf8");assert.match(html,/Andrew Fleck/);assert.doesNotMatch(html,/lorem ipsum|accepted at|phone|codex-preview/i)}});
test("publication statuses are precise",async()=>{const html=await readFile("out/publications/index.html","utf8");assert.match(html,/Submitted/);assert.match(html,/In preparation/);assert.doesNotMatch(html,/Published|Accepted/)});
