// menu open close //

const menuButton = document.querySelector('.menu-button');
const topOverlay = document.querySelector('.top-overlay');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu a');
const html = document.documentElement;
const body = document.body;

let isOpen = false;

menuButton.addEventListener('click', () => {
  if (!isOpen) {
    html.classList.add('no-scroll');
    body.classList.add('no-scroll');
    
    gsap.to(topOverlay, { duration: 0.5, top: '0%', ease: 'power3.out' });
    gsap.to(menuOverlay, { duration: 0.5, right: '0%', delay: 0.5, ease: 'power3.out' });
    gsap.to(menuItems, {
      duration: 0.5,
      opacity: 1,
      x: 0,
      stagger: 0.1,
      delay: 1,
      ease: "power3.out"
    });
  } else {
    html.classList.remove('no-scroll');
    body.classList.remove('no-scroll');
    
    gsap.to(menuItems, { duration: 0.3, opacity: 0, x: 20, stagger: -0.1 });
    gsap.to(menuOverlay, { duration: 0.5, right: '-50%', delay: 0.5 });
    gsap.to(topOverlay, { duration: 0.5, top: '-100%', delay: 0.10, ease: 'power3.in' });
  }

  isOpen = !isOpen;
  menuButton.classList.toggle('open', isOpen);
});



// menu open close //


//Animations
gsap.registerPlugin(ScrollTrigger);

  gsap.from(".pfolio .owl-carousel .item", {
    duration: 200,
    x: 100,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".pfolio .owl-carousel .item",
      start: "top 130%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.from(".pfolio2 .owl-carousel .item", {
    duration: 200,
    x: -100,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".pfolio2 .owl-carousel .item",
      start: "top 130%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play none none reverse",
    },
  });

gsap.from(".about-content", {
  duration: 1,
  x: 300,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 80%",
    end: "top 20%",
    scrub: true, 
    markers: false,
    toggleActions: "play none none reverse",
  },
});

gsap.from(".letter", {
  duration: 1,
  y:-300,
  opacity:0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".letter",
    start: "top 50%",
    end:"bottom 20%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".design", {
  duration: 1,
  x:-300,
  opacity:0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".design",
    start: "center 130%",
    end:"bottom 0%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

// counting
gsap.from(".counter-outr", {
  duration: 1,
  y: -300,
  opacity: 0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".counter-outr",
    start: "top 50%",
    end: "bottom 20%",
    scrub: true,
    markers: false,
    toggleActions: "play reverse play reverse",
    onEnter: () => startCounting(),
  }
});

// Function to start counting
function startCounting() {
  let counter = document.querySelectorAll(".counter");
  let arr = Array.from(counter);

  arr.map((item) => {
    let count = 0;
    function CounterUp() {
      count++;
      item.innerHTML = count;
      if (count == item.dataset.number) {
        clearInterval(stop);
      }
    }
    let stop = setInterval(function () {
      CounterUp();
    }, 100 / item.dataset.speed);
  });
}

gsap.from(".partners", {
  duration: 1,
  y:-300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".partners",
    start: "top 50%",
    end:"bottom 20%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  }
});

gsap.from(".elevage", {
  duration: 500,
  x: -300,
  opacity:0,
  stagger: 50,
  scrollTrigger: {
    trigger: ".elevage",
    start: "top 130%",
    end:"center 50%",
    scrub: true, 
    markers: false,
    toggleActions: "play none none reverse",
  },
});

gsap.from(".touch-new", {
  duration: 300,
  x: 300,
  opacity:0,
  stagger: 50,
  scrollTrigger: {
    trigger: ".touch-new",
    start: "top 130%",
    end:"center 50%",
    scrub: true, 
    markers: false,
    toggleActions: "play none none reverse",
  },
});


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