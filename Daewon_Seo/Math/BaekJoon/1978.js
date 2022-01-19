const solution = (input) => {
    const [N, nums] = input
        .toString()
        .trim()
        .split('\n')
        .map((input, i) => (!i ? +input : input.split(' ').map((num) => +num)));

    const isPrimeNumber = (n) => {
        let cnt = 0; //
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                cnt++;
                if (cnt >= 2) return false;
            }
        }
        return true;
    };

    let sum = 0;

    for (let i = 0; i < N; i++) {
        if (nums[i] !== 1 && isPrimeNumber(nums[i])) sum += 1;
    }

    console.log(sum);
};
solution(`6
1 10 3 7 9 11`);
