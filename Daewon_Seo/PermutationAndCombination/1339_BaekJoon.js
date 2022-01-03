const fs = require('fs');
const input = fs.readFileSync('stdin.txt').toString().trim().split('\n');
const len = input[0];
const inputArr = input.slice(1);

const solution = (words) => {
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

    console.log(answer);
};

solution(inputArr);
