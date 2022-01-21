const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\s+/);
const arr = input.slice(1).map(Number);
console.log(Math.max(...arr) * Math.min(...arr));
