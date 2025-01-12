
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function fristpageAnim(){
   var tl  = gsap.timeline();

   tl.from("#nav", {
    y:'-10',
    opacity:0,
    duration: 2,
    ease: Expo.easeInout
  })
    .to(".boundingelem",{
     y: 0,
     ease: Expo .easeInout,
     duration:2,
     delay: -1,
     stagger:.2
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay : -5,
      ease:Expo.easeInout
    })
}
  function circlesetkaro (){
   // define deafault scalle value
   var xscale = 1;
   var yscale  = 1;


   var xprev = 0;
   var yprev =  0;
   window.addEventListener("mousemove" ,function(dets){
       xscale =  gsap.utils.clamp(.8,1.2,dets.clientX-xprev );
    yscale =  gsap.utils.clamp(.8,1.2, dets.clientY-yprev);

    xprev = dets.clientX;
    xprev = dets.clientY;

    circleMouseFollower(xscale,yscale);
   });
  }
    circlesetkaro();
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove" , function(dets) {
      document .querySelector("#minicircle").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    },100);
}
circleMouseFollower();
fristpageAnim();
document.querySelectorAll(".elem").forEach(function (elem)  {
 var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to (elem.querySelector("img"), {
      opacity :0,
      ease:Power3,
      duration : 0.5,
    });
  });

   elem.addEventListener("mousemove", function (dets) {
      var diffrot = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientsX-rotate;
      rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power1,
        top: dets.clientY, 
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20, diffrot *0.8),  
     });
    });
});



