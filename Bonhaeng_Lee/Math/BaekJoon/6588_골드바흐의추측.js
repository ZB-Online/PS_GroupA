const solution = function (i) {
  const inputs = i.toString().trim().split('\n').map(Number);
  inputs.pop();

  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let res = '';
  for (const i of inputs) {
    let flag = false;

    for (let j = 2; j < i; j++) {
      if (isPrime(j) && isPrime(i - j)) {
        res += `${i} = ${j} + ${i - j}\n`;
        console.log(`${i} = ${j} + ${i - j}`);

        flag = true;
        break;
      }
    }

    if (!flag) {
      res += "Goldbach's conjecture is wrong.\n";
      console.log("Goldbach's conjecture is wrong.");
    }
  }

  return res.substring(0, res.length - 1);
};

describe('골드바흐의추측', () => {
  it('TC1', () => {
    expect(
      solution(`8
20
42
0`)
    ).toStrictEqual(`8 = 3 + 5
20 = 3 + 17
42 = 5 + 37`);
  });
});
