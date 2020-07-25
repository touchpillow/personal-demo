class pageFun {
    constructor({
        listStyle,
        imageWidth,
        imageHeight,
        imageName,
        imageFile,
        imageBgc,
        editContent,
        editImage,
        imageNameTip,
        addImage,
        addImageSureButton,
        imageContainer,
        delImageSureButton
    }) {
        //绑定常用dom
        this.listStyle = listStyle;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.imageName = imageName;
        this.imageFile = imageFile;
        this.imageBgc = imageBgc;
        this.editContent = editContent;
        this.editImage = editImage;
        this.imageNameTip = imageNameTip;
        this.addImage = addImage;
        this.addImageSureButton = addImageSureButton;
        this.imageContainer = imageContainer;
        this.delImageSureButton = delImageSureButton;
        // 选中的文件的index
        this.selectIndex = null;
        this.newImageEle = undefined;
        //排列样式与宽度的对应关系
        this.styleArr = {
            1: "100%",
            2: "50",
            3: "33.33%",
            4: "25%",
            5: "20%",
            6: "16.66%"
        };
        //保存内容区的属性
        this.contentStyle = {
            contentStyle: 3,
            imageWidth: 120,
            imageHeight: 80
        };
        //保存每张图片的属性
        this.imageStyle = [];
    }
    //初始化事件
    init() {
        this.destoryEvent();
        this.bindEvent();
    }
    //解绑事件
    destoryEvent() {

    }
    //绑定dom上的事件
    bindEvent() {
        //点击其他区域，取消选中状态
        window.addEventListener("click", this.clickPage.bind(this));
        //图片新增按钮的点击事件，显示图片编辑区
        this.addImage.addEventListener("click", this.addImageNum.bind(this));
        //点击页面其他部分，隐藏图片编辑区
        document.querySelector(".edit").addEventListener("click", this.clickPageArea.bind(this));
        //上传图片事件
        this.imageFile.addEventListener("change", this.selectFile.bind(this));
        //确定上传
        this.addImageSureButton.addEventListener("click", this.addImageSure.bind(this));
        //选中图片或者其他区域
        this.imageContainer.addEventListener("click", this.selectImageContent.bind(this));
        //更改图片的背景颜色
        this.imageBgc.addEventListener("change",this.editImageBgc.bind(this));
        this.imageBgc.addEventListener("input",this.formatImageBgc.bind(this));
        //更改图片排列格式
        this.listStyle.addEventListener("change",this.changeImageStyle.bind(this));
        //更改图片宽度
        this.imageWidth.addEventListener("change",this.editImageWidth.bind(this));
        //更改图片高度
        this.imageHeight.addEventListener("change",this.editImageHeight.bind(this));
    }
    clickPage(e) {
        //点击取消选中状态

        this.editImage.style.display = "none";
        this.editContent.style.display = "none";
    }
    clickPageArea(e) {
        //点击编辑区域时阻止事件冒泡
        e.stopPropagation();
    }
    addImageNum(e) {
        this.editImage.style.display = "block";
        this.editContent.style.display = "none";
        this.addImageSureButton.innerHTML = "确定上传";
        this.clearNewImageData();
        e.stopPropagation();
    }
    //选择文件
    selectFile(e) {
        let vm = this;
        let files = e.target.files;
        //files就是input框选中的文件，是一个数组，选中多少文件，数组就有多少个元素
        let redaer = new FileReader();
        //判断选中的文件数量
        if (files.length > 1) {
            alert("一次只能选一个文件")
            return
        }
        //判断选择的文件的类型
        if (!files[0].type.includes("image")) {
            alert("请选择图片文件")
            return
        }
        //读取路径
        redaer.onload = function () {
            //在reader的onload事件中，this指代当前的fileredaer对象，result就是图片路径
            vm.newImageEle = {
                src: this.result,
                name: files[0].name
            };
            vm.imageName.innerHTML = files[0].name;
        }
        redaer.readAsDataURL(files[0]);
        
    }
    //确定增加图片事件
    addImageSure(e) {
        let vm = this;
        if(vm.imageStyle.length>=30){
            alert("最多展示30张图片")
            return
        }
        //判断是否上传
        if (e.target.innerHTML == "确定上传") {
            if (!this.newImageEle || !this.newImageEle.src) {
                alert("请选择一张图片")
                return 
            } else {
                //缓存图片然后加入到content区域
                let img = new Image();
                img.src = vm.newImageEle.src;
                img.onload = function () {
                    //新增li元素
                    let newLi = document.createElement("li");
                    let newImg = document.createElement("img");
                    //加载图片之后，将路径赋值给实际的img的src属性
                    newImg.src = img.src;
                    newImg.style.width = `${vm.imageWidth.value}px`;
                    newImg.style.height = `${vm.imageHeight.value}px`;
                    newImg.style["background-color"] = `#${vm.imageBgc.value}`;
                    newImg.dataIndex = vm.imageStyle.length;
                    // newImg.addEventListener("click", vm.selectImageContent.bind(vm));
                    newImg.src = img.src;
                    newLi.appendChild(newImg);
                    vm.imageContainer.appendChild(newLi);
                    vm.newImageEle.bgColor = vm.imageBgc.value;
                    //更新imageStyle数据
                    vm.imageStyle.push(vm.newImageEle);
                    vm.clearNewImageData();
                }
            }
        } else if (e.target.innerHTML == "确定删除") {
            //删除选中的图片的数据
            vm.imageStyle.splice(vm.selectIndex, 1);
            //删除选中的图片的dom
            let selectDom = vm.imageContainer.children[vm.selectIndex];
            vm.imageContainer.removeChild(selectDom);

            vm.clearNewImageData();
            this.editImage.style.display = "none";
        }

    }
    //newImageEle的数据以及编辑按钮的value
    clearNewImageData() {
        this.newImageEle = undefined;
        this.imageFile.value = "";
        this.imageBgc.value = "ffffff";
        this.imageName.innerHTML = "图片名称";
    }
    //选中图片
    selectImageContent(e) {
        e.stopPropagation();
        let vm=this;
        //选中了图片
        [...(vm.imageContainer.children)].map(item=>{
            item.children[0].classList.remove("select");
        });
        if (e.target.tagName == "IMG") {  
            e.target.classList.add("select");
            vm.editImage.style.display = "block";
            vm.editContent.style.display = "none";
            vm.selectIndex = e.target.dataIndex;
            let currentImageInfo = vm.imageStyle[vm.selectIndex];
            vm.imageName.innerHTML = currentImageInfo.name;
            vm.imageBgc.value = currentImageInfo.bgColor;
            vm.addImageSureButton.innerHTML = "确定删除";
        }else{
            //选中了空白区域
            vm.editContent.style.display = "block";
            vm.editImage.style.display = "none";
        }
    }
    formatImageBgc(e){
        //输入颜色时，十六进制只能输入a-f,A-F,0-9的值，所以需要做校验
        let color=e.target.value;
        let newVal=[...color].filter(item=>{
            return (/[a-f]/).test(item)||(/[A-F]/).test(item)||(/[0-9]/).test(item);
        }).join("");
        e.target.value=newVal;
    }
    editImageBgc(e){
        //十六进制颜色值为三位或者六位，需要做判断
        if([3,6].includes(e.target.value.length)){
            this.imageContainer.children[this.selectIndex].children[0].style['background-color']=`#${e.target.value}`;
            this.imageStyle[this.selectIndex].bgColor=`${e.target.value}`;
        }else{
            alert("请输入正确的十六进制颜色值")
        }
    }
    changeImageStyle(e){
        let vm=this;
        [...vm.imageContainer.classList].forEach((item)=>{
            if(item.includes("col")){
                vm.imageContainer.classList.remove(item);
                return
            }
        });
        vm.imageContainer.classList.add(`col-${e.target.value}`);
    }
    editImageWidth(e){
        let vm=this;
        [...vm.imageContainer.children].forEach(item=>{
            item.children[0].style.width=`${e.target.value}px`;
        });
    }
    editImageHeight(e){
        let vm=this;
        [...vm.imageContainer.children].forEach(item=>{
            item.children[0].style.height=`${e.target.value}px`;
        });
    }
}
window.onload = function () {
    let listStyle = document.querySelector("#listStyle");
    let imageWidth = document.querySelector("#imageWidth");
    let imageHeight = document.querySelector("#imageHeight");
    let imageName = document.querySelector("#imageName");
    let imageFile = document.querySelector("#imageFile");
    let imageBgc = document.querySelector("#imageBgc");
    let editContent = document.querySelector(".edit-content");
    let editImage = document.querySelector(".edit-image");
    let imageNameTip = document.querySelector(".image-name");
    let addImage = document.querySelector("#addImage");
    let imageContainer = document.querySelector(".image-list");
    let addImageSureButton = document.querySelector(".edit-image-button").querySelector("button");
    let delImageSureButton = document.querySelector(".edit-image-button").querySelectorAll("button")[1];
    let pageFunction = new pageFun({
        addImage,
        listStyle,
        imageWidth,
        imageHeight,
        imageName,
        imageFile,
        imageBgc,
        editContent,
        editImage,
        imageNameTip,
        addImageSureButton,
        imageContainer,
        delImageSureButton
    }).init();

}