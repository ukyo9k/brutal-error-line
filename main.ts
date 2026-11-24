// Say What Actually Broke — make.fun entry
// Writes one single-line error message to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). Node 22+, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { readFileSync } from "node:fs";

const ENTRY_LINE =
  "Your file didn\u2019t save: the server ran out of memory halfway through and forgot what it was doing. Try again \u2014 it promises to concentrate this time.";

function verifyEntryFile(outDir: string): void {
  const expected = ENTRY_LINE + "\n";
  const actual = readFileSync(join(outDir, "entry.txt"), "utf8");
  if (actual !== expected) {
    throw new Error("entry.txt read-back mismatch: content is not byte-identical to the entry line");
  }
  const chars = [...actual].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry.txt must be 1-200 characters, got ${chars}`);
  }
}

function main(): void {
  const chars = [...ENTRY_LINE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${chars.length}`);
  }
  if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (ENTRY_LINE.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE + "\n", "utf8");
  // Read-back guard: re-read entry.txt and fail loudly if it isn't byte-identical.
  verifyEntryFile(outDir);
  console.log(`read-back verification passed: entry.txt is byte-identical (${chars.length} characters)`);
  console.log(`wrote entry.txt (${chars.length} characters)`);
}

main();
