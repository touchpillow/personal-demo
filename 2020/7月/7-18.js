var pathSum = function (root, sum) {
  if (!root) return 0;
  let res = 0;
  const stack = [
    {
      val: [0],
      node: root,
    },
  ];
  while (stack.length) {
    const item = stack.shift();
    const preVal = item.val[item.val.length - 1];
    for (const val of item.val) {
      if (preVal + item.node.val - val === sum) {
        res++;
      }
    }
    if (item.node.left) {
      stack.push({
        val: item.val.concat([preVal + item.node.val]),
        node: item.node.left,
      });
    }
    if (item.node.right) {
      stack.push({
        val: item.val.concat([preVal + item.node.val]),
        node: item.node.right,
      });
    }
  }
  return res;
};
var a = new Array(100).fill(1);
var canJumpA = (nums, step, map) => {
  const last = nums[nums.length - 1];
  if (last === undefined) return false;
  if (nums.length == 1 && !nums[0]) return false;
  return last >= step && canJump(nums, map);
};
var canJump = function (nums, map = new Map()) {
  const l = nums.length;
  if (l < 2) return true;
  for (let i = l - 1; i > 0; i--) {
    const cache = map.get(`${i}-${l - 1}` !== undefined);
    console.log(cache, i);
    if (cache !== undefined) {
      if (cache) {
        return true;
      } else {
        continue;
      }
    }
    const res = canJumpA(nums.slice(0, i), l - i, map);
    map.set(`${i}-${l - 1}`, res);
    if (res) {
      return res;
    }
  }
  return false;
};
console.log(canJump(a));
