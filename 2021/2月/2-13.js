// var isNStraightHand = function (hand, W) {
//   const l = hand.length;
//   const map = new Map();
//   for (const n of hand) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   hand.sort((a, b) => a - b);
//   const handlMap = (v) => {
//     if (map.get(v) > 1) {
//       map.set(v, map.get(v) - 1);
//     } else {
//       map.delete(v);
//     }
//   };
//   if (l % W) return false;
//   if (W === 1) return true;
//   while (map.size) {
//     let pre = Math.min(...map.keys());
//     let c = W;
//     handlMap(pre);
//     while (--c) {
//       if (!map.get(pre + 1)) return false;
//       handlMap(pre + 1);
//       pre++;
//     }
//   }
//   return true;
// };
// const hand = [1, 2, 3, 4, 5, 6],
//   W = 3;
// console.log(isNStraightHand(hand, W));
var shiftingLetters = function (S, shifts) {
  const l = shifts.length;
  shifts[l - 1] = shifts[l - 1] % 26;
  for (let i = l - 2; i >= 0; i--) {
    shifts[i] = (shifts[i] + shifts[i + 1]) % 26;
  }
  let s = "";
  for (let i = 0; i < l; i++) {
    const v = (((S[i].charCodeAt() + shifts[i]) % 97) % 26) + 97;
    s += String.fromCharCode(v);
  }
  return s;
};
const S = "abc",
  shifts = [3, 5, 9];
console.log(shiftingLetters(S, shifts));
