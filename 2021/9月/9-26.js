var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  const parent = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    const left = leftChild[i];
    const right = rightChild[i];
    if (left >= 0) {
      if (parent[left] >= 0) return false;
      parent[left] = i;
    }
    if (right >= 0) {
      if (parent[right] >= 0) return false;
      parent[right] = i;
    }
  }
  const init = parent.findIndex((i) => i < 0);
  if (init === undefined) return false;
  const dfs = (i) => {
    if (i < 0) return 0;
    const left = dfs(leftChild[i]);
    const right = dfs(rightChild[i]);
    return left + right + 1;
  };
  return dfs(init) === n;
};

const a = 4,
  b = [1, 0, 3, -1],
  c = [-1, -1, -1, -1];
console.log(validateBinaryTreeNodes(a, b, c));
