// var removeComments = function (source) {
//   let cur = "";
//   let stack = [];
//   let temp = [];
//   for (const s of source) {
//     if (cur === "") {
//       temp = [];
//     }
//     for (let i = 0; i < s.length; i++) {
//       const last = temp[temp.length - 1];
//       if (cur !== "") {
//         if (cur === "/*" && s[i] === "*" && s[i + 1] === "/") {
//           cur = "";
//           i++;
//         } else if (cur === "//") {
//           cur = "";
//           break;
//         }
//       } else {
//         if (last === "/" && s[i] === "*") {
//           temp.pop();
//           cur = "/*";
//         } else if (last === "/" && s[i] === "/") {
//           temp.pop();
//           cur = "//";
//         } else {
//           temp.push(s[i]);
//         }
//       }
//     }
//     if (cur === "" && temp.length) {
//       stack.push(temp.join(""));
//     }
//   }
//   return stack;
// };
// const source = ["a/*comment", "line", "more_comment*/b"];
// console.log(removeComments(source));
var accountsMerge = function (accounts) {
  const l = accounts.length;
  const map = new Map();
  const list = new Array(l).fill("").map((i, index) => index);
  const find = (v) => {
    while (list[v] !== v) {
      v = list[v];
    }
    return v;
  };
  for (let j = 0; j < l; j++) {
    const item = accounts[j];
    const al = item.length;
    let flag = true;
    let v;
    for (let i = 1; i < al; i++) {
      if (map.has(item[i])) {
        flag = false;
        v = map.get(item[i]);
        break;
      }
    }
    const cur = flag ? j : find(v);
    list[j] = cur;
    for (let i = 1; i < al; i++) {
      if (map.has(item[i])) {
        const v = map.get(item[i]);
        list[find(v)] = cur;
      } else {
        map.set(item[i], cur);
      }
    }
  }
  const resMap = new Map();
  for (const [mail, i] of map.entries()) {
    const item = find(i);
    if (resMap.has(item)) {
      resMap.get(item).push(mail);
    } else {
      const res = [accounts[item][0], mail];
      resMap.set(item, res);
    }
  }
  const res = [...resMap.values()];
  res.forEach((item) => {
    item.sort();
  });
  return res;
};
const a = [
  ["David", "David0@m.co", "David1@m.co"],
  ["David", "David3@m.co", "David4@m.co"],
  ["David", "David4@m.co", "David5@m.co"],
  ["David", "David2@m.co", "David3@m.co"],
  ["David", "David1@m.co", "David2@m.co"],
];
console.log(accountsMerge(a));
