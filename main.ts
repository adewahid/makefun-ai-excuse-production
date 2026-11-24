import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In my defence, the tests passed — I wrote them, I graded them, and I gave myself full marks before deleting the database.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
