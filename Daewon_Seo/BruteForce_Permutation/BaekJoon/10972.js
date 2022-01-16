const solution = (input) => {
    let [N, target] = input
        .toString()
        .trim()
        .split('\n')
        .map((input, i) => (i === 0 ? +input : input.split(' ').map(Number)));

    const swap = (i, j) => {
        [target[i], target[j]] = [target[j], target[i]];
    };

    const reverse = (idx) => {
        let start = idx,
            end = N - 1;

        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    };

    const nextLargeIdx = (idx) => {
        for (let i = N - 1; i > idx; i--) {
            if (target[i] > target[idx]) return i;
        }
    };

    for (let i = N - 1; i >= 0; i--) {
        if (target[i] < target[i + 1]) {
            const large = nextLargeIdx(i);
            swap(i, large);
            reverse(i + 1);
            console.log(target.join(' '));
            return;
        }
    }

    console.log(-1);
};

solution(`4
1 2 3 4`);
