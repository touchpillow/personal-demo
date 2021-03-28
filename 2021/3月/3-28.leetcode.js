// var numDifferentIntegers = function (word) {
//   const list = word
//     .replace(/[a-z]/g, " ")
//     .split(" ")
//     .filter((item) => item)
//     .map((item) => Number(item));
//   return new Set(list).size;
// };
// const word = "leet1234code234";
// console.log(numDifferentIntegers(word));
// var reinitializePermutation = function (n) {
//   const init = new Array(n);
//   for (let i = 0; i < n; i++) {
//     init[i] = i;
//   }
//   const initStr = init.join();
//   const next = new Array(n);
//   for (let i = 0; i < n; i++) {
//     if (i % 2) {
//       next[i] = init[n / 2 + (i - 1) / 2];
//     } else {
//       next[i] = init[i / 2];
//     }
//   }
//   init.splice(0, n, ...next);
//   let c = 1;
//   while (next.join() !== initStr) {
//     for (let i = 0; i < n; i++) {
//       if (i % 2) {
//         next[i] = init[n / 2 + (i - 1) / 2];
//       } else {
//         next[i] = init[i / 2];
//       }
//     }
//     init.splice(0, n, ...next);
//     c++;
//   }
//   return c;
// };

// console.log(reinitializePermutation(6));
// var evaluate = function (s, knowledge) {
//   const map = new Map();
//   for (const [key, value] of knowledge) {
//     map.set(key, value);
//   }
//   return s.replace(/\(.+?\)/gu, (a, b) => {
//     const s = a.slice(1, a.length - 1);
//     if (map.has(s)) return map.get(s);
//     return "?";
//   });
// };
// const s = "(a)(b)",
//   knowledge = [
//     ["a", "b"],
//     ["b", "a"],
//   ];
// console.log(evaluate(s, knowledge));

var maxNiceDivisors = function (primeFactors) {
  if (primeFactors <= 2) return primeFactors;
  const mod = Math.pow(10, 9) + 7;
  const cache = new Map();
  cache.set(0, 1);
  const getV = (c) => {
    if (cache.has(c)) return cache.get(c);
    if (c % 2) {
      const v = (getV(c - 1) * 3) % mod;
      cache.set(c, v);
      return v;
    } else {
      const v = getV(c / 2);
      const v1 = (v * v) % mod;
      cache.set(c, v1);
      return v1;
    }
  };
  const n = primeFactors % 3;
  let v2, v3;
  if (n === 1) {
    v3 = (primeFactors - 4) / 3;
    v2 = 2;
  } else if (n === 2) {
    v2 = 1;
    v3 = (primeFactors - 2) / 3;
  } else {
    v2 = 0;
    v3 = primeFactors / 3;
  }
  const c = Math.pow(2, v2);
  return (c * getV(v3)) % mod;
  // return getV(v3);
};
console.log(maxNiceDivisors(588406555));
