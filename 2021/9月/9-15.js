const province = [
  {
    id: "11",
  },
  {
    id: "13",
  },
];
const city = [
  {
    id: "1101",
  },
  {
    id: "1102",
  },
  {
    id: "1301",
  },
];
const area = [
  {
    id: "110101",
  },
  {
    id: "110102",
  },
  {
    id: "110201",
  },
  {
    id: "130102",
  },
];
const map = {};
province.forEach((item, index) => {
  map[item.id] = index;
});
// console.log(map);
city.forEach((item) => {
  const provinceId = item.id.slice(0, 2);
  //   console.log(province[map[provinceId]]);
  if (!province[map[provinceId]].cities) {
    province[map[provinceId]].cities = [];
  }
  province[map[provinceId]].cities.push(item);
});
console.log(province);
