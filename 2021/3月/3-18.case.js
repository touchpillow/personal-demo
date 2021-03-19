// 迭代
var levelOrder4 = function (root) {
  const stack = [root];
  const res = [];
  while (stack.length) {
    let l = stack.length;
    const cur = [];
    while (l--) {
      const item = stack.shift();
      if (!item) continue;
      cur.push(item.val);
      stack.push(item.left, item.right);
    }
    if (cur.length) {
      res.push(cur);
    }
  }
  return res;
};
