const choice=['rock','paper','scissiors'];
function getComputerChoice(){
    return choice[Math.floor(Math.random() * 3)];
}

const playerSelection = prompt('enter your choice:');
const computerSelection = getComputerChoice();

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

playRound(playerSelection,computerSelection);


