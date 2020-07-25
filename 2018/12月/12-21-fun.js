function fillDataToTree(attribute, data) {
    let fillDataToTreeFun = {
        //根据attribute构件树形的数据结构
        constructDataTree(d) {
            let data = [...d].reverse();
            let sortOrder = [];
            return Object.assign({}, data.reduce((val, item) => {
                sortOrder.unshift(item.group);
                let obj = {};
                item.params.forEach(e => obj[e] = val);
                return obj
            }, undefined), {sortOrder})
        },
        //将数据分组
        handleData(data) {
            let result = [];
            data.forEach(item => {
                if (!result[item.sign - 1]) {
                    result[item.sign - 1] = {};
                }
                result[item.sign - 1][item.attribute] = item.value
            });
            return result
        },
        //将数据填入到树形结构
        fillDataInTree(tree, data) {
            let treeWithData = JSON.parse(JSON.stringify(tree))
            data.forEach(item => {
                let goodsInfo = {goodsPic: item['商品图片'],price: item['价格'],spikePrice: item['秒杀价']};
                tree.sortOrder.reduce((val, e, index) => {
                    let itemData = val[item[e]];
                    itemData === void 0 && index === tree.sortOrder.length - 1 && (val[item[e]] = goodsInfo)
                    return itemData
                }, treeWithData)
            })
            return treeWithData
        }
    }
    return fillDataToTreeFun.fillDataInTree(fillDataToTreeFun.constructDataTree(attribute), fillDataToTreeFun.handleData(data))
}