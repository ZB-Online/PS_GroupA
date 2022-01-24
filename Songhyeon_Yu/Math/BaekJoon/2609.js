const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const firstNumber = +input[0];
const lastNumber = +input[1];
// 유클리드 호제법

const gcd = (a, b) => {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

console.log(gcd(firstNumber, lastNumber));
console.log(lcm(firstNumber, lastNumber));
