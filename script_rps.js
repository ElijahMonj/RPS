alert("Playing RPS!!!");
for (i=0;i<5;i++){
    var playerScore=0;
    var computerScore=0;
function computerPlay(){
    const rps = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * rps.length);
    
    return rps[random];
}
function playerRock(){
    document.getElementById("myInput").value = "Rock";
}
function playerPaper(){
    document.getElementById("myInput").value = "Paper";
}
function playerScissors(){
    document.getElementById("myInput").value = "Scissors";
}

function play(playerSelection, computerSelection){
    
    if (playerSelection==computerSelection){
        document.getElementById("result").innerHTML ="Draw!!!";
    }
    //draw
    if ((playerSelection=="Paper") && (computerSelection=="Rock")){
        document.getElementById("result").innerHTML ="Player Wins! Paper beats Rock.";
    }
    if ((playerSelection=="Rock") && (computerSelection=="Paper")){
        document.getElementById("result").innerHTML ="Computer Wins! Paper beats Rock.";
    }
    //rock vs paper
    if ((playerSelection=="Rock") && (computerSelection=="Scissors")){
        document.getElementById("result").innerHTML ="Player Wins! Rock beats Scissors.";
    }
    if ((playerSelection=="Scissors") && (computerSelection=="Rock")){
        document.getElementById("result").innerHTML ="Computer Wins! Rock beats Scissors.";
    }
    //rock vs Scissors
    if ((playerSelection=="Paper") && (computerSelection=="Scissors")){
        document.getElementById("result").innerHTML ="Computer Wins! Scissors beats Paper.";
    }
    if ((playerSelection=="Scissors") && (computerSelection=="Paper")){      
        document.getElementById("result").innerHTML = "Player Wins! Rock beats Scissors.";
    }
    else{
        
    }
   
}

function go(){
    let player=document.getElementById("myInput").value;
    let computer=computerPlay();
    console.log("player is "+player);
    
    play(player,computer);
    document.getElementById("computer").innerHTML = "Computer selected: "+computer;
    console.log("Computer is "+computer);
}



}