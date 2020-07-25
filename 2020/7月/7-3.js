var lowestCommonAncestor = function (root, p, q) {
  while (
    (root.val > p.val && root.val > q.val) ||
    (root.val < p.val && root.val < q.val)
  ) {
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return root;
};
const a = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};
// cons
var maxArea = function (height) {
  let a1 = height[0];
  let a2 = height[height.length - 1];
  let res = 0;
  while (a1 !== a2) {
    res = Math.max(res, Math.min(height[a1], height[a2]));
    if (height[a1] < height[a2]) {
      a1++;
    } else {
      a2++;
    }
  }
  return res;
};
