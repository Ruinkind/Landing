window.onscroll = function() {nav()};

var header = document.getElementById("navOffset");
var navHeadCenter = document.getElementById("navHeadCenter");
var navHeadSide = document.getElementsByClassName("navHeadSide");

var fixed = header.offsetTop;

function nav() {
  if (window.pageYOffset > fixed) {
    for (var i = 0; i < navHeadSide.length; i++) {
      navHeadSide[i].classList.add("navHeadSideAni");
      navHeadSide[i].classList.remove("navHeadSideAni2");
    }
    navHeadCenter.classList.add("navHeadCenterAni");
    navHeadCenter.classList.remove("navHeadCenterAni2");
  }
  else {
    for (var i = 0; i < navHeadSide.length; i++) {
      navHeadSide[i].classList.remove("navHeadSideAni");
      navHeadSide[i].classList.add("navHeadSideAni2");
    }
    navHeadCenter.classList.remove("navHeadCenterAni");
    navHeadCenter.classList.add("navHeadCenterAni2");
  }
}
