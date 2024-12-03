function help(){
console.log("click");
helper = 1;
looping();

}
function help2(){
console.log("change");
document.getElementById("texting").style.backgroundColor = "red";

}

let helper = 1;

function looping() {if (helper == 1) {setTimeout(function () {document.getElementById("texting").textContent = "H";helper++;looping();}, 100);} else if (helper == 2) {setTimeout(function () {document.getElementById("texting").textContent = "He";helper++;looping();}, 100);} else if (helper == 3) {setTimeout(function () {document.getElementById("texting").textContent = "Hel";helper++;looping();}, 100);} else if (helper == 4) {setTimeout(function () {document.getElementById("texting").textContent = "Hell";helper++;looping();}, 100);} else if (helper == 5) {setTimeout(function () {document.getElementById("texting").textContent = "Hello";helper++;looping();}, 100);} else if (helper == 6) {setTimeout(function () {document.getElementById("texting").textContent = "Hello W";helper++;looping();}, 100);} else if (helper == 7) {setTimeout(function () {document.getElementById("texting").textContent = "Hello Wo";helper++;looping();}, 100);} else if (helper == 8) {setTimeout(function () {document.getElementById("texting").textContent = "Hello Wor";helper++;looping();}, 100);} else if (helper == 9) {setTimeout(function () {document.getElementById("texting").textContent = "Hello Worl";helper++;looping();}, 100);} else if (helper == 10) {setTimeout(function () {document.getElementById("texting").textContent = "Hello World";helper++;}, 100);}}

function m1(){
    document.getElementById("uwufufu").style.backgroundColor = "red";
}
function m2(){
    document.getElementById("uwufufu").style.backgroundColor = "white";
}
function m3(){
    document.getElementById("NgoNgo").style.backgroundColor = "red";
}
function m4(){
    document.getElementById("NgoNgo").style.backgroundColor = "white";
}
var formName = document.getElementById("NgoNgo").value;

function vali(){
    formName = document.getElementById("NgoNgo").value;
    if(formName ==""){
        window.alert("Nope");
        return false;
    }
    else{
        return true;
    }
}