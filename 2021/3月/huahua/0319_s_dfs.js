/**
 * 605. 种花问题
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
  const l = flowerbed.length;
  for (let i = 0; i < l; i++) {
    if (!flowerbed[i - 1] && !flowerbed[i + 1] && !flowerbed[i]) {
      n--;
      flowerbed[i] = 1;
    }
  }
  return n <= 0;
};
var canPlaceFlowers1 = function (flowerbed, n) {
  const stack = [];
  let len = 0;
  for (const n of flowerbed) {
    //计算所有连续的0及对应的长度
    //连续的0对应的最大种植数量是可以计算的
    if (!n) {
      len++;
    } else {
      stack.push(len);
      len = 0;
    }
  }
  // 在两边都是1时，连续的0，假设长度为l，能种的花是数量是Math.floor((l-1)/2)
  // 如果连续的0在最左边或者最右边，那么是 Math.floor(l/2)
  // 如果整个数组都是0，那么是Math.floor((l+1)/2)

  //没有1，即左右边界相连
  if (!stack.length) return ~~((len + 1) / 2) >= n;
  const left = stack.shift();
  //左右边界 只需要考虑一端的相邻问题
  const init = ~~(left / 2) + ~~(len / 2);
  return (
    stack.reduce((sum, item) => {
      return sum + ~~((item - 1) / 2);
    }, init) >= n
  );
};
var canPlaceFlowers2 = function (flowerbed, n) {
  const stack = [];
  let len = 0;
  const funMap = {
    0: () => {
      len++;
    },
    1: () => {
      stack.push(len);
      len = 0;
    },
  };
  for (const n of flowerbed) {
    //计算所有连续的0及对应的长度
    //连续的0对应的最大种植数量是可以计算的
    funMap[n]();
  }
  //没有1，即左右边界相连
  if (!stack.length) return ~~((len + 1) / 2) >= n;
  const left = stack.shift();
  //左右边界 只需要考虑一端的相邻问题
  const init = ~~(left / 2) + ~~(len / 2);
  return (
    stack.reduce((sum, item) => {
      return sum + ~~((item - 1) / 2);
    }, init) >= n
  );
};
var canPlaceFlowers3 = function (flowerbed, n) {
  const stack = [];
  let len = 0;
  const funMap = {
    0: () => {
      len++;
    },
    1: () => {
      stack.push(len);
      len = 0;
    },
  };
  for (const n of flowerbed) {
    //计算所有连续的0及对应的长度
    //连续的0对应的最大种植数量是可以计算的
    funMap[n]();
  }
  const resMap = {
    true: () => {
      return ~~((len + 1) / 2) >= n;
    },
    false: () => {
      const left = stack.shift();
      //左右边界 只需要考虑一端的相邻问题
      const init = ~~(left / 2) + ~~(len / 2);
      return (
        stack.reduce((sum, item) => {
          return sum + ~~((item - 1) / 2);
        }, init) >= n
      );
    },
  };
  return resMap[`${!stack.length}`]();
};
/**
 * 733. 图像渲染
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const newVal = image[sr][sc];
  if (newVal === newColor) return image;
  const dfs = (i, j) => {
    if (i < 0 || i > image.length - 1 || j < 0 || j > image[i].length - 1) {
      return;
    }
    if (image[i][j] === newVal) {
      image[i][j] = newColor;
      map.set(map.size, [i, j]);
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };
  dfs(sr, sc);
  return image;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 100. 相同的树
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return dfs(p.left, q.left) && dfs(p.right, q.right);
};

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * 559. N 叉树的最大深度 是否可以去掉外层的max
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(root.children.map((item) => dfs(item)));
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 剑指 Offer 55 - II. 平衡二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var getHeight = function (root) {
  if (!root) return 0;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};
var isBalanced1 = function (root) {
  const dfs = (root) => {
    if (!root) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    if (left < 0 || right < 0) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  };
  return dfs(root) >= 0;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 783. 二叉搜索树节点最小距离
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 0;
  let min = Infinity;
  let pre = -Infinity;
  const dfs = (root) => {
    if (!root) return;
    dfs(root.left);
    min = Math.min(root.val - pre, min);
    pre = root.val;
    dfs(root.right);
  };
  return min;
};
var minDiffInBST2 = function (root) {
  let min = Infinity;

  const dfs = (root) => {
    if (!root) return [];
    return [...dfs(root.left), root.val, ...dfs(root.right)];
  };
  const nodes = dfs(root).sort((a, b) => (a - b > 0 ? 1 : -1));
  for (var i = 0, j = i + 1; j < nodes.length; ) {
    min = Math.min(min, Math.abs(nodes[j] - nodes[i]));
    i++;
    j = i + 1;
  }
  return min;
};
