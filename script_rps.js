//for (i=0;i<10;i++){
function computerPlay(){
    const rps = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * rps.length);
    
    return rps[random];
}
function playerRock(){
    document.getElementById("myInput").innerHTML = "Rock";
}
function playerPaper(){
    document.getElementById("myInput").innerHTML = "Paper";
}
function playerScissors(){
    document.getElementById("myInput").innerHTML = "Scissors";
}

function play(playerSelection, computerSelection){
    document.getElementById("computer").innerHTML = "Computer selected: "+computer;
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
        alert("You havent selected anything!");
    }
   
}
let player;

let computer=computerPlay();

function go(){
    player=document.getElementById("myInput").value;
    console.log("player is "+player);
    let playerInput=player;
    
    console.log(playerInput);
    play(player,computer);
    
    console.log(computer);
}



//}