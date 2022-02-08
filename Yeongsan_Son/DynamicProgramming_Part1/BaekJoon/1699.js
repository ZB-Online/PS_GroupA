function sol(s) {
  const input = +s.toString().trim();
  const numbers = Array.from({ length: input + 1 }, (_, idx) => idx);
  const dp = [0, 1, ...Array.from({ length: input - 1 }, () => 0)];

  for (let i = 1; i < numbers.length; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i - j ** 2 >= 0 && dp[i - j ** 2] + 1 < dp[i]) dp[i] = dp[i - j ** 2] + 1;
    }
  }

  return dp[input];
}

test('TC1', () => {
  expect(sol(`7`)).toStrictEqual(4);
});
test('TC2', () => {
  expect(sol(`1`)).toStrictEqual(1);
});
test('TC3', () => {
  expect(sol(`4`)).toStrictEqual(1);
});
test('TC4', () => {
  expect(sol(`11`)).toStrictEqual(3);
});
test('TC5', () => {
  expect(sol(`13`)).toStrictEqual(2);
});
