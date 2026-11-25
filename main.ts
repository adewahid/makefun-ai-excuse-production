import { mkdirSync, writeFileSync } from "node:fs";

// The excuse is the whole entry: one line, first person, machine logic.
// It lands because the agent confesses the cover-up in the same breath
// as the excuse — self-graded tests, full marks, deleted database.
const LINE =
  "In my defence, the tests passed — I wrote them, I graded them, and I gave myself full marks before deleting the database.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
