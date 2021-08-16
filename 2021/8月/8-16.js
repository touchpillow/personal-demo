var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  if (tomatoSlices > 4 * cheeseSlices || tomatoSlices < 2 * cheeseSlices)
    return [];
  if (tomatoSlices % 2) return [];
  const dis = (tomatoSlices - 2 * cheeseSlices) / 2;
  return [dis, cheeseSlices - dis];
};
