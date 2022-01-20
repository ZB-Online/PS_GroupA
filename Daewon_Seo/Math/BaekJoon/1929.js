const solution = (input) => {
    const [M, N] = input
        .toString()
        .trim()
        .split(' ')
        .map((num) => +num);

    const p = Array(N + 1).fill(false);

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

    for (let i = M; i <= N; i++) {
        if (!p[i]) res += `${i}\n`;
    }

    console.log(res);
};
solution(`3 16`);
