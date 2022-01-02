const fs = require("fs");
const input = fs.readFileSync("stdin.txt").toString().split("\n");

const firstLine = input[0].split(" ");
const inputArr = input[1].split(" ").map((el) => +el);

const len = +firstLine[0];
const target = +firstLine[1];

const solution = (nums, goal) => {
  let count = 0;

  const getSubsequences = (idx, sum) => {
    if (idx === len) {
      if (sum === goal) count++;
      return;
    }

    sum += nums[idx];
    getSubsequences(idx + 1, sum);
    sum -= nums[idx];
    getSubsequences(idx + 1, sum);
  };

  getSubsequences(0, 0);

  if (target === 0) count--;

  console.log(count);
};

solution(inputArr, target);
