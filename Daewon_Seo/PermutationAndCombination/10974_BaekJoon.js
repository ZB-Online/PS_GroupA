const fs = require('fs');
let input = fs.readFileSync('stdin.txt').toString().split(' ');

let num = Number(input);
const nums = Array.from({ length: num }, (_, i) => i + 1);

const permute = (arr) => {
    const results = [];

    const dfs = (origin, path, used) => {
        if (path.length == origin.length) {
            results.push([...path]);
            return;
        }
        for (let i = 0; i < origin.length; i++) {
            if (used[i]) continue;

            path.push(origin[i]);

            used[i] = true;

            dfs(origin, path, used);

            path.pop();

            used[i] = false;
        }
    };

    dfs(arr, [], Array(arr.length).fill(false));

    for (const result of results) {
        console.log(result.join(' '));
    }
};

permute(nums);
