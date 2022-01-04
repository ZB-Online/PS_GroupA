// const fs = require('fs');
// const input = fs.readFileSync('stdin.txt').toString().trim().split('\n');

const solution = (s) => {
    const input = s.toString().trim().split('\n');

    const len = input[0];
    const words = input.slice(1);
    let answer = 0;
    let digits = 0;
    let curNum = 9;

    const nMap = new Map();

    for (let i = 0; i < len; i += 1) {
        for (let j = 0; j < words[i].length; j += 1) {
            digits = 10 ** (words[i].length - (j + 1));
            nMap.set(words[i][j], (nMap.get(words[i][j]) || 0) + digits);
        }
    }

    const sortedMap = new Map(
        [...nMap.entries()].sort((a, b) => {
            if (a[1] <= b[1]) {
                return a[1] < b[1] ? 1 : 0;
            }
            return -1;
        })
    );

    for (const [key, value] of sortedMap) {
        answer += curNum * value;
        curNum--;
    }

    return answer + '';
};

test('TC1', () => {
    expect(
        solution(`2
AAA
AAA`)
    ).toStrictEqual('1998');
});
test('TC2', () => {
    expect(
        solution(`2
GCF
ACDEB`)
    ).toStrictEqual('99437');
});
test('TC3', () => {
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
    ).toStrictEqual('45');
});
test('TC4', () => {
    expect(
        solution(`2
AB
BA`)
    ).toStrictEqual('187');
});
