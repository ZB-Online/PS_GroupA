const solution = function (s) {
  const input = s.toString().trim().split("\n").map(Number);
  input.shift();

  let count = 0;
  function dfs(sum, N) {
    if (sum === N) {
      count++;
      return;
    }
    if (sum > N) return;
    for (let i = 1; i <= 3; i++) {
      dfs(sum + i, N);
    }
  }

  const result = [];
  for (let x of input) {
    count = 0;
    dfs(0, x);
    result.push(count);
  }
  console.log(result.join("\n"));
  return result.join("\n");
};

test("TC1", () => {
  expect(
    solution(`3
4
7
10`)
  ).toStrictEqual(`7
44
274`);
});
