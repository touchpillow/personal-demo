var goodNodes = function (root, max = 0) {
  if (!root) return 0;
  const left = goodNodes(root.left, Math.max(max, root.val));
  const right = goodNodes(root.right, Math.max(max, root.val));
  return left + right + root.val >= max ? 1 : 0;
};
