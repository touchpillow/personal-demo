// var predictPartyVictory = function (senate) {
//   const d = [];
//   const r = [];
//   const l = senate.length;
//   for (let i = 0; i < l; i++) {
//     if (senate[i] === "R") {
//       r.push(i);
//     } else {
//       d.push(i);
//     }
//   }
//   while (d.length && r.length) {
//     if (d[0] < r[0]) {
//       r.shift();
//       d.push(d.shift() + n);
//     } else {
//       d.shift();
//       r.push(r.shift() + n);
//     }
//   }
//   return d.length ? "Dire" : "Ridant";
// };
// const s = "DRRDRDRDRDDRDRDR";
// console.log(predictPartyVictory(s));
var minSteps = function (n) {
  let c = 1;
  let v = 0;
  const dp = new Array(n).fill("").map((item, index) => {
    if (!index) return [1, 0];
    return [item + 1, 1];
  });
  for (let i = 1; i < n; i++) {}
};
