var suggestedProducts = function (products, searchWord) {
  products.sort();
  const l = searchWord.length;
  const res = [];
  for (let i = 0; i < l; i++) {
    products.filter((item) => item.startsWith(searchWord.slice(0, i + 1)));
    res.push(products.slice(0, 3));
  }
  return res;
};
