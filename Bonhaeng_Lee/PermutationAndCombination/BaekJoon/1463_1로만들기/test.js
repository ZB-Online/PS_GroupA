// sol1 : bottom-up
const solution = function (i) {
  const N = i.toString().trim() * 1;
  const dp = Array(N + 1).fill(0);

  for (let i = 2; i <= N; i++) {
    dp[i] = Math.min(
      dp[i - 1] + 1,
      i % 2 === 0 ? dp[i / 2] + 1 : Infinity,
      i % 3 === 0 ? dp[i / 3] + 1 : Infinity
    );
  }
  console.log(dp[N]);
  return dp[N] + "";
};

// sol2 : top-down
// const solution = function (i) {
//   const N = i.toString().trim() * 1;

//   function dfs(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 0;

//     const quotient3 = Math.floor(n / 3);
//     const quotient2 = Math.floor(n / 2);
//     const mod3 = n % 3;
//     const mod2 = n % 2;
//     return Math.min(dfs(quotient3) + mod3 + 1, dfs(quotient2) + mod2 + 1);
//   }
//   console.log(dfs(N));
//   return dfs(N).toString();
// };

test("solution", () => {
  expect(solution(`2`)).toStrictEqual("1");
  // expect(solution(`10`)).toStrictEqual('3');
  // expect(solution(`1`)).toStrictEqual("0");
  // expect(solution(`570`)).toStrictEqual("8");
  // expect(solution(`571`)).toStrictEqual("9");
  // expect(solution(`572`)).toStrictEqual("10");
  // expect(solution(`842`)).toStrictEqual("11");
});
