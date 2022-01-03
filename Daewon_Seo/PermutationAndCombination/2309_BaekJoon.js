const fs = require('fs');
const input = fs.readFileSync('stdin.txt').toString().trim().split('\n');

const arr = input.map((el) => +el);

const solution = (nums) => {
    const result = [];
    const dfs = (idx, origin, pickNum, target, path) => {
        if (target < 0) return;

        if (path.length === pickNum) {
            if (target === 0) {
                result.push([...path]);
                return;
            }
        }

        for (let i = idx; i < origin.length; i++) {
            path.push(origin[i]);
            dfs(i + 1, origin, pickNum, target - origin[i], path);
            path.pop();
        }
    };

    dfs(0, nums, 7, 100, []);

    result[0]
        .sort((a, b) => a - b)
        .forEach((el) => {
            console.log(el);
        });
};

solution(arr);
