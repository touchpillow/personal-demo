var findSubstring = function (s, words) {
  const map = new Map();
  for (const w of words) {
    map.set(w, (map.get(w) || 0) + 1);
  }
  console.log(map);
  const l = s.length;
  const wl = words.length;
  const singleW = words[0].length;
  const res = [];
  for (let i = 0; i <= l - wl * singleW; i++) {
    const map2 = new Map();
    let flag = true;
    for (let j = 0; j < wl; j++) {
      const cur = s.slice(i + j * singleW, i + (j + 1) * singleW);
      map2.set(cur, (map2.get(cur) || 0) + 1);
      if (map2.get(cur) > (map.get(cur) || 0)) {
        flag = false;
        break;
      }
    }

    if (flag) {
      res.push(i);
    }
  }
  return res;
};
const a = "barfoothefoobarman",
  b = ["foo", "bar"];
console.log(findSubstring(a, b));
