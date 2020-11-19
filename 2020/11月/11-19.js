// var twoSum = function (nums, target) {
//   const l = nums.length;
//   let left = 0,
//     right = l - 1;
//   while (left < right) {
//     if (nums[left] + nums[right] == target) return [nums[left], nums[right]];
//     if (nums[left] + nums[right] > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// };
// var findContinuousSequence = function (target) {
//   const res = [];
//   const temp = [];
//   let sum = 0;
//   for (let i = 1; i < target; i++) {
//     temp.push(i);
//     sum += i;

//     while (sum > target) {
//       const item = temp.shift();
//       sum -= item;
//     }
//     if (sum == target) {
//       res.push(temp.slice());
//     }
//   }
//   return res;
// };
// console.log(findContinuousSequence(15));
// var findMaximumXOR = function (nums) {
//   let max = 0;
//   const l = nums.length;
//   const s = nums
//     .map((i) => {
//       const str = i.toString(2);
//       max = Math.max(str.length, max);
//       return str;
//     })
//     .map((item) => item.padStart(max, "0"));
// };
var originalDigits = function (s) {
  let res = "";
  const a = ["three"];
  const map = {};
  for (const n of s) {
    map[n] = (map[n] || 0) + 1;
  }
  if (map["z"]) {
    const c = map["z"];
    res += "0".repeat(c);
    map["z"] = 0;
    map["e"] -= c;
    map["r"] -= c;
    map["o"] -= c;
  }
  if (map["g"]) {
    const c = map["g"];
    res += "8".repeat(c);
    map["e"] -= c;
    map["i"] -= c;
    map["g"] = 0;
    map["h"] -= c;
    map["t"] -= c;
  }
  if (map["w"]) {
    const c = map["w"];
    res += "2".repeat(c);
    map["t"] -= c;
    map["w"] -= 0;
    map["o"] -= c;
  }
  if (map["x"]) {
    const c = map["x"];
    res += "6".repeat(c);
    map["s"] -= c;
    map["i"] -= c;
    map["x"] = 0;
  }
  if (map["u"]) {
    const c = map["u"];
    res += "4".repeat(c);
    map["f"] -= c;
    map["o"] -= c;
    map["u"] = 0;
    map["r"] -= c;
  }
  if (map["o"]) {
    const c = map["o"];
    res += "1".repeat(c);
    map["o"] = 0;
    map["n"] -= c;
    map["e"] -= c;
  }
  if (map["f"]) {
    const c = map["f"];
    res += "5".repeat(c);
    map["f"] = 0;
    map["i"] -= c;
    map["v"] -= c;
    map["e"] -= c;
  }
  if (map["v"]) {
    const c = map["v"];
    res += "7".repeat(c);
    map["s"] -= c;
    map["e"] -= 2 * c;
    map["v"] = 0;
    map["n"] -= c;
  }
  if (map["i"]) {
    const c = map["i"];
    res += "9".repeat(c);
    map["n"] -= 2 * c;
    map["i"] = 0;
    map["e"] -= c;
  }
  const c3 = map["t"];
  res += "3".repeat(c3);
  res = [...res];
  return res.sort().join("");
};
var reverseWords = function (s) {
  s = s.split("").filter((i) => i !== " ");
  return s.reverse().join(" ");
};
