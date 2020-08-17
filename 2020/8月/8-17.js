// /**
//  * @param {number} k
//  * @param {number[]} nums
//  */
// var KthLargest = function (k, nums) {
//   this.index = k;
//   nums.sort((a, b) => b - a);
//   this.data = nums.slice(0, k);
// };

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//   for (let i = 0; i < this.index; i++) {
//     if (val >= this.data[i]) {
//       this.data.splice(i, 0, val);
//       this.data.pop();
//       break;
//     }
//   }
//   return this.data[this.index - 1];
// };

// /**
//  * Your KthLargest object will be instantiated and called as such:
//  * var obj = new KthLargest(k, nums)
//  * var param_1 = obj.add(val)
//  */
// var a = [4, 5, 8, 2];
// const ccc = new KthLargest(3, a);
// ccc.add(3);
// ccc.add(5);
// ccc.add(10);
// ccc.add(9);
// ccc.add(4);
// var search = function (nums, target) {
//   let end = nums.length - 1;
//   let start = 0;
//   if (nums[end] === target) return end;
//   if (nums[start] === target) return start;
//   while (start <= end) {
//     const middle = ~~((start + end) / 2);
//     if (middle === start) return -1;
//     if (nums[middle] === target) return middle;
//     if (nums[middle] < target) {
//       start = middle;
//     } else {
//       end = middle;
//     }
//   }
//   return -1;
// };
// var a = [-1, 0, 3, 5, 9, 12];
// console.log(search(a, 9));
var sumNumbers = function (root) {
  if (!root) return 0;
  const stack = [
    {
      node: root,
      val: "",
    },
  ];
  const res = [];
  while (stack.length) {
    const item = stack.shift();
    const v = item.val + item.node.val;
    if (!item.node.left && !item.node.right) {
      res.push(+v);
      continue;
    }
    if (item.node.left) {
      stack.push({
        node: item.node.left,
        val: v,
      });
    }
    if (item.node.right) {
      stack.push({
        node: item.node.right,
        val: v,
      });
    }
  }
  return res.reduce((a, b) => a + b);
};
