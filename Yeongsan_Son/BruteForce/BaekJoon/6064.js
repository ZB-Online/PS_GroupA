function sol(s) {
  const input = s
    .toString()
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number));
  const arr = input.splice(1);
  const answer = [];

  arr.forEach(e => {
    const [M, N, X, Y] = e;
    const last = lcm(N, M);
    let x = X,
      y = Y;

    while (true) {
      if (x > last || y > last) {
        answer.push(-1);
        break;
      } else if (x > y) {
        y += N;
      } else if (x < y) {
        x += M;
      } else {
        answer.push(x);
        break;
      }
    }
  });

  return answer.join('\n');
}

function gcd(a, b) {
  if (b === 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

test('TC1', () => {
  expect(
    sol(`3
10 12 3 9
10 12 7 2
13 11 5 6`)
  ).toStrictEqual(`33
-1
83`);
});
