var inputInfo = document.getElementById('task');
var btn = document.getElementById('btn');
var detail = document.getElementById('666');
var deleteBtns = detail.getElementsByClassName('delete');
var ckboxes = detail.getElementsByClassName('checkbox');
var clr = document.getElementById('clear');
//声明添加信息函数
function addLitoUl(obj){
    console.log(detail.innerHTML);
    if (obj.value!=''){
    detail.innerHTML += '<ul>' + '<li>'+ '<button class= \"delete\">×</button>' + '<input class=\"checkbox\" type=\"checkbox\" name=\"check\" />' + obj.value  + '</li>' + '<ul>';}
    obj.value = '';
}

//声明删除信息函数
function deleteUL(obj){
     obj.parentNode.parentNode.remove();

}

//给button绑定添加信息点击事件
btn.onclick = function(){
    addLitoUl(inputInfo);
    //给每个 × span绑定删除点击事件
    for(var i=0; i<deleteBtns.length; i++){
        deleteBtns[i].onclick = function(){
            deleteUL(this);
        };
        ckboxes[i].onclick = function(){
            if (this.checked)
            {this.parentNode.style.color = "red";this.parentNode.style.textDecoration = "line-through";}
            else
            {this.parentNode.style.color = "black";this.parentNode.style.textDecoration = "";}
            //console.log(this.parentNode.parentNode.innerHTML);
        };
    }
}
function bbb(){
    var ptag_ids = new Array(); //定义一个数组存储id
    // 循环获取选中的checkbox
    $("input:checkbox:checked").each(function() {
        deleteUL(this);
    //ptag_ids.push($(this).val()); // 把值push进入数组里面
    });
    console.info(ptag_ids);
    
    /*var boxes = document.getElementsByName("check");
    console.info(boxes);
    for(var i=0;i<boxes.length;i++)
    {deleteUL(boxes[i]);i--;}*/
}