// 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

const fs = require('fs');
let input = fs.readFileSync('stdin.txt').toString().split(' ');

const numInput = +input;

const findMin = (num) => {
    const queue = [];

    const nMap = new Map();

    let count = 0;

    nMap.set(num, 1);

    queue.push(num);
    while (queue.length) {
        const len = queue.length;

        for (let i = 0; i < len; i++) {
            const target = queue.shift();
            if (target === 1) return count;
            if (!nMap.has(target - 1)) {
                nMap.set(target - 1, 1);
                queue.push(target - 1);
            }
            if (target % 2 === 0 && !nMap.has(target / 2)) {
                nMap.set(target / 2, 1);
                queue.push(target / 2);
            }

            if (target % 3 === 0 && !nMap.has(target / 3)) {
                nMap.set(target / 3, 1);
                queue.push(target / 3);
            }
        }
        count++;
    }
};

console.log(findMin(numInput));
