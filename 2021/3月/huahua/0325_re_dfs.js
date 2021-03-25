/**
 * 108. 将有序数组转换为二叉搜索树
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const dfs = (left, right) => {
    if (left > right) return null;
    if (left === right) return new TreeNode(nums[left]);
    const mid = ~~((left + right) / 2);
    const cur = new TreeNode(nums[mid]);
    cur.left = dfs(left, mid - 1);
    cur.right = dfs(mid + 1, right);
    return cur;
  };
  const head = dfs(0, nums.length - 1);
  return head;
};
// 由于参数原因  只能写成这种尾递归
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  const mid = ~~(nums.length / 2);
  const cur = new TreeNode(nums[mid]);
  cur.left = sortedArrayToBST(nums.slice(0, mid));
  cur.right = sortedArrayToBST(nums.slice(mid + 1));
  return cur;
};

/**
 * 剑指 Offer 55 - I.二叉树的深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  // let leftDep = 1 + maxDepth(root.left)
  // let rightDep = 1 + maxDepth(root.right)
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  // let leftDep = 1 + maxDepth(root.left)
  // let rightDep = 1 + maxDepth(root.right)
  // return leftDep > rightDep ? leftDep : rightDep
};

/**
 * 101. 对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
// 参数原因 无法写成尾递归
var isSymmetric = function (root) {
  if (!root) return true;

  const dfs = (left, right) => {
    if (!left && !right) return true;
    if (!left) return false;
    if (!right) return false;
    if (left.val === right.val) {
      return dfs(left.left, right.right) && dfs(left.right, right.left);
    } else {
      return false;
    }
  };
  return dfs(root.left, root.right);
};

/**
 * 110. 平衡二叉树
 * 剑指 Offer 55 - II. 平衡二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
const getDep = (root) => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  const leftDep = 1 + getDep(root.left);
  const rightDep = 1 + getDep(root.right);
  return leftDep > rightDep ? leftDep : rightDep;
};
var isBalanced = function (root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;

  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(getDep(root.left) - getDep(root.right)) <= 1
  );
};

/**
 * 112. 路径总和  为什么[1,2] 1 测试用例通不过  边界[] 0
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, pre = 0) {
  if (!root) return false;
  if (!root.left && !root.right) return pre + root.val === targetSum;
  return (
    hasPathSum(root.left, targetSum, pre + root.val) ||
    hasPathSum(root.right, targetSum, pre + root.val)
  );
};
const dfs = (root) => {
    if (!root) return 0
    if (!root.left && !root.right) return 1

    let left = dfs(root.left)
    let right = dfs(root.right)

    let is = Math.abs(leftDep - rightDep) <= 1
    let dep = Math.max(leftDep, rightDep)
    return [isLeft && isRight && is, dep + 1]
  }
  dfs(root)[0]
}
var secondHighest = function(s) {
  let a = -1;
  let b = -2;
  for (const n of s) {
    const v = Number(n);
    if (Number.isNaN(v)) {
      continue;
    } else {
      if (v > a) {
        [a, b] = [v, a];
      } else if (v !== a && v > b) {
        b = v;
      }
    }
  }
  return b >= 0 ? b : -1;
};