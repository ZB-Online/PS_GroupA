const solution = (input) => {
    const [...nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((num) => +num);

    for (let i = 0; i < nums.length; i++) {
        let prev = 0;
        for (let j = 1; ; j++) {
            prev = (prev * 10 + 1) % nums[i];
            if (prev === 0) {
                console.log(j);
                break;
            }
        }
    }
};
solution(`3
7
9901`);
