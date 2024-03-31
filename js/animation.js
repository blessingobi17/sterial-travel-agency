const containerAnimation = document.querySelector(".container");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 370) {
      containerAnimation.classList.add("containerSlideUp");
      containerAnimation.style.opacity = 1;
    }
  }
});
if (window.innerWidth <= 884) {
  if (containerAnimation.style.opacity == 0) {
    containerAnimation.classList.add("containerSlideUp");
    containerAnimation.style.opacity = 1;
  }
}

window.addEventListener("scroll", () => {
  const secondContainerAnimation = document.querySelector(".second-container");
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 800) {
      secondContainerAnimation.classList.add("secondContainerSlideUp");
      secondContainerAnimation.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 950) {
      secondContainerAnimation.classList.add("secondContainerSlideUp");
      secondContainerAnimation.style.opacity = 1;
    }
  }
});

window.addEventListener("scroll", () => {
  const thirdContainerAnimation = document.querySelector(".third-container");
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 1750) {
      thirdContainerAnimation.classList.add("thirdContainerSlideUp");
      thirdContainerAnimation.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 1950) {
      thirdContainerAnimation.classList.add("thirdContainerSlideUp");
      thirdContainerAnimation.style.opacity = 1;
    }
  }
});

window.addEventListener("scroll", () => {
  const fourthContainerAnimation = document.querySelector(".fourth-container");
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 2850) {
      fourthContainerAnimation.classList.add("fourthContainerSlideUp");
      fourthContainerAnimation.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 2600) {
      fourthContainerAnimation.classList.add("fourthContainerSlideUp");
      fourthContainerAnimation.style.opacity = 1;
    }
  }
});

window.addEventListener("scroll", () => {
  const seventhContainerAnimation =
    document.querySelector(".seventh-container");
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 5600) {
      seventhContainerAnimation.classList.add("seventhContainerSlideUp");
      seventhContainerAnimation.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 5500) {
      seventhContainerAnimation.classList.add("seventhContainerSlideUp");
      seventhContainerAnimation.style.opacity = 1;
    }
  }
});

window.addEventListener("scroll", () => {
  const featuredContainerAnimation = document.querySelector(
    ".featured-container"
  );
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 1500) {
      featuredContainerAnimation.classList.add("featuredContainerSlideUp");
      featuredContainerAnimation.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 2400) {
      featuredContainerAnimation.classList.add("featuredContainerSlideUp");
      featuredContainerAnimation.style.opacity = 1;
    }
  }
});
