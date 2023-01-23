
// const ciudad = document.getElementById("ciudadi");
// let x = 0;
// function animate() {
//     requestAnimationFrame(animate);
//     x = (x + 1) % (window.innerWidth + ciudadi.clientWidth);
//     ciudadi.style.left = x + "px";
// }

// window.onload = animate;





window.onload = moveBackground;

  function moveBackground(){
    var x = 0;
    setInterval(function(){
      x -= 1;
      document.querySelector(".ciudad").style.backgroundPosition = x + "px 0";
      document.querySelector(".ciudad2").style.backgroundPosition = x + "px ";
    }, 25);


  }
;

