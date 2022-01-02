const solution = function (input) {
  const [input1, input2] = input.toString().trim().split("\n");
  const [n, s] = input1.split(" ").map(Number);
  const arr = input2.split(" ").map(Number);

  const visited = [...Array(arr.length)].fill(0);

  const getSum = function () {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (visited[i]) sum += arr[i];
    }
    return sum;
  };

  let cnt = 0;
  // s는 0일 때 sum이 0이면 cnt가 늘어나는 문제를 sum = null로 해결
  const dfs = function (L, sum = null) {
    if (sum === s) cnt++;
    // L은 이전 인덱스의 요소를 다시 넣을 수 없도록 함 ( i + 1 전달 )
    for (let i = L; i < n; i++) {
      visited[i] = 1;
      dfs(i + 1, getSum());
      visited[i] = 0;
    }
  };

  dfs(0);
  console.log(cnt);
  return cnt + "";
};

test("TC1", () => {
  expect(
    solution(`5 0
-7 -3 -2 5 8`)
  ).toStrictEqual("1");
});
test("TC2", () => {
  expect(
    solution(`2 -2
-1 -1`)
  ).toStrictEqual("1");
});
