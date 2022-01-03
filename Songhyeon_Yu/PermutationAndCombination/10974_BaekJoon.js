const fs = require("fs");
const input = +fs.readFileSync("./dev/stdin").toString().trim();
const arr = [];
for (let i = 1; i <= input; i++) arr.push(i);
const AllPermutations = function (Permutations, selectNumber) {
  const results = [];
  if (selectNumber === 1) return Permutations.map((el) => [el]);
  Permutations.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = AllPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

let result = AllPermutations(arr, input);

for (let i = 0; i < result.length; i++) {
  console.log(...result[i]);
}
