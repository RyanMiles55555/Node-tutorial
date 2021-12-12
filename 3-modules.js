//Modules
//common JS every module is a file default
//modules - encapsulated code

const names = require("./4-names");
const sayHi = require("./5-util");
console.log(names);
const data = require("./6-alternative-flavor");
console.log(data);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
