const [N] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((input, i) => (i === 0 ? +input : input.split(' ').map(Number)));

const nums = Array.from({ length: N }, (_, i) => i + 1);
const checked = Array.from({ length: N }, () => false);

let res = '';

let permutation = [];

const dfs = (cnt) => {
    if (cnt === N) {
        res += `${permutation.join(' ')}\n`;
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!checked[i]) {
            permutation.push(nums[i]);
            checked[i] = true;
            dfs(cnt + 1);
            permutation.pop();
            checked[i] = false;
        }
    }
};

dfs(0);

console.log(res);
