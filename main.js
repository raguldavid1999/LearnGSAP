// gsap.from( '.header',{duration:3, y:'-100%', ease:'bounce' });

// gsap.from('.link',{duration:1, opacity:0, delay:1, stagger: 0.5});

// gsap.from('.right',{duration:2, x:'-100vw', delay:1, ease:'power2.in'});

// gsap.from('.left',{duration:1, x:'-100%', delay:1.5, ease:'power2.in'})

// gsap.to('.footer',{duration:1, y:'0', delay:3, ease:'elastic'})

// gsap.fromTo('.button',{opacity:0, scale:0, rotation:720}, {opacity:1,delay:3.5, scale:1, rotation:0});

const timeline = gsap.timeline({defaults:{duration:1}});

timeline
  .from('.header',{y:'-100%', ease:'bounce'})
  .from('.link',{opacity:0, stagger:0.5})
  .from('.right',{x:'-100vw', ease:'power2.in'},1)
  .from('.left',{x:'-100%'},'<.5')
  .to('.footer',{y:0, ease:'elastic'})
  .fromTo('.button',{opacity:0, scale:0, rotation:720}, {opacity:1, scale:1, rotation:0});

const button  = document.querySelector('.button');

button.addEventListener('click',()=>{
  timeline.timeScale(2);
  timeline.reverse();
})