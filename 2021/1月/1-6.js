// var printTree = function(root) {
//     let row = getDepth(root);
//     let col = Math.pow(2, row) - 1;
//     let arr = Array.from(new Array(row), () => new Array(col).fill(""));
//     printSingleRow(arr, root, 0, 0, col);
//     return arr;
// };

// function getDepth(root) {
//     if(!root) return 0;
//     let leftDph = getDepth(root.left);
//     let rightDph = getDepth(root.right);
//     return leftDph > rightDph ? leftDph + 1 : rightDph + 1;
// }

// function printSingleRow(arr, root, row, left, right) {
//     if(root) {
//         let mid = Math.floor((left + right) / 2);
//         arr[row][mid] = String(root.val);
//         printSingleRow(arr, root.left, row + 1, left, mid);
//         printSingleRow(arr, root.right, row + 1, mid + 1, right);
//     }
// }

var findClosestElements = function (arr, k, x) {
  return arr
    .sort((a, b) => {
      if (Math.abs(a - x) === Math.abs(b - x)) {
        return a - b;
      } else {
        return Math.abs(a - x) === Math.abs(b - x);
      }
    })
    .slice(0, k)
    .sort((a, b) => a - b);
};
