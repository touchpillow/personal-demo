var numTeams = function (rating) {
  const l = rating.length;
  let res = 0;
  for (let i = 1; i < l - 1; i++) {
    let a = 0,
      b = 0;
    let c = 0,
      d = 0;
    for (let j = 0; j < i; j++) {
      if (rating[j] > rating[i]) {
        a++;
      } else if (rating[j] < rating[i]) {
        b++;
      }
    }
    for (let k = i + 1; k < l; k++) {
      if (rating[k] > rating[i]) {
        c++;
      } else if (rating[k] < rating[i]) {
        d++;
      }
    }
    res += a * d;
    res += b * c;
  }
  return res;
};
