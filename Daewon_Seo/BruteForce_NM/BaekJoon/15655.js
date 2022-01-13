const solution = function (i) {
  const [NM, arr] = i.toString().trim().split("\n");
  const [N, M] = NM.split(" ").map((el) => +el);
  const nums = arr
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => a - b);

  const checked = Array.from({ length: N }, () => false);
  let res = "";

  const getComb = (arr, pick, prefix = []) => {
    if (pick === 0) {
      res += `${prefix.join(" ")}\n`;
      return [prefix];
    }
    return arr.flatMap((v, i) =>
      getComb(arr.slice(i + 1), pick - 1, [...prefix, v])
    );
  };

  getComb(nums, M);

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
  ).toStrictEqual(`1 7
1 8
1 9
7 8
7 9
8 9`);
});

test("TC3", () => {
  expect(
    solution(`4 4
1231 1232 1233 1234`)
  ).toStrictEqual(`1231 1232 1233 1234`);
});
