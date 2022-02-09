const solution = (input) => {
    const [testNum, T] = input
        .toString()
        .trim()
        .split('\n')
        .map((el, i) => (i === 0 ? +el : el.split(' ').map((n) => +n)));

    const lowerBound = (target, arr) => {
        let low = 0;
        let high = arr.length - 1;
        while (low < high) {
            let mid = Math.floor((high + low) / 2);
            if (target <= arr[mid]) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return high;
    };

    const LIS = [];

    for (let i = 0; i < testNum; i++) {
        if (LIS.length === 0 || LIS[LIS.length - 1] < T[i]) {
            LIS.push(T[i]);
        } else {
            LIS[lowerBound(T[i], LIS)] = T[i];
        }
    }
    console.log(LIS.length);
};

solution(`6
10 20 10 30 20 50`);
