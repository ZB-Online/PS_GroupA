const solution = function (i) {
  const [NM, arr] = i.toString().trim().split("\n");
  const [N, M] = NM.split(" ").map((el) => +el);
  const nums = arr
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => a - b);

  const permutation = [];
  let res = "";

  const dfs = (cnt) => {
    if (cnt === M) {
      res += `${permutation.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < N; i++) {
      permutation.push(nums[i]);
      dfs(cnt + 1);
      permutation.pop();
    }
  };

  dfs(0);

  console.log(res.trim());
  return res.trim();
};

// solution(`4 2
// 9 8 7 1`);

test("TC1", () => {
  expect(
    solution(`3 1
4 5 2`)
  ).toStrictEqual(`2
4
5`);
});

test("TC2", () => {
  expect(
    solution(`4 2
9 8 7 1`)
  ).toStrictEqual(`1 1
1 7
1 8
1 9
7 1
7 7
7 8
7 9
8 1
8 7
8 8
8 9
9 1
9 7
9 8
9 9`);
});

test("TC3", () => {
  expect(
    solution(`3 3
1231 1232 1233`)
  ).toStrictEqual(`1231 1231 1231
1231 1231 1232
1231 1231 1233
1231 1232 1231
1231 1232 1232
1231 1232 1233
1231 1233 1231
1231 1233 1232
1231 1233 1233
1232 1231 1231
1232 1231 1232
1232 1231 1233
1232 1232 1231
1232 1232 1232
1232 1232 1233
1232 1233 1231
1232 1233 1232
1232 1233 1233
1233 1231 1231
1233 1231 1232
1233 1231 1233
1233 1232 1231
1233 1232 1232
1233 1232 1233
1233 1233 1231
1233 1233 1232
1233 1233 1233`);
});
