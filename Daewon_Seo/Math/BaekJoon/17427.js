const solution = (input) => {
    const [num] = input
        .toString()
        .trim()
        .split('\n')
        .map((num) => +num);

    let ans = 0;

    for (let i = 1; i <= num; i++) {
        ans += Math.floor(num / i) * i;
    }

    console.log(ans);
};
solution(`10000`);
