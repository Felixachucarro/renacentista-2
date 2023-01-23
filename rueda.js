const image = document.getElementById("rueda-one");
let angle = 0;

function rotate() {
    angle = (angle + 5) % 360;
    rueda-one.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotate);
}
rotate();

