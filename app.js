const _ = require('lodash');
let arr = [1, 2, 3, 4, 5, 6]

console.log(_.mean( arr ))
console.log("Max: ", Math.max(...arr),"\n","Min:", Math.min(...arr))