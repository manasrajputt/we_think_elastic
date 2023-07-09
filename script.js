function init()
{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init();

var img=document.querySelector("#icons img");
var arr=["https://wethinkelastic.com/assets/images/152c223f4359675788470.svg",
          "https://wethinkelastic.com/assets/images/24a07612b16472c6a503f.svg",
          "https://wethinkelastic.com/assets/images/338b04b3ad8edf6773599.svg",
          "https://wethinkelastic.com/assets/images/4e7e9b9fc472434d65a23.svg",
          "https://wethinkelastic.com/assets/images/556ce542d7fdbd78d032e.svg",
          "https://wethinkelastic.com/assets/images/6a714ad31db5d83bc967b.svg",
          "https://wethinkelastic.com/assets/images/7c9e22462b51ae93b5a17.svg",
          "https://wethinkelastic.com/assets/images/8a2db0cd90582eb4b877d.svg",
          "https://wethinkelastic.com/assets/images/9e5b57420355774e0a99d.svg",
          "https://wethinkelastic.com/assets/images/109804494fa1878703f2c1.svg",
          "https://wethinkelastic.com/assets/images/11d1acd8abd7b1efc4c23d.svg"]

var idx=1;

setInterval(() => {
  img.setAttribute("src",arr[idx])
  idx++
}, 170);


gsap.to("#loader",{
  top:"-200%",
  duration:3,
  delay:.5,
  ease:Expo.easeInOut
})

gsap.from("#bg1 #elem",{
  opacity:0,
  y:100,
  delay:2.6,
  stagger:.1,
  ease:Expo.ease,
})

gsap.from("#bg2 #elem",{
  opacity:0,
  y:100,
  delay:2.8,
  stagger:.1,
  ease:Expo.ease,
})

gsap.to("#page2 #vid",{
  width:"100%",
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    start:"top 100%",
    end:"top 0%",
    scrub:4
  }
})
gsap.from("#page3 h1",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 45%",
    end:"top 10%",
    scrub:4
  }
})

document.addEventListener("mousemove",(e)=>{
  let x=e.pageX;
  let y=e.pageY;

  document.querySelector(".arrow").style.left = x+ "px";
  document.querySelector(".arrow").style.top = y+ "px";
})

document.querySelector("#box").addEventListener("mouseenter",function(e){
  document.querySelector(".arrow").style.scale = 1;
})
document.querySelector("#box").addEventListener("mouseleave",function(e){
  document.querySelector(".arrow").style.scale = 0;
})

document.querySelector("#imgbox").addEventListener("mouseenter",function(e){
  document.querySelector(".arrow").style.scale = 1;
})
document.querySelector("#imgbox").addEventListener("mouseleave",function(e){
  document.querySelector(".arrow").style.scale = 0;
})

document.querySelector("#img1").addEventListener("mouseenter",function(e){
  document.querySelector(".arrow").style.scale = 1;
})
document.querySelector("#img1").addEventListener("mouseleave",function(e){
  document.querySelector(".arrow").style.scale = 0;
})

document.querySelector("#img2").addEventListener("mouseenter",function(e){
  document.querySelector(".arrow").style.scale = 1;
})
document.querySelector("#img2").addEventListener("mouseleave",function(e){
  document.querySelector(".arrow").style.scale = 0;
})

document.querySelector("#pg6").addEventListener("mouseenter",function(e){
  document.querySelector(".arrow").style.scale = 1;
})
document.querySelector("#pg6").addEventListener("mouseleave",function(e){
  document.querySelector(".arrow").style.scale = 0;
})

gsap.to("#page7 h1,#first,#second,#third",{
  left:"-142%",
  duration:100,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    start:"top 0%",
    end:"top -120%",
    scrub:5,
    pin:true,
    // markers:true
  }
})