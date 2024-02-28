var varlight = 3;
var varmaxLight = 3;

var turn = 1;

var selectedcard = 0;
var cardinhand=[0,0,0,0,0,0,0,0,0];

var deckOcard=["None","Incridible Punch","Shield Up","Executed","Rome Run","Heavy Strike","Destructive Strike","Prowing","Repeatative Slash"];

window.onload = function () {
    addcard();
    addcard();
    addcard();
    addcard();
  refreshLight();
};

function endTurn() {









  turn++;
  selectedcard = 0;
  if (turn == 3) {
    varmaxLight++;
    turn = 0;
  }
  if (varlight < varmaxLight) {
    varlight++;
  }
  addcard();

  refreshLight();
}

function refreshLight() {
  document.getElementById("yourLight").innerText = varlight;
  document.getElementById("maxLight").innerText = varmaxLight;
}

function clickCard(cardslot){
    selectedcard = cardslot-1;
}

function addcard(){
    var cardslotid = 'card';
    var cardslotidNum = 0;
    for(i=0;i<9;i++){
        if(cardinhand[i]==0){
            cardinhand[i] = Math.floor(Math.random() * (7)+1);
            cardslotid+=(i+1);
            cardslotidNum = i;
            break;
        }
    }
    
document.getElementById(cardslotid).innerText = deckOcard[cardinhand[cardslotidNum]];
}