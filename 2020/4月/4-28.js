const newData = [
  {
    nodeId: 1,
    parentId: 0,
    name: "1",
    children: [
      {
        nodeId: 3,
        parentId: 1,
        name: "123",
        children: [
          {
            nodeId: 4,
            parentId: 3,
            name: "1234"
          }
        ]
      }
    ]
  },
  {
    nodeId: 2,
    parentId: 0,
    name: "12",
    children: [
      {
        nodeId: 5,
        parentId: 2,
        name: "12345"
      }
    ]
  }
];
function getTargetPath(data, value, initValue) {
  const item = data.find(item => {
    if (item.nodeId === value) {
      return true;
    } else if (item.children) {
      return getTargetPath(item.children, value, initValue);
    }
    return false;
  });
  if (item) {
    initValue.value = initValue.value
      ? `${item.name}/${initValue.value}`
      : item.name;
    return true;
  } else {
    return false;
  }
}
const a = { value: "" };
function getTargetName(data, value) {
  const stack = [];
  let res = "";
  stack.push({
    name: "",
    nodeId: 0,
    children: data
  });
  while (stack.length) {
    const item = stack.pop();
    res = item.name;
    if (item.nodeId === value) {
      break;
    }
    if (item.children) {
      item.children.forEach(citem => {
        stack.push({
          ...citem,
          name: item.name ? `${item.name}/${citem.name}` : citem.name
        });
      });
    }
  }
  return res;
}
getTargetPath(newData, 4, a);
console.log(getTargetName(JSON.parse(JSON.stringify(newData)), 4));
console.log(a);
