window.onscroll = function() {navCall()};

var header = document.getElementById("navOffset");
var navHeadCenter = document.getElementById("navHeadCenter");
var navHeadSide = document.getElementsByClassName("navHeadSide");
var navMenu = document.getElementById("navMenuContainer");

var fixed = header.offsetTop;

function navCall() {
  if (window.pageYOffset > fixed) {
    for (var i = 0; i < navHeadSide.length; i++) {
      navHeadSide[i].classList.add("navHeadSideAni");
      navHeadSide[i].classList.remove("navHeadSideAni2");
    }
    navHeadCenter.classList.add("navHeadCenterAni");
    navHeadCenter.classList.remove("navHeadCenterAni2");
    navMenuCall();
  }
  else {
    for (var i = 0; i < navHeadSide.length; i++) {
      navHeadSide[i].classList.remove("navHeadSideAni");
      navHeadSide[i].classList.add("navHeadSideAni2");
    }
    navHeadCenter.classList.remove("navHeadCenterAni");
    navHeadCenter.classList.add("navHeadCenterAni2");
    navMenuAnimation();
  }
}

function navMenuCall() {
  setTimeout(navMenuAnimation, 800);
}

function navMenuAnimation() {
  if (navHeadCenter.classList.contains("navHeadCenterAni")) {
    navMenu.classList.add("navMenuAni");
    navMenu.classList.remove("navMenuAni2");
  } else if (navHeadCenter.classList.contains("navHeadCenterAni2")) {
    navMenu.classList.add("navMenuAni2");
    navMenu.classList.remove("navMenuAni");
  }
}
