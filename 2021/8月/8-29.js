var canReach = function (arr, start) {
  const l = arr.length;
  const dp = new Array(l).fill(false);
  let flag = false;
  const stack = [start];

  while (stack.length) {
    if (flag) break;
    const item = stack.shift();
    if (item < 0 || item >= l) continue;
    if (dp[item]) continue;
    if (!arr[item]) return true;
    dp[item] = true;
    stack.unshift(item + arr[item]);
    stack.unshift(item - arr[item]);
  }
  return false;
  async function fn() {
    const data = await axios.get();
  }
  async function created() {
    await this.fn();
    this.fn1();
  }
};
