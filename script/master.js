window.onscroll = function() {navCall()};

let header = document.getElementById("navOffset"),
    navHeadCenter = document.getElementById("navHeadCenter"),
    navHeadSide = document.getElementsByClassName("navHeadSide"),
    navMenu = document.getElementById("navMenuContainer"),
    navActive = navMenu.getElementsByClassName("navHref"),
    fixed = header.offsetTop;

let navMiniPrevious = document.getElementById("navMiniPrevious"),
    navMiniNext = document.getElementById("navMiniNext"),
    navMiniScroll = document.querySelectorAll(".mainContentContainer");

// Nav Toggle
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
    navRemoveActive();
  }
}

// Nav Menu Animations
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

// Clearing Active Tags
function navRemoveActive() {
  for (var i = 0; i < navActive.length; i++) {
    navActive[i].classList.remove("navActive");
  }
}

// Nav Active on Select
for (var i = 0; i < navActive.length; i++) {
  navActive[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("navActive");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" navActive", "");
      }
    this.className += " navActive";
  })
}

// navMini Actions
let index = 0;

navMiniNext.addEventListener("click", function() {
  navMiniScrollTo(index++);
});

navMiniPrevious.addEventListener("click", function() {
  navMiniScrollTo(index--);
});

function navMiniScrollTo() {
  if (index <= 0) {
    index = 0;
    navMiniScroll[index].scrollIntoView({block: "center"});
  } else if (index >= navMiniScroll.length - 1) {
    index = navMiniScroll.length - 1;
    navMiniScroll[index].scrollIntoView({block: "center"});
  }
  navMiniScroll[index].scrollIntoView({block: "center"});
};

// var isInViewport = function (elem) {
//   var bounding = elem.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//   );
// }
