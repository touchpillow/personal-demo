// var removeDuplicates = function (nums) {
//   const l = nums.length;
//   if (l < 3) return l;
//   let left = 0,
//     right = 0;
//   let cur = NaN,
//     count = 0;
//   while (right < l) {
//     if (nums[right] === cur && count >= 2) {
//     } else {
//       if (nums[right] !== cur) {
//         cur = nums[right];
//         count = 1;
//       } else {
//         count++;
//       }
//       if (left !== right) {
//         [nums[left], nums[right]] = [nums[right], nums[left]];
//       }
//       left++;
//     }
//     right++;
//   }
//   console.log(nums);
//   return left;
// };

// var removeDuplicates = function (nums) {
//   if (nums.length < 3) return nums.length;
//   let i;
//   let cur = NaN,
//     count = 0;
//   while (i < nums.length) {
//     if (nums[i] === cur && count >= 2) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       if (nums[i] !== cur) {
//         count = 1;
//         cur = nums[i];
//       } else {
//         count++;
//       }
//     }
//     i++;
//   }
//   return i;
// };
// var a = [1, 1, 1, 2, 2, 3];
// console.log(removeDuplicates(a));
// var arrayPairSum = function (nums) {
//   const l = nums.length;
//   if (!l) return 0;
//   nums.sort((a, b) => a - b);
//   let res = 0;
//   for (let i = 0; i < l; i += 2) {
//     res += nums[i];
//   }
//   return res;
// };
// var findTilt = function (root) {
//   if (!root) return 0;
//   let sum = 0;
//   let search = (root) => {
//     console.log(root.val);
//     if (root) return 0;
//     const vleft = search(root.left);
//     const vright = search(root.right);
//     sum += Math.abs(vleft - vright);
//     return vleft + vright + root.val;
//   };
//   search(root);
//   return sum;
// };
// var a = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: null,
//   },
// };
// console.log(findTilt(a));
// var matrixReshape = function (nums, r, c) {
//   const h = nums.length;
//   if (!h) return nums;
//   const w = nums[0].length;
//   if (w * h !== r * c) return nums;
//   const res = new Array(r).fill(null).map(() => new Array(c));
//   for (let i = 0; i < w * h; i++) {
//     res[~~(i / c)][i % c] = nums[~~(i / w)][i % w];
//   }
//   return res;
// };
// const isSubtreeAA = (s, t) => {
//   if (!s && !t) return true;
//   if (!s || !t) return false;
//   if (s.val !== t.val) return false;
//   return isSubtreeAA(s.left, t.left) && isSubtreeAA(s.right, t.right);
// };
// var isSubtree = function (s, t) {
//   if (!s && !t) return true;
//   if (!s || !t) return false;
//   const stack = [s];
//   while (stack.length) {
//     const item = stack.pop();
//     if (isSubtreeAA(item, t)) return true;
//     stack.push(item.left, item.right);
//   }
//   return false;
// };
// var middleSearch = (nums, start, end, target) => {
//   while (start !== end) {
//     if (nums[start] == target) return true;
//     if (nums[end] == target) return true;
//     const middle = Math.floor((start + end) / 2);
//     if (middle === start) return false;
//     if (nums[middle] === target) {
//       return true;
//     } else if (nums[middle] > target) {
//       end = middle;
//     } else {
//       start = middle;
//     }
//   }
//   return false;
// };
// var searchPart = (nums, start, end, target) => {
//   console.log(start, end);
//   while (start !== end) {
//     if (nums[start] == target) return true;
//     if (nums[end] == target) return true;
//     const middle = Math.floor((start + end) / 2);
//     if (nums[middle] == target) return true;
//     if (middle === start) return false;
//     if (nums[start] > nums[middle]) {
//       if (target > nums[start] || target < nums[middle]) {
//         return searchPart(nums, start, middle - 1, target);
//       } else {
//         return middleSearch(nums, middle + 1, end, target);
//       }
//     } else if (nums[start] == nums[middle]) {
//       if (nums[Math.floor((middle + end) / 2)] !== nums[start]) {
//         return searchPart(nums, middle + 1, end, target);
//       } else {
//         return searchPart(nums, start, middle - 1, target);
//       }
//     } else {
//       if (target > nums[middle] || target < nums[start]) {
//         return searchPart(nums, middle + 1, end, target);
//       } else {
//         return middleSearch(nums, start, middle - 1, target);
//       }
//     }
//   }
//   return false;
// };
// var search = function (nums, target) {
//   if (nums.length < 2) return nums[0] === target ? true : false;
//   return searchPart(nums, 0, nums.length - 1, target);
// };
// var a = [1, 3, 1, 1, 1];
// var a = [1, 1, 3, 1];
// console.log(search(a, 3));
function ListNode(a) {
  this.val = a;
  this.next = null;
}
var deleteDuplicates = function (head) {
  if (!head) return head;
  if (!head.next) return head;
  const a = new ListNode(1);
  a.next = head;
  let slow = a;
  let fast = head;
  while (fast && fast.next) {
    if (fast.val === fast.next.val) {
      while (fast.val === fast.next.val) {
        fast = fast.next;
      }
      fast = fast.next;
    } else {
      slow.next = fast;
      slow = fast;
      fast = fast.next;
    }
  }
  slow.next = fast;
  return a.next;
};
const a = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    },
  },
};
console.log(deleteDuplicates(a));
