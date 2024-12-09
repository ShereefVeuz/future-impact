// menu open close //

// const menuButton = document.querySelector('.menu-button');
// const topOverlay = document.querySelector('.top-overlay');
// const menuOverlay = document.querySelector('.menu-overlay');
// const menuItems = document.querySelectorAll('.menu a');
// const html = document.documentElement;
// const body = document.body;

// let isOpen = false;

// menuButton.addEventListener('click', () => {
//   if (!isOpen) {
//     html.classList.add('no-scroll');
//     body.classList.add('no-scroll');
    
//     gsap.to(topOverlay, { duration: 0.5, top: '0%', ease: 'power3.out' });
//     gsap.to(menuOverlay, { duration: 0.5, right: '0%', delay: 0.5, ease: 'power3.out' });
//     gsap.to(menuItems, {
//       duration: 0.5,
//       opacity: 1,
//       x: 0,
//       stagger: 0.1,
//       delay: 1,
//       ease: "power3.out"
//     });
//   } else {
//     html.classList.remove('no-scroll');
//     body.classList.remove('no-scroll');
    
//     gsap.to(menuItems, { duration: 0.3, opacity: 0, x: 20, stagger: -0.1 });
//     gsap.to(menuOverlay, { duration: 0.5, right: '-50%', delay: 0.5 });
//     gsap.to(topOverlay, { duration: 0.5, top: '-100%', delay: 0.10, ease: 'power3.in' });
//   }

//   isOpen = !isOpen;
//   menuButton.classList.toggle('open', isOpen);
// });



// menu open close //


//Animations
gsap.registerPlugin(ScrollTrigger);

  gsap.from(".about_second_section", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
      trigger: ".about_second_section",
      start: "top 50%",
      end: "bottom 20%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
      onEnter: () => startCounting(),
    }
  });

  gsap.from(".about_first_section", {
    duration: 1,
    x: 300,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".about_first_section",
      start: "top 80%",
      end: "top 20%",
      scrub: true, 
      markers: false,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".empowering_section-in", {
    duration: 500,
    x: -300,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".empowering_section-in",
      start: "top 130%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".main-sr .owl-carousel .item", {
    duration: 200,
    x: 100,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".main-sr .owl-carousel .item",
      start: "top 130%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play reverse play reverse",
    },
  });
  

  gsap.from(".sec-ex-cont", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
      trigger: ".sec-ex-cont",
      start: "top 50%",
      end: "bottom 20%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
      onEnter: () => startCounting(),
    }
  });

  gsap.from(".innovation-cont", {
    duration: 500,
    x: -3000,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".innovation-cont",
      start: "top 100%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play none none reverse",
    },
  });
  
  gsap.from(".newsletter_title", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
      trigger: ".newsletter_title",
      start: "top 50%",
      end: "bottom 20%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
      onEnter: () => startCounting(),
    }
  }); 
  gsap.from(".newsletter_form", {
    duration: 1,
    y: -300,
    opacity: 0,
    stagger: 3,
    scrollTrigger: {
      trigger: ".newsletter_form",
      start: "top 50%",
      end: "bottom 20%",
      scrub: true,
      markers: false,
      toggleActions: "play reverse play reverse",
      onEnter: () => startCounting(),
    }
  }); 

  // gsap.from(".footer_top_section", {
  //   duration: 1,
  //   y: -300,
  //   opacity: 0,
  //   stagger: 3,
  //   scrollTrigger: {
  //     trigger: ".footer_top_section",
  //     start: "top 50%",
  //     end: "bottom 20%",
  //     scrub: true,
  //     markers: false,
  //     toggleActions: "play reverse play reverse",
  //     onEnter: () => startCounting(),
  //   }
  // });

  


// scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})
gsap.ticker.lagSmoothing(0)

// close