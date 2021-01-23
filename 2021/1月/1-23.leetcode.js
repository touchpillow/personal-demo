// var largestAltitude = function (gain) {
//   let max = 0;
//   const l = gain.length;
//   let v = 0;
//   for (const n of gain) {
//     v += n;
//     max = Math.max(max, v);
//   }
//   return max;
// };
// const a = [-4, -3, -2, -1, 4, 3, 2];

// console.log(largestAltitude(a));
// var decode = function (encoded) {
//   const n = encoded.length + 1;

// };
// var minimumTeachings = function (n, languages, friendships) {
//   const map = new Map();
//   for (const [a, b] of friendships) {
//     const a1 = languages[a - 1];
//     const b1 = languages[b - 1];
//     if (a1.length + b1.length !== new Set([...a1, ...b1]).size) continue;
//     if (!map.has(a)) {
//       map.set(a, []);
//     }
//     map.get(a).push(b);
//   }
//   const entries = [...map.entries()];
//   const list = new Array(n).fill(0);
//   const set = new Set();
//   for (let i = 1; i <= n; i++) {
//     for (const [a, b] of entries) {
//       if (!languages[a - 1].includes(i) && !set.has(`${a}-${i}`)) {
//         list[i - 1]++;
//         set.add(`${a}-${i}`);
//       }
//       b.forEach((item) => {
//         if (!languages[item - 1].includes(i) && !set.has(`${item}-${i}`)) {
//           list[i - 1]++;
//           set.add(`${item}-${i}`);
//         }
//       });
//     }
//   }
//   return Math.min(...list);
// };

// const n = 17,
//   languages = [
//     [4, 7, 2, 14, 6],
//     [15, 13, 6, 3, 2, 7, 10, 8, 12, 4, 9],
//     [16],
//     [10],
//     [10, 3],
//     [4, 12, 8, 1, 16, 5, 15, 17, 13],
//     [4, 13, 15, 8, 17, 3, 6, 14, 5, 10],
//     [11, 4, 13, 8, 3, 14, 5, 7, 15, 6, 9, 17, 2, 16, 12],
//     [4, 14, 6],
//     [16, 17, 9, 3, 11, 14, 10, 12, 1, 8, 13, 4, 5, 6],
//     [14],
//     [7, 14],
//     [17, 15, 10, 3, 2, 12, 16, 14, 1, 7, 9, 6, 4],
//   ],
//   friendships = [
//     [4, 11],
//     [3, 5],
//     [7, 10],
//     [10, 12],
//     [5, 7],
//     [4, 5],
//     [3, 8],
//     [1, 5],
//     [1, 6],
//     [7, 8],
//     [4, 12],
//     [2, 4],
//     [8, 9],
//     [3, 10],
//     [4, 7],
//     [5, 12],
//     [4, 9],
//     [1, 4],
//     [2, 8],
//     [1, 2],
//     [3, 4],
//     [5, 10],
//     [2, 7],
//     [1, 7],
//     [1, 8],
//     [8, 10],
//     [1, 9],
//     [1, 10],
//     [6, 7],
//     [3, 7],
//     [8, 12],
//     [7, 9],
//     [9, 11],
//     [2, 5],
//     [2, 3],
//   ];
// console.log(minimumTeachings(n, languages, friendships));
var decode = function (encoded) {
  const l = encoded.length;
  const left = new Array(l);
  const list = new Array(l + 1);
  left[0] = encoded[0];
  for (let i = 1; i < l; i++) {
    left[i] = left[i - 1] ^ encoded[i];
  }
  const res = left.reduce((a, b) => a ^ b, 0);
  let v = 0;
  for (let i = 1; i <= l + 1; i++) {
    v = v ^ i;
  }
  list[0] = v ^ res;
  for (let i = 1; i < l + 1; i++) {
    list[i] = encoded[i - 1] ^ list[i - 1];
  }
  return list;
};
