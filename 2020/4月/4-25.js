//旧的数据格式
const oldData = [
  {
    nodeId: 1,
    parentId: 0,
    name: "1"
  },
  {
    nodeId: 2,
    parentId: 0,
    name: "12"
  },
  {
    nodeId: 3,
    parentId: 1,
    name: "123"
  },
  {
    nodeId: 4,
    parentId: 3,
    name: "1234"
  },
  {
    nodeId: 5,
    parentId: 2,
    name: "12345"
  }
];
//新的数据格式
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
function fn(data) {
  /// do something
  console.log(data);
}
function newFn(data) {
  fn(adapter(data));
}
function adapter(data) {
  //一般来说不要修改源数据
  const cloneData = JSON.parse(JSON.stringify(data)).map(item => ({
    ...item,
    children: []
  }));
  const dataMap = cloneData.reduce((res, item) => {
    res[item.nodeId] = item;
    return res;
  }, {});
  return cloneData.reduce((res, item) => {
    if (dataMap[item.parentId]) {
      dataMap[item.parentId].children.push(item);
    } else {
      res.push(item);
    }
    return res;
  }, []);
}
