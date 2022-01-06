const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(/\s+/);

const N = input.shift();
input.shift();
input.sort();
const check = ["a", "e", "i", "o", "u"];

const checkAlph = (arr) => {
  let alph = check.filter((el) => arr.includes(el)).length;
  if (alph >= 1 && arr.length - alph >= 2) console.log(arr.join(""));
};

const combination = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((el) => [el]);
  // nC1일 경우 바로 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = combination(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
};
combination(input, N).forEach((el) => checkAlph(el));
