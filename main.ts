// Monday, Reviewed in One Line
// Writes the funniest one-line review of a Monday to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Monday gets one star: my alarm quit, the elevator died, and my 9 a.m. was a meeting to schedule the meeting about the meeting.";

// Gate guard: single line of 1-200 characters (counted with the trailing newline).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
