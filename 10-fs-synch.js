//synchronous - blocking
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

const write = writeFileSync(
  "./content/third.txt",
  "Hello, this is the third text file."
);

console.log("done with this task");
console.log("starting the next one");
