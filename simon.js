
let gameseq=[];
let userseq=[];

let level =0;
let started = false;
let h2 = document.querySelector("h2");
let colors = ["yellow","red","purple","green"];

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("game is stated");
        started=true;
    }
    levelup();
});


function levelup(){
    userseq=[]; 
level++;
h2.innerText=`level ${level}`;

let randInd = Math.floor(Math.random()*3);
let randcolor = colors[randInd];
let randbtn= document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
gameflash(randbtn);
}

function gameflash(randbtn){
     randbtn.classList.add("flash");
     setTimeout(function(){
        randbtn.classList.remove("flash");
     },250);
}
function userflash(randbtn){
     randbtn.classList.add("user");
     setTimeout(function(){
        randbtn.classList.remove("user");
     },250);
}

function btnpress(){
   
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
   userseq.push(usercolor);
   checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click",btnpress);
}
hjgjgjgjghgghhhfhghffhfhfh
function checkans(inx){
   

    if (userseq[inx] === gameseq[inx] ){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `game over !  score was ${level*10} <br>  prees any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function reset(){
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}