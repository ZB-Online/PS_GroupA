const solution = function (i) {
  let answer = 0;
  const nums = i.toString().split('\n')[1].split(' ').map(Number);

  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++)
      if (num % i === 0) return false;

    return true;
  }

  for (const x of nums) {
    if (isPrime(x)) answer++;
  }
  console.log(answer);
  return answer;
};

describe('소수찾기', () => {
  it('TC1', () => {
    expect(
      solution(`4
1 3 5 7`)
    ).toStrictEqual(3);
  });
});
