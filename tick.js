console.log("Welcome to tick tack toe");
let music = new Audio("music.mp3");
let turnSound = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let isGameOver = false;

let turn = "X";

// function to change turn
const changeTurn = ()=>{
    return turn === "X" ? "O":"X";
}

// function to check for a win
const checkWin =()=>{
    let boxtext =document.querySelectorAll(".boxtext");
    let wins = [
        [0,1,2,2,5,0],
        [3,4,5,2,15,0],
        [6,7,8,2,25,0],
        [0,3,6,-7.5,15,90],
        [1,4,7,2.5,15,90],
        [2,5,8,12.5,15,90],
        [0,4,8,2,14,45],
        [2,4,6,2,15,-45]
    ]
    let tie = false;
    let count=0;
    wins.forEach(e=> {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
            gameOver.play();
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isGameOver=true;
            // boxtext[e[0]].style.backgroundColor ="red";
            document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw)rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="25vw";
        }
        
        if((boxtext[e[0]].innerText !== "") && (boxtext[e[1]].innerText !== "") && (boxtext[e[2]].innerText !== "")){
            count++;
            if(count === 8 && isGameOver){
                // isGameOver=true;
                gameOver.play();
                document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "200px";
                document.querySelector(".info").innerText = "Game tied";

            }
        }
    })
}

// music.play();
// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            if(!isGameOver){
            document.querySelector(".info").innerHTML = "Turn for "+ turn;
            }
            if(gameOver){
                reset.addEventListener('click',()=>{
                let boxTexts = document.querySelectorAll(".boxtext");
                Array.from(boxTexts).forEach(e=>{
                    e.innerText="";
                })


                turn="X";
                document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "0px";
                document.querySelector(".info").innerHTML = "Turn for "+ turn;
                document.querySelector(".line").style.width="0px"
                }

                )
            }
        }
    })
})
