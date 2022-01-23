const solution = (input) => {
    const [...nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((num) => +num);

    const maxVal = Math.max(...nums);

    const p = Array(maxVal + 1).fill(false);

    let res = '';

    p[0] = true;
    p[1] = true;

    for (let i = 2; i <= Math.sqrt(p.length); i++) {
        if (!p[i]) {
            for (let j = i * i; j < p.length; j += i) {
                p[j] = true;
            }
        }
    }

    for (let i = 0; i < nums.length - 1; i++) {
        const target = nums[i];
        let found = false;
        let start = 3;
        let end = target;

        while (start !== end) {
            if (start % 2 === 0 || p[start]) {
                start += 1;
                continue;
            }
            if (end % 2 === 0 || p[end]) {
                end -= 1;
                continue;
            }

            if (target - start === end) {
                res += `${target} = ${start} + ${end}\n`;
                found = true;
                break;
            } else if (target - start > end) {
                start += 1;
            } else {
                end -= 1;
            }
            if (start === end && start + end === target) {
                res += `${target} = ${start} + ${end}\n`;
                found = true;
            }
        }

        if (!found) {
            res += `Goldbach's conjecture is wrong.\n`;
        }
    }

    console.log(res);
};
solution(`8
20
42
0`);
