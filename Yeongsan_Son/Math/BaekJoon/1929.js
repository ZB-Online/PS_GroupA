/*
[문제]
M 이상 N 이하의 소수를 모두 출력하는 프로그램 만들기
[입력]
자연수 M과 N
*/
function sol(s) {
  const [M, N] = s.toString().trim().split(' ').map(Number);

  return getPrimes(N)
    .filter(el => el >= M)
    .reduce((acc, curr) => {
      acc += curr + '\n';
      return acc;
    }, '');
}

function getPrimes(n) {
  const prime = [false, false, ...Array.from(Array.from({ length: n - 1 }, (_, idx) => idx + 2))];

  for (let i = 2; i * i <= n; i += 1) {
    if (prime[i]) {
      for (let j = i * 2; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(Boolean);
}

test('TC1', () => {
  expect(sol(`3 16`)).toStrictEqual(`3
5
7
11
13`);
});
