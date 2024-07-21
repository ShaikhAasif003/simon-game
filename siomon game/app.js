let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"]
let started = false;
let level = 0;

let h3 = document.querySelector("h3")
document.addEventListener("keypress",function(){
   if(started == false){
    console.log("Game is started")
    started = true;

    levelUp();
   }
})
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function (){
        btn.classList.remove("flash")
    },250)
}
function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function (){
        btn.classList.remove("userflash")
    },250)
}

function levelUp(){
    userSeq = [];
    level++;
   h3.innerText = `Level ${level}`;

   let randInd = Math.floor(Math.random() * 3)
   let randColor = btns[randInd];
   let randBtn = document.querySelector(`.${randColor}`)
   gameSeq.push(randColor)
   console.log(gameSeq)
   gameFlash(randBtn);

   let highestScore = 0; 
    for(let i=0; i<=highestScore; i++){
      if(level>highestScore){
          highestScore = level;
      }
    }
    console.log(level)
  
}
function checkans(idx){
 
 if(userSeq[idx] === gameSeq[idx]){
   if(userSeq.length == gameSeq.length){
    setTimeout(levelUp,1000)
   }
 }else{
    h3.innerHTML = `Game over ! your score was <b>${level}</b> <br>press any key to restart the game`;
    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"
    }, 150)
    reset();
 }

} 

function btnPress(){
   let btn = this;
   userFlash(btn)
  userColor = btn.getAttribute("id")
  userSeq.push(userColor)
  checkans(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}