var getFolderNames = function (names) {
  const map = new Map();
  return names.map((item) => {
    if (map.has(item)) {
      let pre = map.get(item) + 1;
      while (map.has(`${item}(${pre})`)) {
        pre++;
      }
      map.set(item, pre);
      map.set(`${item}(${pre})`, 0);
      return `${item}(${pre})`;
    } else {
      map.set(item, 0);
      return item;
    }
  });
};
const a = ["gta", "gta(1)", "gta", "gta(2)"];
console.log(getFolderNames(a));
