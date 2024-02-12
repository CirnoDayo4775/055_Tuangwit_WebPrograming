function aclicked() {
  everyoneoff();
  document.getElementById("buta").style.transform = "translateY(0%)";
  document.getElementById("containholderA").style.opacity = 1;
}
function bclicked() {
  everyoneoff();
  document.getElementById("butb").style.transform = "translateY(0%)";
  document.getElementById("containholderB").style.opacity = 1;
}
function cclicked() {
  everyoneoff();
  document.getElementById("butc").style.transform = "translateY(0%)";
  document.getElementById("containholderC").style.opacity = 1;
}
function dclicked() {
  everyoneoff();
  document.getElementById("butd").style.transform = "translateY(0%)";
  document.getElementById("containholderD").style.opacity = 1;
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
  dclicked();
};
