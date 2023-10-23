document.addEventListener("keydown",(e)=>{
if(e.key=="ArrowLeft"){
    move_left_up();
}
if(e.key=="ArrowRight"){
    move_left_down();
}
if(e.key=="ArrowUp"){
    move_right_up();
}
if(e.key=="ArrowDown"){
    move_right_down();
}
});
var left_top=8;
function move_left_down(){
    element=document.querySelector(".left_bar");
    element2=document.querySelector("#last_separation");
    var rect = element.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();
    if(rect.bottom<rect2.bottom){
    left_top+=2;
    }
    document.querySelector(".left_bar").style.top=`${left_top}vh`;
}
function move_left_up(){
    if(left_top>8){
    left_top-=2;
    }
    document.querySelector(".left_bar").style.top=`${left_top}vh`;
}
var right_top=8;
function move_right_down(){
    console.log("hello from lakshay");
    element=document.querySelector(".right_bar");
    element2=document.querySelector("#last_separation");
    var rect = element.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();
    if(rect.bottom<rect2.bottom){
    right_top+=2;
    }
    document.querySelector(".right_bar").style.top=`${right_top}vh`;
}
function move_right_up(){
    console.log("hello from latu pardhan")
    if(right_top>8){
    right_top-=2;
    }
    document.querySelector(".right_bar").style.top=`${right_top}vh`;
}
const myInterval=setInterval(move_ball,30);
var x=23;
var y=20;
var x1=1;
var y1=1;
function move_ball(){
    element=document.querySelector(".ball");
    check_boundary();
    x-=x1;
    y-=y1;
    element.style.left=`${x}vh`;
    element.style.top=`${y}vh`;
}
function check_boundary(){
    var num=((Math.random())*0.2+0.9);
    console.log(num);
    var bottom=document.querySelector(".bottom_boundary");
    var left=document.querySelector(".left_boundary");
    var right=document.querySelector(".right_boundary");
    var rect1=document.querySelector(".top_boundary").getBoundingClientRect();
    var rect2=bottom.getBoundingClientRect();
    var rect3=left.getBoundingClientRect();
    var rect4=right.getBoundingClientRect();
    var rect5=document.querySelector(".left_bar").getBoundingClientRect();
    var rect6=document.querySelector(".right_bar").getBoundingClientRect();

    var element=document.querySelector(".ball");
    var rect=element.getBoundingClientRect();
    if(rect.bottom>rect2.top){
        y1*=(-1*num);
    }
    if(rect.top<rect1.bottom){
        y1*=(-1*num);
    }
    if(rect.left<rect5.right&&rect.bottom<=rect5.bottom&&rect.top>=rect5.top){
        x1*=(-1*num);
    }
    if(rect.right>rect6.left&&rect.bottom<=rect6.bottom&&rect.top>=rect6.top){
        x1*=(-1*num);
    }
    if(rect.left<rect3.right){
        score1++;
        x1*=-1;
        x=100;
        y=20;
        x1=1;
        y1=1;
        var element=document.querySelector("#score2");
        element.innerHTML=score1;
        if(score1>=10){
        gameover(2);
        }
    }
    if(rect.right>rect4.left){
        score2++;
        if(score2===10){
            gameover(1);
            }
        x1*=-1;
        x=100;
        y=20;
        x1=1;
        y1=1;
        var element=document.querySelector("#score1");
        element.innerHTML=score2;
    }
}
function gameover(a){
    clearInterval(myInterval);
    score1=0;
    score2=0;
    var element=document.querySelector(".container");
    element.innerHTML=`<h1>GAME OVER</H1><h2>PLAYER ${a} WON</h2><p>CLICK ANYWHERE TO RESTART</p>`;
    element.classList.add("flex");
    element.addEventListener("click",()=>{
        location.reload();
    });
}
var score1=0;
var score2=0;