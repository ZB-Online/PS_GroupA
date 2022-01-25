const solution = (input) => {
    const [E, S, M] = input
        .toString()
        .trim()
        .split(' ')
        .map((el) => +el);

    // 메모리 초과

    let count = 1;
    while (true) {
        if (
            (count - E) % 15 === 0 &&
            (count - S) % 28 === 0 &&
            (count - M) % 19 === 0
        ) {
            console.log(count);
            process.exit();
        }
        count++;
    }
};
solution(`1 2 3`);
