// var reverseParentheses = function (s) {
//   let level = 0;
//   const l = s.length;
//   let left = 0,
//     right = l - 1;
//   let lefts = "",
//     rights = "";
//   while (left < right) {
//     console.log(left, right);
//     if (level % 2) {
//       while (s[left] !== "(" && left <= right) {
//         rights = `${s[left]}${rights}`;
//         left++;
//       }

//       while (s[right] !== ")" && left <= right) {
//         lefts += s[right];
//         right--;
//       }
//     } else {
//       while (s[left] !== "(" && left <= right) {
//         lefts += s[left];
//         left++;
//       }

//       while (s[right] !== ")" && left <= right) {
//         rights = `${s[right]}${rights}`;
//         right--;
//       }
//     }
//     left++;
//     right--;
//     level++;
//   }
//   return `${lefts}${rights}`;
// };
const s = "ta()usw((((a))))";
var reverseParentheses = function (s) {
  const l = s.length;
  const stack = [];
  let level = 0;
  let init = 0;
  for (let i = 0; i < l; i++) {
    if (s[i] === "(") {
      stack.push([level, s.slice(init, i)]);
      level++;
      init = i + 1;
    } else if (s[i] === ")") {
      stack.push([level, s.slice(init, i)]);
      level--;
      init = i + 1;
    }
  }
  stack.push([0, s.slice(init, l)]);
  const l1 = stack.length;
  if (l1 < 2) return s;
  let res = "";
  const reverString = (s, level) => {
    return level % 2 ? [...s].reverse().join("") : s;
  };
  const list = [];
  for (const item of stack) {
    if (!list.length) {
      list.push(item);
      continue;
    }
    const [curLevel, curS] = item;
    const [preLevel, preS] = stack[i - 1];
    if (curLevel > preLevel) {
    }
  }

  return s;
};

console.log(reverseParentheses(s));
("ta()usw((((a))))");
