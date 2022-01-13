const solution = function (i) {
  const [N, M] = i
    .toString()
    .trim()
    .split(" ")
    .map((el) => +el);

  const nums = Array.from({ length: N }, (_, i) => i + 1);

  const permutation = [];
  let res = "";
  const dfs = (cnt) => {
    if (cnt === M) {
      res += `${permutation.join(" ")}\n`;
      return;
    }
    for (let i = 0; i < N; i++) {
      permutation.push(nums[i]);
      dfs(cnt + 1);
      permutation.pop();
    }
  };

  dfs(0);
  console.log(res.trim());
};

solution(`3 3`);
