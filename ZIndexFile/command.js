var currentvolume = 1;
function changevolumebg(targetvol) {
  currentvolume = targetvol;
  fadeVidVol(realshit, currentvolume, 200);
}
var bglist = [
  "Work 3.5 Profile webpage/video/background/Alice.mp4",
  "Work 3.5 Profile webpage/video/background/Reisa.mp4",
  "Work 3.5 Profile webpage/video/background/Koyuki_noint.mp4",
]; //List song using arrey!
function changebgvid(videoname) {
  document.getElementById("fade-overlay").style.opacity = "1";
  document.getElementById("fade-overlay").style.pointerEvents = "fill";
  document.getElementById("navigtor").style.opacity = "0";
  document.getElementById("navigtor").style.transform = "translateX(120%)";
  document.getElementById("textright").style.opacity = "0";
  document.getElementById("textright").style.transform = "translateX(120%)";
  document.getElementById("omgmid").style.opacity = "0";
  document.getElementById("omgmid").style.transform = "translateX(-130%)";
  document.getElementById("idcard").style.opacity = "0";
  document.getElementById("idcard").style.transform = "translateY(-120%)";
  document.getElementById("menuIcon").style.opacity = "0";
  document.getElementById("menuTab").style.opacity = "0";
  document.getElementById("menuIcon").style.transform = "translateY(160%)";
  document.getElementById("menuTab").style.transform = "translateY(160%)";
  fadeVidVol(realshit, currentvolume, 500);

  setTimeout(function () {
    document.querySelector("video").src = videoname;
    document.querySelector("video").load();
    document.querySelector("video").play();
  }, 1050);

  setTimeout(function () {
    document.getElementById("fade-overlay").style.pointerEvents = "none";
    document.getElementById("fade-overlay").style.opacity = "0";
    document.getElementById("navigtor").style.opacity = "1";
    document.getElementById("navigtor").style.transform = "translateX(0)";
    document.getElementById("textright").style.opacity = "1";
    document.getElementById("textright").style.transform = "translateX(0)";
    document.getElementById("omgmid").style.opacity = "1";
    document.getElementById("omgmid").style.transform = "translateX(0)";
    document.getElementById("idcard").style.opacity = "1";
    document.getElementById("idcard").style.transform = "translateY(0)";
    document.getElementById("menuIcon").style.opacity = "1";
    document.getElementById("menuTab").style.opacity = "1";
    document.getElementById("menuIcon").style.transform = "translateY(0)";
    document.getElementById("menuTab").style.transform = "translateY(0)";
    fadeVidVol(realshit, currentvolume, 500);
  }, 1250);
}
var curindex = 1;
function changebgm() {
  curindex = (curindex + 1) % bglist.length;
  changebgvid(bglist[curindex]);
}

function fadeVidVol(ele, tarVol, duration) {
  var startTime = new Date().getTime();
  function updateVol() {
    var currentTime = new Date().getTime();
    var elap = currentTime - startTime;
    var progress = elap / duration;

    if (progress < tarVol) {
      ele.volume = ele.volume + (tarVol - ele.volume) * progress;
      requestAnimationFrame(updateVol);
    } else {
      ele.volume = tarVol;
    }
  }
  updateVol();
}
//fading song

window.onload = function () {
  document.getElementById("midbut").style.opacity = "1";
  loadingfinisher();
};

function loadingfinisher() {
  document.querySelector("video").style.filter = "blur(0px)";
  document.querySelector("video").play();

  document.getElementById("midTitle").style.opacity = "0";
  document.getElementById("midTitle").style.transform = "translateY(-100%)";
  document.getElementById("midbut").style.opacity = "0";
  document.getElementById("midbut").style.transform = "translateY(-100%)";
  document.getElementById("hahaha").style.opacity = "1";
  document.getElementById("hahaha").style.transform = "translateX(0)";
  document.getElementById("navigtor").style.opacity = "1";
  document.getElementById("navigtor").style.transform = "translateX(0)";

  document.getElementById("textright").style.opacity = "1";
  document.getElementById("textright").style.transform = "translateX(0)";
  document.getElementById("omgmid").style.opacity = "1";
  document.getElementById("omgmid").style.transform = "translateX(0)";
  document.getElementById("fade-overlay").style.opacity = "0";
  document.getElementById("menuIcon").style.opacity = "1";
  document.getElementById("menuTab").style.opacity = "1";
  document.getElementById("menuIcon").style.transform = "translateY(0)";
  document.getElementById("menuTab").style.transform = "translateY(0)";
}
//start animation

const images = document.querySelectorAll(".midimg img");
let imgindex = 0;
function fadeimg() {
  images[imgindex].style.opacity = 0;
  imgindex = (imgindex + 1) % images.length;
  images[imgindex].style.opacity = 1;
}
setInterval(fadeimg, 3000); //Change Image

function unbruh() {
  document.querySelector("video").style.filter = "blur(0px)";
  document.getElementById("navigtor").style.opacity = "0";
  document.getElementById("navigtor").style.transform = "translateX(120%)";

  document.getElementById("textright").style.opacity = "0";
  document.getElementById("textright").style.transform = "translateX(120%)";
  document.getElementById("omgmid").style.opacity = "0";
  document.getElementById("omgmid").style.transform = "translateX(-130%)";
  document.getElementById("idcard").style.opacity = "0";
  document.getElementById("idcard").style.transform = "translateY(-120%)";
  document.getElementById("menuIcon").style.opacity = "0";
  document.getElementById("menuTab").style.opacity = "0";
  document.getElementById("menuIcon").style.transform = "translateY(160%)";
  document.getElementById("menuTab").style.transform = "translateY(160%)";
}
function bruh() {
  document.querySelector("video").style.filter = "blur(0px)";
  document.getElementById("navigtor").style.opacity = "1";
  document.getElementById("navigtor").style.transform = "translateX(0)";

  document.getElementById("textright").style.opacity = "1";
  document.getElementById("textright").style.transform = "translateX(0)";
  document.getElementById("omgmid").style.opacity = "1";
  document.getElementById("omgmid").style.transform = "translateX(0)";
  document.getElementById("idcard").style.opacity = "1";
  document.getElementById("idcard").style.transform = "translateY(0)";
  document.getElementById("menuIcon").style.opacity = "1";
  document.getElementById("menuTab").style.opacity = "1";
  document.getElementById("menuIcon").style.transform = "translateY(0)";
  document.getElementById("menuTab").style.transform = "translateY(0)";
}
function unlogoer() {
  document.getElementById("logo").style.opacity = "0";
  document.getElementById("logo").style.top = "-250px";
}
function logoer() {
  document.getElementById("logo").style.top = "50px";
  document.getElementById("logo").style.opacity = "1";
}
function warp(destinationA) {
  window.location.href = destinationA;
}

function profON() {
  document.getElementById("textleft").style.opacity = "1";
  document.querySelector("video").style.filter = "blur(10px)";
  document.getElementById("textleft").style.transform = "translateY(0)";
}

function profOFF() {
  document.getElementById("textleft").style.opacity = "0";
  document.getElementById("textleft").style.transform = "translateY(-130%)";
  document.querySelector("video").style.filter = "blur(0px)";
}

function schON() {
  document.getElementById("scheduletable").style.opacity = "1";
  document.querySelector("video").style.filter = "blur(10px)";
  document.getElementById("scheduletable").style.transform = "translateY(0)";
}

function schOFF() {
  document.getElementById("scheduletable").style.opacity = "0";
  document.getElementById("scheduletable").style.transform =
    "translateY(-130%)";
  document.querySelector("video").style.filter = "blur(0px)";
}

function loadContent(url, containerId) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => (document.getElementById(containerId).innerHTML = html))
    .catch((error) => console.error("Error loading content:", error));
}
