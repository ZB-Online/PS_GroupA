const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const arr = input.map(Number);

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const solution = (num) => {
  for (let i = 2; i < num; i++) {
    if (isPrime(i) && isPrime(num - i)) {
      console.log(`${num} = ${i} + ${num - i}`);
      return;
    }
  }
  console.log("Goldbach's conjecture is wrong.");
};

for (let i = 0; i < arr.length - 1; i++) {
  solution(arr[i]);
}
