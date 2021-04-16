var recoverTree = function (root) {
  let preNode = {
    val: -Infinity,
  };
  let firstNode;
  let secondNode;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    if (root.val < preNode.val) {
      if (firstNode) {
        secondNode = root;
      } else {
        firstNode = preNode;
        secondNode = root;
      }
    }
    preNode = root;
    dfs(root.right);
  };
  dfs(root);
  [firstNode.val, secondNode.val] = [secondNode.val, firstNode.val];
  return root;
};
