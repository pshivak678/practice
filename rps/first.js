const choice=['rock','paper','scissiors'];
function getComputerChoice(){
    return choice[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection) {
        alert('ITS TIE GAME!');
    }

    if (playerSelection==="rock") {
        if(computerSelection=='paper') alert("COMPUTER WON THE GAME!");
        if(computerSelection=='scissiors') alert("PLAYER WON THE GAME!");
    }

    if (playerSelection==="paper") {
        if(computerSelection=='rock') alert("PLAYER WON THE GAME!");
        if(computerSelection=='scissiors') alert("COMPUTER WON THE GAME!");
    }

    if (playerSelection==="scissiors") {
        if(computerSelection=='paper') alert("PLAYER WON THE GAME!");
        if(computerSelection=='rock') alert("COMPUTER WON THE GAME!");
    }
}

const countPlayer = document.getElementById("score-player");
const countComputer = document.getElementById("score-player");


const x = document.getElementById("rock");

x.addEventListener("click",onRockClick);
function onRockClick(){
    playerSelection = "rock";
    playRound(playerSelection,getComputerChoice());
}

const y = document.getElementById("paper");
y.addEventListener("click",onPaperClick);
function onPaperClick(){
    playerSelection = "paper";
    playRound(playerSelection,getComputerChoice());
}

const z = document.getElementById("scissiors");
z.addEventListener("click",onScissiorsClick);
function onScissiorsClick(){
    playerSelection = "scissiors";
    playRound(playerSelection,getComputerChoice());
}






