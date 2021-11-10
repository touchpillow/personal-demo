const a = [
  [
    "afqwfwcmuwitjgqghkic",
    "cwqvloqrxbfjuxwriltx",
    "snmktsxwxcpxhuujuanx",
    "ueuymzifycytalizwnvr",
  ],
  ["cwqvloqrxbfjuxwriltx"],
  ["cwqvloqrxbfjuxwriltx", "snmktsxwxcpxhuujuanx"],
  ["afqwfwcmuwitjgqghkic", "ueuymzifycytalizwnvr"],
  ["cwqvloqrxbfjuxwriltx", "ueuymzifycytalizwnvr"],
  ["afqwfwcmuwitjgqghkic", "cwqvloqrxbfjuxwriltx", "ueuymzifycytalizwnvr"],
  ["jeoipfoqbiqdxsnclcvo"],
];
var peopleIndexes = function (favoriteCompanies) {
  const l = favoriteCompanies.length;
  const isIncludes = new Array(l).fill(false);

  const list = favoriteCompanies.map((item, index) => {
    return [item, index];
  });
  list.sort((a, b) => b[0].length - a[0].length);
  for (let i = 0; i < l - 1; i++) {
    if (isIncludes[list[i][1]]) continue;
    for (let j = i + 1; j < l; j++) {
      if (isIncludes[list[j][1]]) continue;

      if (list[i][0].length === new Set([...list[i][0], ...list[j][0]]).size) {
        isIncludes[list[j][1]] = true;
      }
    }
  }
  const res = [];
  for (let i = 0; i < l; i++) {
    if (!isIncludes[i]) {
      res.push(i);
    }
  }
  return res;
};
console.log(peopleIndexes(a));
