const solution = function (i) {
  const answer = [];
  const nums = i.toString().split(' ').map(Number);

  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  for (let i = nums[0]; i <= nums[1]; i++) {
    if (isPrime(i)) answer.push(i);
  }
  console.log(answer.join('\n'));
  return answer.join('\n');
};

describe('소수구하기', () => {
  it('TC1', () => {
    expect(solution(`3 16`)).toStrictEqual(`3
5
7
11
13
`);
  });
});
