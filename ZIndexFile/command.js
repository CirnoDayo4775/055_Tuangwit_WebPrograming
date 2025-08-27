
const midder = document.getElementById("omgmid").style;
const fadeovl = document.getElementById("fade-overlay");
const navvar = document.getElementById("navigtor").style;
const txtrg = document.getElementById("textright").style;
const idc = document.getElementById("idcard").style;
const iconmn = document.getElementById("menuIcon").style;
const barmn = document.getElementById("menuTab").style;




let currentvolume = 1;
const bglist = [
  "Work 3.5 Profile webpage/video/background/Alice.mp4",
  "Work 3.5 Profile webpage/video/background/Reisa.mp4",
  "Work 3.5 Profile webpage/video/background/Koyuki_noint.mp4",
];
let curindex = 1;

function changevolumebg(targetvol) {
  currentvolume = targetvol;
  fadeVidVol(document.querySelector("video"), currentvolume, 200);
}

function setStyles(styles, values) {
  for (let i = 0; i < styles.length; i++) {
    styles[i][0][styles[i][1]] = values[i];
  }
}

function changebgvid(videoname) {
  setStyles(
    [
      [fadeovl.style, "opacity"],
      [fadeovl.style, "pointerEvents"],
      [navvar, "opacity"],
      [navvar, "transform"],
      [txtrg, "opacity"],
      [txtrg, "transform"],
      [midder, "opacity"],
      [midder, "transform"],
      [idc, "opacity"],
      [idc, "transform"],
      [iconmn, "opacity"],
      [barmn, "opacity"],
      [barmn, "transform"],
      [iconmn, "transform"]
    ],
    [
      "1", "fill", "0", "translateX(120%)", "0", "translateX(120%)", "0", "translateX(-130%)", "0", "translateY(-120%)", "0", "0", "translateY(160%)", "translateY(160%)"
    ]
  );
  fadeVidVol(document.querySelector("video"), currentvolume, 500);

  setTimeout(() => {
    const video = document.querySelector("video");
    video.src = videoname;
    video.load();
    video.play();
  }, 1050);

  setTimeout(() => {
    setStyles(
      [
        [fadeovl.style, "pointerEvents"],
        [fadeovl.style, "opacity"],
        [navvar, "opacity"],
        [navvar, "transform"],
        [txtrg, "opacity"],
        [txtrg, "transform"],
        [midder, "opacity"],
        [midder, "transform"],
        [idc, "opacity"],
        [idc, "transform"],
        [iconmn, "opacity"],
        [barmn, "opacity"],
        [barmn, "transform"],
        [iconmn, "transform"]
      ],
      [
        "none", "0", "1", "translateX(0)", "1", "translateX(0)", "1", "translateX(0)", "1", "translateY(0)", "1", "1", "translateY(0)", "translateY(0)"
      ]
    );
    fadeVidVol(document.querySelector("video"), currentvolume, 500);
  }, 1250);
}

function changebgm() {
  curindex = (curindex + 1) % bglist.length;
  changebgvid(bglist[curindex]);
}

function fadeVidVol(ele, tarVol, duration) {
  const startVol = ele.volume;
  const startTime = performance.now();
  function updateVol(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    ele.volume = startVol + (tarVol - startVol) * progress;
    if (progress < 1) {
      requestAnimationFrame(updateVol);
    } else {
      ele.volume = tarVol;
    }
  }
  requestAnimationFrame(updateVol);
}
//fading song


window.onload = function () {
  document.getElementById("midbut").style.opacity = "1";
};

function loadingfinisher() {
  const video = document.querySelector("video");
  video.style.filter = "blur(0px)";
  video.play();
  setStyles(
    [
      [document.getElementById("midTitle").style, "opacity"],
      [document.getElementById("midTitle").style, "transform"],
      [document.getElementById("midbut").style, "opacity"],
      [document.getElementById("midbut").style, "transform"],
      [document.getElementById("hahaha").style, "opacity"],
      [document.getElementById("hahaha").style, "transform"],
      [navvar, "opacity"],
      [navvar, "transform"],
      [txtrg, "opacity"],
      [txtrg, "transform"],
      [midder, "opacity"],
      [midder, "transform"],
      [fadeovl.style, "opacity"],
      [iconmn, "opacity"],
      [barmn, "opacity"],
      [barmn, "transform"],
      [iconmn, "transform"]
    ],
    [
      "0", "translateY(-100%)", "0", "translateY(-100%)", "1", "translateX(0)", "1", "translateX(0)", "1", "translateX(0)", "1", "translateX(0)", "0", "1", "1", "translateY(0)", "translateY(0)"
    ]
  );
}
//start animation


const images = document.querySelectorAll(".midimg img");
let imgindex = 0;
function fadeimg() {
  if (images.length === 0) return;
  images[imgindex].style.opacity = 0;
  imgindex = (imgindex + 1) % images.length;
  images[imgindex].style.opacity = 1;
}
if (images.length > 0) setInterval(fadeimg, 3000);

function unbruh() {
  document.querySelector("video").style.filter = "blur(0px)";
  setStyles(
    [
      [navvar, "opacity"], [navvar, "transform"],
      [txtrg, "opacity"], [txtrg, "transform"],
      [midder, "opacity"], [midder, "transform"],
      [idc, "opacity"], [idc, "transform"],
      [iconmn, "opacity"], [barmn, "opacity"],
      [barmn, "transform"], [iconmn, "transform"]
    ],
    [
      "0", "translateX(120%)", "0", "translateX(120%)", "0", "translateX(-130%)", "0", "translateY(-120%)", "0", "0", "translateY(160%)", "translateY(160%)"
    ]
  );
}
function bruh() {
  document.querySelector("video").style.filter = "blur(0px)";
  setStyles(
    [
      [navvar, "opacity"], [navvar, "transform"],
      [txtrg, "opacity"], [txtrg, "transform"],
      [midder, "opacity"], [midder, "transform"],
      [idc, "opacity"], [idc, "transform"],
      [iconmn, "opacity"], [barmn, "opacity"],
      [barmn, "transform"], [iconmn, "transform"]
    ],
    [
      "1", "translateX(0)", "1", "translateX(0)", "1", "translateX(0)", "1", "translateY(0)", "1", "1", "translateY(0)", "translateY(0)"
    ]
  );
}
function unlogoer() {
  const logo = document.getElementById("logo").style;
  logo.opacity = "0";
  logo.top = "-250px";
}
function logoer() {
  const logo = document.getElementById("logo").style;
  logo.top = "50px";
  logo.opacity = "1";
}
function warp(destinationA) {
  window.location.href = destinationA;
}


function profON() {
  const textleft = document.getElementById("textleft").style;
  textleft.opacity = "1";
  textleft.transform = "translateY(0)";
  document.querySelector("video").style.filter = "blur(10px)";
}
function profOFF() {
  const textleft = document.getElementById("textleft").style;
  textleft.opacity = "0";
  textleft.transform = "translateY(-130%)";
  document.querySelector("video").style.filter = "blur(0px)";
}
function schON() {
  const sched = document.getElementById("scheduletable").style;
  sched.opacity = "1";
  sched.transform = "translateY(0)";
  document.querySelector("video").style.filter = "blur(10px)";
}
function schOFF() {
  const sched = document.getElementById("scheduletable").style;
  sched.opacity = "0";
  sched.transform = "translateY(-130%)";
  document.querySelector("video").style.filter = "blur(0px)";
}


function loadContent(url, containerId) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => (document.getElementById(containerId).innerHTML = html))
    .catch((error) => console.error("Error loading content:", error));
}

// Calculate years and days since 25 October 2003
    function updateIdCard() {
      const birth = new Date(2003, 9, 25); // Month is 0-indexed
      const now = new Date();
      let years = now.getFullYear() - birth.getFullYear();
      let thisYearBirthday = new Date(now.getFullYear(), 9, 25);
      if (now < thisYearBirthday) years--;
      // Calculate last birthday
      let lastBirthday = new Date(birth.getFullYear() + years, 9, 25);
      let nextBirthday = new Date(birth.getFullYear() + years + 1, 9, 25);
      // Days since last birthday
      let daysSince = Math.floor((now - lastBirthday) / (1000 * 60 * 60 * 24));
      // Days in this year (to next birthday)
      let daysInYear = Math.floor((nextBirthday - lastBirthday) / (1000 * 60 * 60 * 24));

      // Update age and progress
      document.querySelector('.idcard-age').textContent = years;
      document.querySelector('.idcard-progress').textContent = daysSince + ' / ' + daysInYear;

      // Bar logic: 22 bars for 365 days
      let barLen = 22;
      let bar1 = '_'.repeat(barLen); // always 22 underscores
      // bar2: fill = how many days have passed in this year, out of 365
      let bar2Fill = Math.round(barLen * daysSince / 365);
      let bar2 = '_'.repeat(bar2Fill);
      document.querySelector('.idcard-line1').textContent = bar1;
      document.querySelector('.idcard-line2').textContent = bar2;
    }
    updateIdCard();