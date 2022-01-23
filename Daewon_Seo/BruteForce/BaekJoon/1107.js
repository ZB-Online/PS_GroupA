const solution = (input) => {
    let [N, M, broken] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) =>
            i === 0 || i === 1 ? +el : el.split(' ').map((num) => +num)
        );
    // 100번부터 누르기 시작 =>

    const channel = (N + '').split('').map((el) => +el);

    const btns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((num, _, origin) =>
        broken ? !broken.includes(num) : origin
    );
    let cnt = 0;

    const getMinDiff = (num) => {
        let min = Number.MAX_SAFE_INTEGER;

        btns.forEach((btn) => {
            min = Math.min(min, Math.abs(num - btn));
        });

        return min;
    };

    let tempChn = '';

    for (let i = 0; i < channel.length; i++) {
        const cur = channel[i];
        if (btns.includes(cur)) cnt += 1;
        else {
            let minDiff = getMinDiff(cur);

            cnt += 10 ** (channel.length - i - 1) * minDiff + 1;
        }
    }

    console.log(cnt);
};
solution(`1
9
1 2 3 4 5 6 7 8 9`);
