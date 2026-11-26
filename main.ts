// Monday, Reviewed in One Line
// One job: write the funniest one-line review of a Monday (<=200 chars)
// to /output/entry.txt. The judge weighs a real Monday review first,
// then the size of the laugh, then a concrete detail, then a fast turn.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const opener = "Monday gets one star:";
const beatOne = "my alarm quit,";
const beatTwo = "the elevator died,";
const punch = "and my 9 a.m. was a meeting to schedule the meeting about the meeting.";
const line = [opener, beatOne, beatTwo, punch].join(" ");

// Gate guard: one line, 1-200 characters counting the trailing newline,
// and not only whitespace — otherwise the entry never reaches the judge.
const tooLong = line.length + 1 > 200;
const blank = line.trim().length === 0;
const multiLine = line.includes("\n");
if (multiLine || blank || tooLong) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

// The judge reads exactly this file, so the write is the whole entry.
mkdirSync(outDir, { recursive: true });
const entryPath = `${outDir}/entry.txt`;
writeFileSync(entryPath, line + "\n", "utf8");
console.log(line);
