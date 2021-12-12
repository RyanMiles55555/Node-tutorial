//asynch readfile example
const { readFile } = require("fs");

console.log("started first task");
//CHECK FILE PATH
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("ERROR: " + err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");
