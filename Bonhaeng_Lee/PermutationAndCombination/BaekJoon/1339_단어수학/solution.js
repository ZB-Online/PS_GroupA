const solution = function (i) {
  const [n, ...arr] = i.toString().trim().split("\n");
  let digits = [...Array(26)].fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const ascii = arr[i].charCodeAt(j) - 65;
      const digit = arr[i].length - 1 - j;
      if (digits[ascii] === 0) digits[ascii] = [arr[i][j], Math.pow(10, digit)];
      // 더 높은 자릿수를 가질수록 더 높은 숫자를 부여 받아야 한다. 따라서 자릿수를 누적해서 저장한다.
      else digits[ascii][1] += Math.pow(10, digit);
    }
  }

  digits = digits
    .filter((d) => d)
    .sort((a, b) => b[1] - a[1])
    .map((d, i) => (d[0] ? [d[0], 9 - i] : 0));

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += +arr[i]
      .split("")
      .map((v) => digits.find((d) => d[0] === v)[1])
      .join("");
  }
  // BOJ 제출
  console.log(sum);
  return sum + "";
};

test("TC1", () => {
  expect(
    solution(`2
AAA
AAA`)
  ).toStrictEqual("1998");
});
test("TC2", () => {
  expect(
    solution(`2
GCF
ACDEB`)
  ).toStrictEqual("99437");
});
test("TC3", () => {
  expect(
    solution(`10
A
B
C
D
E
F
G
H
I
J`)
  ).toStrictEqual("45");
});
test("TC4", () => {
  expect(
    solution(`2
AB
BA`)
  ).toStrictEqual("187");
});
