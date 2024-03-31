const playBtn = document.querySelector(".play-btn");
const closeBtns = document.querySelector(".close-btn");
const video = document.querySelector(".video-bg");
const overlay2 = document.querySelector(".overlay2");

playBtn.addEventListener("click", () => {
  video.style.display = "flex";
  overlay2.style.display = "block";
});

closeBtns.addEventListener("click", () => {
  video.style.display = "none";
  overlay2.style.display = "none";
});
