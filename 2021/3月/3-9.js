// var largestTimeFromDigits = function (arr) {
//   let max = "";
//   const dfs = (pre, arr) => {
//     if (arr.length) {
//       const l = arr.length;
//       for (let i = 0; i < l; i++) {
//         dfs(pre + arr[i], arr.slice(0, i).concat(arr.slice(i + 1)));
//       }
//     } else {
//       if (pre.slice(0, 2) < "24" && pre.slice(2) < "60") {
//         max = pre > max ? pre : max;
//       }
//     }
//   };
//   dfs("", arr);
//   return max && `${max.slice(0, 2)}:${max.slice(2)}`;
// };
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const l = deck.length;
  const stack = new Array(l);
  let i = 0;
  stack[0] = deck.shift();
  while (deck.length) {
    let step = 1;
    while (step || stack[i] !== undefined) {
      if (stack[i] === undefined) {
        step--;
      }
      i = (i + 1) % l;
    }
    stack[i] = deck.shift();
  }
  return stack;
};
