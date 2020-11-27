// var getIntersectionNode = function (headA, headB) {
//   if (headA == headB) return true;
//   let prea = headA;
//   let preb = headB;
//   while (prea !== preb) {
//     prea = prea ? prea.next : headB;
//     preb = preb ? preb.next : headA;
//   }
//   return prea;
// };
// var findDuplicates = function (nums) {
//   const res = [];
//   for (const n of nums) {
//     const a = Math.abs(n);
//     if (nums[a - 1] < 0) {
//       res.push(a);
//     } else {
//       nums[a - 1] *= -1;
//     }
//   }
//   return res;
// };
// const a = [4, 3, 2, 7, 8, 2, 3, 1];
// console.log(findDuplicates(a));
var convertBiNode = function (root) {
  if (!root) return root;
  let pre = null;
  const search = (root) => {
    if (!root) return null;

    let left = root.left;
    root.left = null;
    if (left) {
      left = search(left);
    }
    if (pre) {
      pre.right = root;
    }
    pre = root;
    root.right = search(root.right);
    return left || root;
  };
  return search(root);
};
const a = {
  val: 2,
  left: {
    val: 1,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
console.log(convertBiNode(a));
