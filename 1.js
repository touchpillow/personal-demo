let data = [{}, {}]; //数据
//基本思路
//思路1（当前方法）：从分散到集中
//1.遍历所有元素，将有相同parent_id的元素放在同一个数组的一个元素里（二维数组），数组的每一个元素有一个属性值parent_id，就是里面元素的parent_id，
//2.将得到的数组深拷贝，然后从level3开始遍历一级元素，找到node_id==parent_id的二级元素，然后push到后面，level2同理
//最后一个数组即是我们需要的数据

//思路2（代码还没写，刚刚想到的）:从集中到分散
//1.第一次遍历，取出level=1的元素；
//2.第二次遍历，取出level=2的元素，然后根据parent_id和node_id的对应关系放到源数据后面
//3.第三次遍历，原理同上

/**
 * @description: 
 * @param {type} 
 * @return: 
 */
function Action1(data1) {
  let tempArray = [],
    flag = true;
  data1.forEach(item1 => {
    tempArray.forEach(item2 => {
      if (item1.parent_id == item2.parent_id) {
        //相同就添加
        item2.push(item1);
        flag = false;
      }
      if (flag) {
        tempArray.push([item1]);
        tempArray[tempArray.length - 1].parentid = item1.parent_id;
      }
      flag = true;
    });
  });
  //这一步tempArray是按照parent_id划分的一个二维数组
  let result = Action2(tempArray);
  function Action2(data2) {
    //注意：深拷贝得到的data3只有数据，但是没有元素的属性
    let data3 = JSON.parse(JSON.stringify(data2));
    data3.forEach((val1, index1) => {
      if (val1[0].level == 3) {
        //先处理level3的元素
        data3.forEach((val2, index2) => {
          val2.forEach((val3, index3) => {
            //遍历数据的node_id属性，和一级元素的parentid比较
            if (val3.node_id == val1.parentid) {
              val1.forEach((val4, index4) => {
                data2[index2].splice(index3 + index4 + 1, 0, val4);
              });
            }
          });
        });
      }
    });
    //上面这个循环好像有点问题，感觉多写了一层forEach，但是临时推断的逻辑又没错
    data3.forEach((val, index) => {
      if (val[0].level == 3) {
        data2[index].splice(0, 1, []); //删除level3，减少后面的运算量
      }
    });

    //同上，处理leve2的元素
    let data4 = JSON.parse(JSON.stringify(data2));
    data4.forEach((val1, index1) => {
      if (val1[0] && val1[0].level == 3) {
        //先处理level3的元素
        data4.forEach((val2, index2) => {
          val2.forEach((val3, index3) => {
            //遍历数据的node_id属性，和一级元素的parentid比较
            if (val3 && val3.node_id == val1.parentid) {
              val1.forEach((val4, index4) => {
                data2[index2].splice(index3 + index4 + 1, 0, val4);
              });
            }
          });
        });
      }
    });
    //此时data2的最后一个元素应该就是需要的结果(因为后台返回的数据是按weight返回的，默认就为我们按照weight排序了)。但实际运行时发现会多出四条数据，并且0有一个level2下面的数据的顺序也不对，待解决
    return data2[data2.length - 1];
  }
  return result;
}
let result1 = Action1(data);
