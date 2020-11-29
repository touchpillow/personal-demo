// var AnimalShelf = function () {
//   this.data = [];
// };

// /**
//  * @param {number[]} animal
//  * @return {void}
//  */
// AnimalShelf.prototype.enqueue = function (animal) {
//   this.data.push(animal);
// };

// /**
//  * @return {number[]}
//  */
// AnimalShelf.prototype.dequeueAny = function () {
//   if (!this.data.length) return [-1, -1];
//   return this.data.shift();
// };

// /**
//  * @return {number[]}
//  */
// AnimalShelf.prototype.dequeueDog = function () {
//   const index = this.data.findIndex((item) => item[1] == 1);
//   if (index < 0) return [-1, -1];
//   return this.data.splice(index, 1)[0];
// };

// /**
//  * @return {number[]}
//  */
// AnimalShelf.prototype.dequeueCat = function () {
//   const index = this.data.findIndex((item) => item[1] == 0);
//   if (index < 0) return [-1, -1];
//   return this.data.splice(index, 1)[0];
// };
var sortedArrayToBST = function (nums) {
  const l = nums.length;
  if (!l) return null;
  if (l == 1) return new TreeNode(nums[0]);
  const mid = ~~(l / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1, mid);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(left);
  root.right = sortedArrayToBST(right);
  return root;
};
