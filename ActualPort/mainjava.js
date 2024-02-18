function aclicked() {
  everyoneoff();
  document.getElementById("buta").style.transform = "translateY(0%)";
  document.getElementById("containholderA").style.opacity = 1;
  document.getElementById("containholderA").style.zIndex = 3;
}
function bclicked() {
  everyoneoff();
  document.getElementById("butb").style.transform = "translateY(0%)";
  document.getElementById("containholderB").style.opacity = 1;
  document.getElementById("containholderB").style.zIndex = 3;
}
function cclicked() {
  everyoneoff();
  document.getElementById("butc").style.transform = "translateY(0%)";
  document.getElementById("containholderC").style.opacity = 1;
  document.getElementById("containholderC").style.zIndex = 3;
}
function dclicked() {
  everyoneoff();
  document.getElementById("butd").style.transform = "translateY(0%)";
  document.getElementById("containholderD").style.opacity = 1;
  document.getElementById("containholderD").style.zIndex = 3;
  everyoneup();
}

function everyoneoff() {
  document.getElementById("buta").style.transform = "translateY(50%)";
  document.getElementById("butb").style.transform = "translateY(50%)";
  document.getElementById("butc").style.transform = "translateY(50%)";
  document.getElementById("butd").style.transform = "translateY(50%)";

  document.getElementById("containholderA").style.opacity = 0;
  document.getElementById("containholderB").style.opacity = 0;
  document.getElementById("containholderC").style.opacity = 0;
  document.getElementById("containholderD").style.opacity = 0;

  document.getElementById("containholderA").style.zIndex = 0;
  document.getElementById("containholderB").style.zIndex = 0;
  document.getElementById("containholderC").style.zIndex = 0;
  document.getElementById("containholderD").style.zIndex = 0;
}

function dayaclicked() {
  everyoneup();
  changesche(
    "8:30am - 10:30am",
    "Data Science",
    "LC315",
    "1:00pm - 5:00pm",
    "Web Programming",
    "LC207"
  );
  document.getElementById("daya").style.transform = "translateY(50%)";
}

function daybclicked() {
  everyoneup();
  changesche(
    "10:00am - 12:00pm",
    "Data Science",
    "Computer Lab 3",
    "3:00pm - 5:00pm",
    "Speak Tech",
    "LC310"
  );
  document.getElementById("dayb").style.transform = "translateY(50%)";
}

function daycclicked() {
  everyoneup();
  changesche(
    "8:30am - 10:30am",
    "Life Skill 21",
    "LC407",
    "1:00pm - 4:00pm",
    "Business Int",
    "LC204"
  );

  document.getElementById("dayc").style.transform = "translateY(50%)";
}

function daydclicked() {
  everyoneup();
  changesche(
    "8:30am - 11:30am",
    "System Analy",
    "LC316",
    "3:00pm - 5:00pm",
    "Idea to Entrepren",
    "LC306"
  );

  document.getElementById("dayd").style.transform = "translateY(50%)";
}

function dayeclicked() {
  everyoneup();
  changesche(
    "8:30am - 10:30am",
    "Effective Eng",
    "LC315",
    "1:00pm - 3:00pm",
    "Eng in workplace",
    "LC209"
  );

  document.getElementById("daye").style.transform = "translateY(50%)";
}

function everyoneup() {
  changesche("-", "-", "-", "-", "-", "-");
  document.getElementById("daya").style.transform = "translateY(0%)";
  document.getElementById("dayb").style.transform = "translateY(0%)";
  document.getElementById("dayc").style.transform = "translateY(0%)";
  document.getElementById("dayd").style.transform = "translateY(0%)";
  document.getElementById("daye").style.transform = "translateY(0%)";
}

function changesche(morntm, morncls, mornr, afttm, aftcls, aftr) {
  document.getElementById("morningtime").innerHTML = morntm;
  document.getElementById("morningclass").innerHTML = morncls;
  document.getElementById("morningroom").innerHTML = mornr;
  document.getElementById("aftertime").innerHTML = afttm;
  document.getElementById("afterclass").innerHTML = aftcls;
  document.getElementById("afterroom").innerHTML = aftr;
}

function warp(destinationA) {
  window.location.href = destinationA;
}

window.onload = function () {
  aclicked();
};


function workaclick() {
  weveryoneoff();
  document.getElementById("worka").style.transform = "translateX(30%)";
  document.getElementById("workheader").innerText = "Bunkshot Roulette";
  document.getElementById("workdetail1").innerText = "A re-made on HTML from the famous game, Bulkshot Roulette.\nFull mechanic of randomizing and remembering.";
  document.getElementById("workdetail2").innerText = "If you wander how can I play? You can see it on the Warp Station on the DeathRulette one";
  document.getElementById("workimage").src = "img/work1.png";
}
function workbclick() {
  weveryoneoff();
  document.getElementById("workb").style.transform = "translateX(30%)";
  document.getElementById("workheader").innerText = "Work 2 (WIP)";
  document.getElementById("workdetail1").innerText = "WIP";
  document.getElementById("workdetail2").innerText = "WIP";
  document.getElementById("workimage").src = "img/wtf.jpg";
}
function workcclick() {
  weveryoneoff();
  document.getElementById("workc").style.transform = "translateX(30%)";
  document.getElementById("workheader").innerText = "Work 3 (WIP)";
  document.getElementById("workdetail1").innerText = "WIP";
  document.getElementById("workdetail2").innerText = "WIP";
  document.getElementById("workimage").src = "img/wtf.jpg";
}
function workdclick() {
  weveryoneoff();
  document.getElementById("workd").style.transform = "translateX(30%)";
  document.getElementById("workheader").innerText = "Work 4 (WIP)";
  document.getElementById("workdetail1").innerText = "WIP";
  document.getElementById("workdetail2").innerText = "WIP";
  document.getElementById("workimage").src = "img/wtf.jpg";
}


function weveryoneoff() {
  document.getElementById("worka").style.transform = "translateX(0%)";
  document.getElementById("workb").style.transform = "translateX(0%)";
  document.getElementById("workc").style.transform = "translateX(0%)";
  document.getElementById("workd").style.transform = "translateX(0%)";
}