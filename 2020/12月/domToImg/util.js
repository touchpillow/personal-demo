/**
 *将donm转换成图片并下载到本地
 *
 * @param {HTMLElement} target
 * @param {string} name
 */
function downloadDomToImg(params, name) {
  const src = getImgByDom(params);
  const aEle = window.document.createElement("a");
  aEle.style.display = "none";
  aEle.download = name;
  const img = new Image();
  img.src = src;
  img.onload = () => {
    aEle.href = src;
    window.document.body.appendChild(aEle);
    aEle.click();
    window.document.body.removeChild(aEle);
  };
}

/**
 *获取dom对应图片的base64地址
 *
 * @param {Object} params
 * @returns 图片的base64地址
 */
function getImgByDom(params) {
  const {
    target,
    filterSelector,
    imgSelector,
    canvasSelector,
    styleStr,
    specialHandle,
  } = params;
  //克隆一份dom节点
  const cloneDom = target.cloneNode(true);
  cloneDom.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
  const width = target.offsetWidth;
  const height = target.offsetHeight;

  //处理要隐藏的元素
  handleFilterDom(filterSelector, cloneDom);

  //处理图片
  handleImgDom(imgSelector, target, cloneDom);

  //处理canvas
  handleCanvasDom(canvasSelector, target, cloneDom);

  //其他处理
  handleCloneDom(specialHandle, cloneDom);

  //转成base64位地址
  const xmlContent = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"
  width="${width}" height="${height}"><foreignObject x="0" y="0" width="100%" height="100%">
  ${new XMLSerializer().serializeToString(cloneDom)}${styleStr}
    </foreignObject></svg>`;

  //处理部分特殊字符
  return xmlContent.replace(/\n/g, "").replace(/\t/g, "").replace(/#/g, "%23");
}

/**
 * 处理img元素
 * @param {string} imgSelector img元素的选择器
 * @param {HTMLElement} target 源dom
 * @param {HTMLElement} cloneDom clone出来的dom
 */
function handleImgDom(imgSelector, target, cloneDom) {
  if (!imgSelector) return;
  const imgList = cloneDom.querySelectorAll(imgSelector);
  const realImgList = target.querySelectorAll(imgSelector);
  for (let i = 0, l = imgList.length; i < l; i++) {
    imgList[i].src = getBse64ByImg(realImgList[i]);
  }
}

/**
 *获取img元素的bse64地址
 * @param {HTMLElement} imgEle img元素
 */
function getBse64ByImg(imgEle) {
  const canvas = window.document.createElement("canvas");
  canvas.width = imgEle.width;
  canvas.height = imgEle.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imgEle, 0, 0);
  return canvas.toDataURL();
}

/**
 *  处理canvas元素
 * @param {string} canvasSelector 注意：这里的canvasSelector是canvas元素父元素的选择器
 * @param {HTMLElement} target 源dom
 * @param {HTMLElement} cloneDom clone出来的dom
 */
function handleCanvasDom(canvasSelector, target, cloneDom) {
  if (!canvasSelector) return;
  const canvasBoxList = target.querySelectorAll(canvasSelector);
  const cloneCanvasBoxList = cloneDom.querySelectorAll(canvasSelector);
  for (let i = 0, l = canvasBoxList.length; i < l; i++) {
    const currentCanvas = canvasBoxList[i].querySelector("canvas");
    const src = currentCanvas.toDataURL();

    //这里用style.width而不是width是因为canvas实际占据的宽高是style里面的属性，坐标计算才是本身的属性
    const width = Number.parseInt(currentCanvas.style.width);
    const height = Number.parseInt(currentCanvas.style.height);
    cloneCanvasBoxList[
      i
    ].innerHTML = `<img alt="" src="${src}" width="${width}" height="${height}" />`;
  }
}

/**
 *处理要隐藏的元素
 * @param {string} filterSelector 需要隐藏的元素的选择器
 * @param {HTMLElement} cloneDom clone出来的dom
 */
function handleFilterDom(filterSelector, cloneDom) {
  if (!filterSelector) return;
  const filterDomList = cloneDom.querySelectorAll(filterSelector);
  [...filterDomList].forEach((item) => (item.style.display = "none"));
}

/**
 *
 *对节点的特殊处理
 * @param {Function} specialHandle 处理函数
 * @param {HTMLElement} cloneDom clone出来的dom
 */
function handleCloneDom(specialHandle, cloneDom) {
  if (!specialHandle) return;
  specialHandle(cloneDom);
}
