//---------------- PLAYER1 -----------------//
var P1 = document.querySelector("#P1");
var score1 = document.querySelector("#Score1");
var TotalScr1 = document.querySelector("#TotalScore1");
var role1 = document.querySelector("#role1");

//---------------- PLAYER2 -----------------//
var P2 = document.querySelector("#P2");
var score2 = document.querySelector("#Score2");
var TotalScr2 = document.querySelector("#TotalScore2");
var role2 = document.querySelector("#role2");



//---------------- DICE --------------------//
var dice = document.querySelector("#dice");

//----------------- Stuff ------------------//
const SCORE_MAX=100;

Start();

//----------------fonctions ----------------//

function SwitchP () {

  if(playing == P1){
     somme1 +=somme;
    TotalScr1.innerHTML =somme1;
    somme=0;
    score1.innerHTML = 0;

    playing=P2;
    P2.classList.add("playing");
    P1.classList.remove("playing");
  }
  else{
    somme2 += somme;
    TotalScr2.innerHTML =somme2;
    somme=0;
score2.innerHTML = 0;
    playing=P1;
    P1.classList.add("playing");
    P2.classList.remove("playing");
  }

  if( (somme1 >= SCORE_MAX)){
       alert("THE WINNER IS PLAYER 1")
       Start();
  }
  if( (somme2 >= SCORE_MAX)){
    alert("THE WINNER IS PLAYER 2")
    Start();

}
}


function Lancer(){
  round++;
  let rand = Math.floor(Math.random() * 6)+1;
  dice.setAttribute('src' , 'img/'+rand+'.png')

  if( rand ==1){
           if(playing == P1 && round!=0){
             alert(" Player 1 : Dice 1")
             TotalScr1.innerHTML =0;
             score1.innerHTML = 0;
             playing =P2;
             somme1 = somme =0;
             P2.classList.add("playing");
             P1.classList.remove("playing");
             round=0;
           }
           if(playing == P2 && round!=0){
            
            alert(" Player 2 : Dice 1")
            TotalScr2.innerHTML =0;
            score2.innerHTML = 0;
            playing = P1;
            somme2 = somme =0;
            P1.classList.add("playing");
            P2.classList.remove("playing");
            round=0;
          }
  }

  else{
    if(playing == P1){
          somme += rand;
          score1.innerHTML = somme;
    }
       else{
           somme +=rand;
           score2.innerHTML = somme;
    }
  }
}

function Start(){
   somme =0;
   somme1 =0;
   somme2 = 0;
   round = 0 ;
   playing = P1;
  TotalScr1.innerHTML =0;
  score1.innerHTML = 0;
  TotalScr2.innerHTML =0;
  score2.innerHTML = 0;
  playing.classList.add("playing");
  P2.classList.remove("playing");
}


