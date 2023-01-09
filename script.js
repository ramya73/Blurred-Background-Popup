const container = document.querySelector(".container");
const popupContainer = document.querySelector(".popup-container");
const button = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");

button.addEventListener("click", () => {
  container.classList.add("active");
  popupContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  popupContainer.classList.add("active");
  container.classList.remove("active");
  console.log("clicked");
});
