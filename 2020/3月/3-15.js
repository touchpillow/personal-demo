const tempImg = "./loadimg.svg";
//代理的对象
const setImg = (src, imgEle) => {
  const img = new Image();
  imgEle.src = tempImg;
  img.src = src;
  img.onload = function() {
    setRealImg(src, imgEle);
  };
};
//实际需要执行的逻辑
const setRealImg = (src, ele) => {
  ele.src = src;
};
//这个方法获取最新选中的节点的id
const getAllId=()=>{
    return [1,2,3]
}
//负责发送请求，这是最终需要的操作
const doRequest = async params => {
  return await axios.post("/data/edit", params);
};
const handleCheck=(()=>{
    const timer
    return () => {
        if(timer){
            return 
        }
        timer=window.setTimeout(()=>{
            const id=getAllId()
            doRequest(id)
            window.clearTimeout(timer)
            timer=null
        },1e3)
    }
})()