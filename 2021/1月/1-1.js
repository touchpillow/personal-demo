var shoppingOffers = function (price, special, needs) {
  let map = new Map();

  let f = function (curNeeds, preCost) {
    let key = curNeeds.join("-") + "_" + preCost;
    if (map.has(key)) return map.get(key);
    let ans = Infinity;

    for (let present of special) {
      let flag = true;
      let newNeeds = new Array(curNeeds.length);
      for (let j = 0; j < curNeeds.length; j++) {
        newNeeds[j] = curNeeds[j] - present[j];
        if (present[j] > curNeeds[j]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        ans = Math.min(ans, f(newNeeds, preCost + present[present.length - 1]));
      }
    }

    let sum = 0;
    for (let i = 0; i < curNeeds.length; i++) {
      sum += price[i] * curNeeds[i];
    }
    ans = Math.min(ans, preCost + sum);
    map.set(key, ans);
    return ans;
  };
  return f(needs, 0);
};
