var region = document.querySelector("#region-radio-wrapper"),
product = document.querySelector("#product-radio-wrapper");
table(region);
table(product);
function table(regpro) {
var childrens = regpro.children;
childrens[3].onclick = function () {
    checkAll(childrens);
    getNewForm(getSelected());
};

for (var i = 0; i < childrens.length - 1; i++) {
    childrens[i].onclick = function () {
        var count = 0;
        for (var j = 0; j < childrens.length - 1; j++) {
            if (childrens[j].checked) {
                count++;
            }
        }
        if (count == childrens.length - 1) {
            checkAll(childrens);
        } else {
            setFalse(childrens);
        }
        getNewForm(getSelected());
    }
}
}
// 点击全选时，如果单个选项中只要有一个不是被选上的状态，则进行全选操作
function checkAll(child) {
for (var i = 0; i < child.length; i++) {
    child[i].checked = true;
}
}
// 其中一个取消勾选时，全选按钮取消勾选
function setFalse(child) {
child[3].checked = false;
}