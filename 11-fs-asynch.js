/* asynch file system - must use callbacks *CALLBACK HELL!*
   but it won't cause the app to hang if more than one user is
   trying to manipulate a file at the same time.
*/

const { readFile, writeFile } = require("fs");
const { setFlagsFromString } = require("v8");
const filePath = require("./9-path-modules");
const OS = require("./8-OS-Module.js");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      `.${filePath}`,
      `Here is the result: ${first}, ${second} 
      Here is the os info:
      ${JSON.stringify(OS)}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
