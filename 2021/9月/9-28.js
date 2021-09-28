var rankTeams = function (votes) {
  const l = votes[0].length;
  const map = new Map();
  for (const s of votes) {
    for (let i = 0; i < l; i++) {
      const cur = s[i];
      if (!map.has(cur)) {
        map.set(cur, new Array(l).fill(0));
      }
      map.get(cur)[i]++;
    }
  }
  return [...map.keys()]
    .sort((a, b) => {
      const v1 = map.get(a);
      const v2 = map.get(b);

      for (let i = 0; i < l; i++) {
        if (v1[i] !== v2[i]) return v2[i] - v1[i];
      }
      return a > b ? 1 : -1;
    })
    .join('');
};
