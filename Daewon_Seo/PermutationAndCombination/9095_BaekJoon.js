const fs = require('fs');
const input = fs.readFileSync('stdin.txt').toString().split('\n');

const count = input[0];
const nums = [];

for (let i = 1; i <= count; i += 1) {
    nums.push(+input[i]);
}

function solution(arr) {
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

    for (const num of arr) {
        result = [];
        getComb([], num, 0);
        console.log(result.length);
    }
}

solution(nums);
