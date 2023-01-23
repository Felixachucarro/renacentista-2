const character = document.getElementById("character");

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowRight") {
    character.style.left = (parseFloat(getComputedStyle(character).left) + 10) + "px";
  } else if (event.code === "ArrowLeft") {
    character.style.left = (parseFloat(getComputedStyle(character).left) - 10) + "px";
  } else if (event.code === "ArrowUp") {
    character.style.top = (parseFloat(getComputedStyle(character).top) - 10) + "px";
  } else if (event.code === "ArrowDown") {
    character.style.top = (parseFloat(getComputedStyle(character).top) + 10) + "px";
  }
});