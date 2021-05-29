//const Calculator = require("Calculator");
const C = require("./test-module-1.js");

const calc1 = new C();
console.log(calc1.add(10,20));

//console.log(arguments);
//console.log(require('module'),wrapper);

//solution 2a
const calc2 = require("./test-module-2.js");
console.log(calc2.add(1,2));

//solution 2b
const {add, multiply, divide} = require("./test-module-2.js");
console.log(add(10000,-20));

//solution 3: Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
