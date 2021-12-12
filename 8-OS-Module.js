const OS = require("os");

//info about current user
const user = OS.userInfo();
console.log(user);

//method returns system up time in seconds
console.log(`The system up time is ${OS.uptime} seconds`);

const currentOS = {
  name: OS.type(),
  release: OS.release(),
  totalMem: OS.totalmem(),
  freeMem: OS.freemem(),
  cpus: OS.cpus(),
  arch: OS.arch(),
  platform: OS.platform(),
  type: OS.type(),
};

console.log(currentOS);
module.exports = currentOS;
