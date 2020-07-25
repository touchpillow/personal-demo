// var deleteDuplicates = function (head) {
//   var a = head;
//   while (a && a.next) {
//     if (a.val === a.next.val) {
//       a.next = a.next.next;
//     } else {
//       a = a.next;
//     }
//   }
//   return head;
// };
// var merge = function (nums1, m, nums2, n) {
//   var l = m + n;
//   for (let i = l - 1; i; i--) {
//     if (n < 1) break;
//     if (m >= 1 && nums1[m - 1] > nums2[n - 1]) {
//       nums1[i] = nums1[m - 1];
//       m--;
//     } else {
//       nums1[i] = nums2[n - 1];
//       n--;
//     }
//   }
//   nums1[0] = nums1[m - 1] === undefined ? nums2[0] : nums1[0];
// };
var isSameTree = function (p, q) {
  return (
    p === q ||
    (p !== null &&
      q !== null &&
      p.val === q.val &&
      (p.left === q.left || isSameTree(p.left, q.left)) &&
      (p.right === q.right || isSameTree(p.right, q.right)))
  );
};
var isSymmetric = function (root) {
  var isSameTree = function (p, q) {
    return (
      p === q ||
      (p !== null &&
        q !== null &&
        p.val === q.val &&
        (p.left === q.right || isSameTree(p.left, q.right)) &&
        (p.right === q.left || isSameTree(p.right, q.left)))
    );
  };
  return (
    root === null ||
    root.left === root.right ||
    (root.left !== null &&
      root.right !== null &&
      isSameTree(root.left, root.right))
  );
};

var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
};
var maxDepth = function (root) {
  if (!root) return 0;
  var v = [root],
    r = [],
    res = 1;
  while (v.length) {
    v.forEach((i) => {
      if (i.left) r.push(i.left);
      if (i.right) r.push(i.right);
    });
    if (r.length) {
      v = r;
      r = [];
      res++;
    } else {
      break;
    }
  }
  return res;
};
