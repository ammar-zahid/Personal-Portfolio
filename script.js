// chasing circle 1

document.addEventListener('DOMContentLoaded', () => {
    const cursorCircle1 = document.querySelector('.cursor-circle1');
    const radius = cursorCircle1.clientWidth / 3;
  
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX - radius;
      const y = e.clientY - radius;
      cursorCircle1.style.transform = `translate(${x}px, ${y}px)`;
    });
  });  

  // chasing circle 2

  document.addEventListener('DOMContentLoaded', () => {
    const cursorCircle2 = document.querySelector('.cursor-circle2');
    const radius = cursorCircle2.clientWidth / 3;
  
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX - radius;
      const y = e.clientY - radius;
      cursorCircle2.style.transform = `translate(${x}px, ${y}px)`;
    });
  });  

  // pre loader

  var loader = document.getElementById("pre-loader");
  window.addEventListener("load", function(){
    setTimeout(function(){
      loader.style.display = "none"
    }, 1500)
  });

  // scroll animation 

//   const scroller = document.querySelector('.smooth-scroll');

//   function scrollPosition() {
//     return window.scrollY || document.documentElement.scrollTop;
//   }

//   let scrollPos = scrollPosition();
//   let scrollSpeed = 0;
//   let offset = 0;

//   window.addEventListener('scroll', () => {
//     scrollSpeed = scrollPosition() - scrollPos;

//     scrollPos = scrollPosition();
//     console.log(scrollSpeed);

//     offset += scrollSpeed * 0.7;
//   });

// function update() {
//   requestAnimationFrame(update);

//   offset *= .9;
//   if (Math.abs(offset) > .1) {
//     scroller.style.transform = `translate3d(0, ${offset}px, 0) skew(0, ${offset * .02}deg)`
//   }
//   else {
//     scroller.style.transform = ``;
//   }
// }  

// update();