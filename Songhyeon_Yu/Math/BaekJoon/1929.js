const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ").map(Number);

[N, M] = input;

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

for (let i = N; i <= M; i++) isPrime(i) ? console.log(i) : null;
