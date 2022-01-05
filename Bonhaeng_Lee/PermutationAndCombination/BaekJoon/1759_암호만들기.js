const solution = function (i) {
  const [input1, input2] = i.toString().trim().split('\n');
  const L = input1.split(' ').map(Number)[0];
  const arr = input2.split(' ').sort();

  // 알파벳 "모음"이 1개 이상인지 검사
  const validateVowel = str => {
    const m = str.match(/[aeiou]/gi);
    return m !== null && m.length >= 1;
  };

  // 알파벳 "자음"이 2개 이상인지 검사
  const validateConsonant = str => {
    const m = str.match(/[^aeiou]/gi);
    return m !== null && m.length >= 2;
  };

  const combination = (arr, selectNum) =>
    selectNum === 1
      ? arr.map(v => [v])
      : arr.reduce((result, fixed, idx, arr) => {
          const combinationArr = combination(arr.slice(idx + 1), selectNum - 1);
          const combineFix = combinationArr.map(v => [fixed, ...v]);
          return [...result, ...combineFix];
        }, []);

  const answer = combination(arr, L)
    .map(v => v.join(''))
    .filter(v => validateVowel(v) && validateConsonant(v))
    .join('\n');

  // BOJ 제출
  console.log(answer);
  return answer;
};

test('TC1', () => {
  expect(
    solution(`4 6
a t c i s w`)
  ).toStrictEqual(`acis
acit
aciw
acst
acsw
actw
aist
aisw
aitw
astw
cist
cisw
citw
istw`);
});
