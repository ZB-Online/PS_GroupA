// const fs = require('fs');
// const input = fs.readFileSync('stdin.txt').toString().split('\n');

function solution(s) {
    const arr = s.toString().trim().split('\n').map(Number);
    arr.shift();
    let answer = '';

    let result = [];
    const elements = [1, 2, 3];
    const getComb = (path, target, sum = 0) => {
        if (target === sum) {
            result.push([...path]);
            return;
        } else if (sum > target) return;

        for (let i = 0; i < elements.length; i += 1) {
            sum += elements[i];

            path.push(elements[i]);

            getComb(path, target, sum);

            path.pop();

            sum -= elements[i];
        }
    };

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        result = [];
        getComb([], num, 0);
        if (i !== arr.length - 1) answer += result.length + '\n';
        else answer += result.length;
    }

    return answer;
}

test('TC1', () => {
    expect(
        solution(`3
  4
  7
  10`)
    ).toStrictEqual(`7
44
274`);
});
