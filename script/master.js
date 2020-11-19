window.onscroll = function() {navCall()};

// nav Vars
let header = document.getElementById("navOffset"),
    navHeadCenter = document.getElementById("navHeadCenter"),
    navHeadSide = document.getElementsByClassName("navHeadSide"),
    navMenu = document.getElementById("navMenuContainer"),
    navActive = navMenu.getElementsByClassName("navHref"),
    fixed = header.offsetTop;

// navMini vars
let navMiniPrevious = document.getElementById("navMiniPrevious"),
    navMiniNext = document.getElementById("navMiniNext"),
    navMiniScroll = document.querySelectorAll(".mainContentContainer");

// heroBottom vars
let heroRightHeader = document.querySelectorAll(".headerBottomRightHeaderContainer"),
    heroRightLi = document.querySelectorAll(".headerBottomRightLiContainer"),
    heroRightLiBorder = document.querySelectorAll(".headerBottomRightLiBottom"),
    heroRightLists = document.querySelectorAll(".headerBottomRightList");

// Nav Toggle
function navCall() {
  let dividerCenter = document.querySelector(".dividerCenter")

  if (window.pageYOffset > fixed) {
    for (var i = 0; i < navHeadSide.length; i++) {
      navHeadSide[i].classList.add("navHeadSideAni");
      navHeadSide[i].classList.remove("navHeadSideAni2");
    }
    navHeadCenter.classList.add("navHeadCenterAni");
    dividerCenter.style.borderBottom = "1.3vh solid var(--color-orangeAcc1)";
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
    dividerCenter.style.borderBottom = "1.3vh solid var(--color-mainAcc2)";
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
for (let i = 0; i < navActive.length; i++) {
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

// heroBottom Animations
setTimeout (() => {
  heroRightHeader[0].classList.add("heroHeaderAni");
  heroRightLiAni();
}, 1000);

// heroBottonLi reversed recusive loop
function heroRightLiAni () {
  let len = heroRightLi.length - 1;
  (function func(i) {
    if (i >= 0) {
      heroRightLi[i].classList.add("heroLiAni");

      let waitAni = document.querySelector(".heroLiAni");
      waitAni.addEventListener("transitionend", heroLiBorder());

      setTimeout(function() {func(--i); }, 800)
    }
  })(len);
};

// heroBottomBorder call
function heroLiBorder() {
  for (var i = 0; i < heroRightLiBorder.length; i++) {
    heroRightLiBorder[i].classList.add("heroLiBorder"+[i]+"Ani")
  }
};
