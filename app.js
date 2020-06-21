var scores, roundScore, activePlayer, gamePlaying;

init();

var prevDice;

document.querySelector(".btn-roll").addEventListener("click", function(){
  if(gamePlaying){
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceDOM1 = document.getElementById("dice-1");
    var diceDOM2 = document.getElementById("dice-2");
    diceDOM1.style.display = "block";
    diceDOM2.style.display = "block";
    diceDOM1.src = "dice-" +dice1+ ".png";
    diceDOM2.src = "dice-" +dice2+ ".png";

    if (dice1 !== 1 && dice2 !== 1) {

      roundScore += dice1 + dice2;
      document.getElementById("current-"+activePlayer).textContent = roundScore;

    } else {

      nextPlayer();

    }
    /*if (dice === 6 && prevDice === 6){
      scores[activePlayer] = 0;
      document.querySelector("#score-"+activePlayer).textContent = "0";
      nextPlayer();
    } else if (dice !== 1) {

      roundScore += dice;
      document.getElementById("current-"+activePlayer).textContent = roundScore;

    } else {

      nextPlayer();

    }
    prevDice = dice;*/
  }
});

document.querySelector(".btn-hold").addEventListener("click",function(){
  if(gamePlaying){
    scores[activePlayer] += roundScore;
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

    var userFinalScore = document.querySelector(".final-score").value;
    var winningScore;

    if(userFinalScore){
      winningScore = userFinalScore;
    } else {
      winningScore = 100;
    }

    if(scores[activePlayer] >= winningScore){

      document.querySelector("#name-"+activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-"+ activePlayer +"-panel").classList.add("winner");
      document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");
      gamePlaying = false;

    } else {

      nextPlayer();

    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

document.querySelector(".btn-rules").addEventListener("click", function(){
  document.getElementById("rulesModal").classList.add("show-content");
});

document.querySelector("#closeModal").addEventListener("click", function(){
  document.getElementById("rulesModal").classList.remove("show-content");
});

window.addEventListener("click", function(event){
  if(event.target == document.getElementById("rulesModal")){
    document.getElementById("rulesModal").classList.remove("show-content");
  }
});

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}

function init(){
  scores = [ 0, 0 ];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
