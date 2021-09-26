let ds = document.querySelector("#ds");
let style = document.querySelector("#style");
let string2 = "";
let string = `/*你好，是前端新人小华*
*接下来我将展示以下我的前端功底
*首先准备一个div*/
 #div1{
    width:200px;
    height:200px;
    border:1px solid red;
 }
 /* 接下来把它变成太极图
 *首先把div变成一个圆*/
 #div1{
     border-radius:50%;
     box-shadow:0 0 3px rgba(0,0,0,0.5);
     border:none;
 }
 /*把圆变成左白右黑*/
 #div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
 }
 /*加两个神秘的小球*/
 #div1::before{
     content:'';
     width:100px;
     height:100px;
     border-radius:50%;
     left:50%;
     transform:translateX(-50%);
     background: rgb(32,32,32);
     background: radial-gradient(circle, rgba(32,32,32,1) 20%,rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
 }
#div1::after{
     content:'';
     width:100px;
     height:100px;
     border-radius:50%;
     left:50%;
     transform:translateX(-50%);
     background: rgb(255,255,255);
     background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
 }


`


let n = -1;
let step = () => {

    ds.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999); //pc端自动向下滚动
    ds.scrollTo(0, 99999); //手机端自动向下滚动
    setTimeout(() => {
        if (n < string.length - 1) {
            n += 1;
            string2 += string[n];
            step()
        } //字符总体长度判断

        if (string[n] === "\n") {
            string2 += "<br>"
        }
        if (string[n] === " ") {
            string2 += "&nbsp";
        }



    }, 30);






}




step();