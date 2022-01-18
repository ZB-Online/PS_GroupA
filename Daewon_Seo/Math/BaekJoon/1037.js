const solution = (input) => {
  const [number, divisors] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((input, i) => (i === 0 ? +input : input.split(" ").map(Number)));

  divisors.sort((a, b) => a - b);

  console.log(divisors[0] * divisors[number - 1]);
  return N + "";
};
solution(`
2 4 5 10 20
`);

// test("TC1", () => {
//   expect(
//     solution(`2
// 4 2`)
//   ).toStrictEqual(`8`);
// });

// test("TC2", () => {
//   expect(
//     solution(`1
// 2`)
//   ).toStrictEqual(`4`);
// });

// test("TC3", () => {
//   expect(
//     solution(`6
// 3 4 2 12 6 8`)
//   ).toStrictEqual(`24`);
// });

// test("TC4", () => {
//   expect(
//     solution(`14
// 14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`)
//   ).toStrictEqual(`185192`);
// });
