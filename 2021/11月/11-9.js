var arrangeWords = function (text) {
  const list = text.split(" ");
  list[0] = list[0].toLowerCase();
  list.sort((a, b) => a.length - b.length);
  list[0] = list[0].toUpperCase() + list[0].slice(1);
  return list.join(" ");
};
