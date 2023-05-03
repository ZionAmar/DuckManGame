//---------------------------------------------תזוזה לדשא----------------------------------------------
let grassSmall = document.getElementById("grass_spitz");           //קביעת שם לעלה הקטן
let grassBig = document.getElementById("grass_spitz_BIG");         //קביעת שם לעלה הגדול
grassSmall.style.height='10px';                                    //קביעת גובה ראשוני לקטן
grassBig.style.height='20px';                                      //קביעת גובה ראשוני לגדול
let high = setInterval(f,300);                                     //הפעלת הפונקציה בתזמון
let low = setInterval(g,600);                                      //הפעלת הפונקציה עם הפעולה ההפוכה בתזמון כפול
let k = 10;
function f(){
    if(k = 10){
        k = 20;
}
grassSmall.style.height=`${k}px`;
grassBig.style.height=`${k-10}px`;
}
function g(){
    if(k = 20){
        k = 10;
}
grassSmall.style.height=`${k}px`;
grassBig.style.height=`${k+10}px`;
}
//----------------------------------------------------תזוזת עננים-------------------------------------------------
let bigCloud = document.getElementById("cloud");
let smallCloud = document.getElementById("cloud2");
let i = 0;
let j = 600;
setInterval(moveCloud,100); 
function moveCloud(){
    if(i<=1200){
        i += 10;
bigCloud.style.right=`${i}px`;
    }
    else{
        i =-250;
        bigCloud.style.right=`${i}px`;
    }
    if(j<=1200){
        j += 10;
smallCloud.style.right=`${j}px`;
    }
    else{
        j -=1450;
        smallCloud.style.right=`${j}px`;
    }
}
//-------------------------------------------------ניקוד--------------------------------------------------
let a = 0;

function score(){
a++;
document.getElementById("score").innerHTML= 'score : '+a;
}
//------------------------------------------------תזוזת שחקן-------------------------------------------------
window.onload = function(){
    evevntKey();
}
let t = 60;
const evevntKey = function (){
    document.addEventListener("keydown",function(e){
        if(e.key=="ArrowUp" && t<=370){
            document.getElementById("duck").style.bottom =`${t}px`;
            t+=10;
        }
        if(e.key=="ArrowDown" && t>=10){
            document.getElementById("duck").style.bottom =`${t}px`;
            t+=-10;
        }
    })

}
//---------------------------------------------------תשובות---------------------------------------------------
let gmp = 0;
let cnt = -1;
const answer = document.getElementsByClassName("answer");
setInterval(ansMove,40);
function ansMove(){
    if(cnt == -1){
        document.getElementById("q").innerHTML = '?????????? :A:????B:????C:????D:????';
    }
    if(cnt == 0){
        document.getElementById("q").innerHTML = '';
    }
    if(cnt == 4){
        cnt = -1;
        gmp = 0;
    }
    if(gmp > 1300){
        cnt ++;
        gmp = 0;
    }
    gmp +=  5;
    answer[cnt].style.right =`${gmp}px`;
}
//------------------------------------------------טיימר---------------------------------------------
setInterval(myTimer, 1000);
let time =0;
// function myTimer(){
//     time++;
//     document.getElementById("timer").innerHTML = time;
// }

function myTimer() {
    const d = new Date();
    var u = d.toLocaleTimeString();
    myVar = setTimeout(function myFunction(){
        document.getElementById("timer").innerHTML = d.toLocaleTimeString()-u;
    }, 1000);
  }
  