var FindElements = function (root) {
  if (!root) return null;
  const newRoot = new TreeNode(0);
  const set = new Set();
  const dfs = (v = 0, parent = newRoot, cur = root) => {
    if (!cur) return null;
    const curNode = new TreeNode(v);
    set.add(v);
    curNode.left = dfs(v * 2 + 1, curNode, cur.left);
    curNode.right = dfs(v * 2 + 2, curNode, cur.right);
    return curNode;
  };
  this.root = dfs();
  this.set = set;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.set.has(target);
};
