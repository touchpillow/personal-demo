// var distributeCandies = function (candies, num_people) {
//   const res = new Array(num_people).fill(0);
//   let i = 1;
//   while (candies) {
//     if (candies >= i) {
//       res[(i - 1) % num_people] += i;
//       candies -= i;
//     } else {
//       res[(i - 1) % num_people] += candies;
//       candies = 0;
//     }
//     i++;
//   }
//   return res;
// };
// const candies = 10,
//   num_people = 3;
// console.log(distributeCandies(candies, num_people));
// var defangIPaddr = function (address) {
//   return address.replace(".", "[.]");
// };
// const a = "1.1.1.1";
// console.log(defangIPaddr(a));
// var singleNumber = function (nums) {
//   const map = new Map();
//   for (const n of nums) {
//     map.set(n, (map.get(n) || 0) + 1);
//   }
//   const res = [];
//   for (const key of map.keys()) {
//     if (map.get(key) == 1) res.push(key);
//   }
//   return res;
// };
