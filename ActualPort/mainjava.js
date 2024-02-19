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

  weveryoneoff();

  document.getElementById("workheader").innerText = "Welcome to my Gallery";
  document.getElementById("workdetail1").innerText =
    "Here's work's gallery! you can see my notable work here!";
  document.getElementById("workdetail2").innerText =
    "Please select your work you want to see by using button on the left.";
  document.getElementById("workimage").src = "../thumbnail/soon.png";
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
  document.getElementById("workdetail1").innerText =
    "A re-made on HTML from the famous game, Bulkshot Roulette.\nFull mechanic of randomizing and remembering.";
  document.getElementById("workdetail2").innerText =
    "If you wander how can I play? You can see it on the Warp Station on the DeathRulette one!";
  document.getElementById("workimage").src = "img/work1.png";
}
function workbclick() {
  weveryoneoff();
  document.getElementById("workb").style.transform = "translateX(30%)";
  document.getElementById("workheader").innerText = "Deal or No Deal";
  document.getElementById("workdetail1").innerText = "A game based on game shows name 'Deal or No Deal' which let you choose 1 box. \nThen Pick a box by box. There's will be deal of money for you to stop choosing. If you choose to pick up box to last one. You get money on your box.";
  document.getElementById("workdetail2").innerText = "Try out the game play in Warp Station on the DoND one!";
  document.getElementById("workimage").src = "img/dond.png";
}
function workcclick() {
  weveryoneoff();
  document.getElementById("workc").style.transform = "translateX(30%)";
  document.getElementById("workheader").innerText = "Full scale index";
  document.getElementById("workdetail1").innerText = "This is the full scale animation index. I tried to replicated the Blue Archive game's home screen with HTML. All of this iss made on HTML, css, and javascript. Used Bootsrap for mobile support.";
  document.getElementById("workdetail2").innerText = "If you want to see it in full scale, please click Home Page button on the top left.";
  document.getElementById("workimage").src = "img/inde.png";
}
function workdclick() {
  weveryoneoff();
  document.getElementById("workd").style.transform = "translateX(30%)";
  document.getElementById("workheader").innerText = "Minimized Port";
  document.getElementById("workdetail1").innerText = "Portfolio made with the concept of 'Less Deco, More functional'. All button here is functional and interactable.";
  document.getElementById("workdetail2").innerText = "You can try mess up with the pages here. It's has been checked and QC-ed with my discord friend! 95% input error preventing. Still... Unable to prevent spamming tho.";
  document.getElementById("workimage").src = "img/MinimizedPort.png";
}

function workeclick() {
  weveryoneoff();
  document.getElementById("worke").style.transform = "translateX(30%)";
  document.getElementById("workheader").innerText = "WIP";
  document.getElementById("workdetail1").innerText = "";
  document.getElementById("workdetail2").innerText = "";
  document.getElementById("workimage").src = "img/wtf.jpg";
}

function weveryoneoff() {
  document.getElementById("worka").style.transform = "translateX(0%)";
  document.getElementById("workb").style.transform = "translateX(0%)";
  document.getElementById("workc").style.transform = "translateX(0%)";
  document.getElementById("workd").style.transform = "translateX(0%)";
  document.getElementById("worke").style.transform = "translateX(0%)";
}

function showimg(){
  document.getElementById("popupimage").style.opacity = 1;
  document.getElementById("popupimage").style.zIndex = 5;
  document.getElementById("popupimgimg").src = document.getElementById("workimage").src;
}

function hideimg(){
  document.getElementById("popupimage").style.opacity = 0;

  setTimeout(function () {
    document.getElementById("popupimage").style.zIndex = -3;
  }, 750);
}