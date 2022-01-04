// sol1 : DFS
// const solution = function (s) {
//   const input = s.toString().trim().split("\n").map(Number);
//   input.shift();

//   let count = 0;
//   function dfs(sum, N) {
//     if (sum === N) {
//       count++;
//       return;
//     }
//     if (sum > N) return;
//     for (let i = 1; i <= 3; i++) {
//       dfs(sum + i, N);
//     }
//   }

//   const result = [];
//   for (let x of input) {
//     count = 0;
//     dfs(0, x);
//     result.push(count);
//   }
//   // BOJ 제출
//   console.log(result.join("\n"));
//   return result.join("\n");
// };

// sol2 : DP
const solution = function (s) {
  const input = s.toString().trim().split('\n').map(Number);
  input.shift();

  const dp = [0, 1, 2, 4];
  const result = [];
  for (let x of input) {
    for (let i = 4; i <= x; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    result.push(dp[x]);
  }
  // BOJ 제출
  console.log(result.join('\n'));
  return result.join('\n');
};

test('TC1', () => {
  expect(
    solution(`3
4
7
10`)
  ).toStrictEqual(`7
44
274`);
});
