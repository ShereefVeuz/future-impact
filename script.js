// menu button click function
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const headerNav = document.querySelector(".header_nav");

  menuIcon.addEventListener("click", function () {
    headerNav.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".main_header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Change 50 to the scroll position you want
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// client carousel
$(document).ready(function () {
  $(".clients-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      600: { items: 3 },
      1100: { items: 4 },
      1400: { items: 4 },
    },
  });
});

// service carousel
$(document).ready(function () {
  $(".services_accordion").on(
    "click",
    ".services_accordion_heading",
    function () {
      $(this).toggleClass("active").next().slideToggle();

      $(".services_accordion_contents").not($(this).next()).slideUp(300);

      $(this).siblings().removeClass("active");
    }
  );
});

$(document).ready(function () {
  $(".custom-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 50,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      600: {
        items: 1,
        margin: 20,
      },
      1100: {
        items: 1.5,
        margin: 50,
      },
    },
  });

  // Custom Navigation Events
  $(".next_btn").click(function () {
    $(".custom-carousel").trigger("next.owl.carousel");
  });

  $(".prev_btn").click(function () {
    $(".custom-carousel").trigger("prev.owl.carousel");
  });
});

$(".banner_carousel").owlCarousel({
  loop: true,
  nav: true,
  // autoplay: false,
  margin: 20,
  autoplayTimeout: 1000,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1.5,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 4,
    },
    900: {
      items: 5,
    },
    1200: {
      items: 3.5,
    },
    1500: {
      items: 4.5,
    },
  },
});

// $('.banner_carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
//   if (!e.namespace)  {
//     return;
//   }
//   var carousel = e.relatedTarget;
//   $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
// }).owlCarousel({
//   items: 1,
//   loop:true,
//   margin:0,
//   nav:true
// });


// service //

// $(document).ready(function () {
//   $(".services_carousel").owlCarousel({
//     loop: true,
//     // center: true,
//     nav: false,
//     margin: 30,
//     slideBy: 1, 
//     autoplay: false,
//     autoplayTimeout: 2000,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       1200: {
//         items: 4,
//       },
//     },
//   });

//   $(".next_btn1").click(function () {
//     $(".services_carousel").trigger("next.owl.carousel");
//   });

//   $(".prev_btn1").click(function () {
//     $(".services_carousel").trigger("prev.owl.carousel");
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".right-slider");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
});




$(document).ready(function () {
  $(".project_carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Custom Navigation Events
  $(".next_btn").click(function () {
    $(".project_carousel").trigger("next.owl.carousel");
  });

  $(".prev_btn").click(function () {
    $(".project_carousel").trigger("prev.owl.carousel");
  });
});


// JavaScript to switch tabs
function openTab(evt, tabId) {
  // Hide all tab content
  const content = document.querySelectorAll(".tab-pane");
  content.forEach((tab) => tab.classList.remove("active"));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => button.classList.remove("active"));

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add active class to the clicked button
  evt.currentTarget.classList.add("active");
}

// Show button when scrolling down
window.onscroll = function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


  // Tab sevice clicked time go to same tab 
  function activateTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach(tab => {
      tab.style.display = 'none';
    });
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
    });
    const activeTabPane = document.getElementById(tabId);
    if (activeTabPane) {
      activeTabPane.style.display = 'block';
    }
    const activeTabButton = document.querySelector(`.tab-button[onclick="openTab(event, '${tabId}')"]`);
    if (activeTabButton) {
      activeTabButton.classList.add('active');
    }
  }
  const urlParams = new URLSearchParams(window.location.search);
  const activeTab = urlParams.get('tab') || 'tab2';
  activateTab(activeTab);
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', event => {
      const tabId = event.currentTarget.getAttribute('onclick').match(/'([^']+)'/)[1];
      activateTab(tabId);
      const newUrl = new URL(window.location);
      newUrl.searchParams.set('tab', tabId);
      window.history.replaceState(null, '', newUrl);
    });
  });



//navbar dropdown menu
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor click behavior
    const dropdown = this.nextElementSibling; // Get the associated dropdown
    const icon = this.querySelector('.dropdown-icon'); // Get the icon
    const isVisible = dropdown.style.display === 'block';
    dropdown.style.display = isVisible ? 'none' : 'block';
    if (icon) {
      icon.classList.toggle('open', !isVisible);
    }
    document.querySelectorAll('.dropdown').forEach(menu => {
      if (menu !== dropdown) {
        menu.style.display = 'none';
        const otherIcon = menu.previousElementSibling.querySelector('.dropdown-icon');
        if (otherIcon) {
          otherIcon.classList.remove('open');
        }
      }
    });
  });
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('.header_nav_item')) {
    document.querySelectorAll('.dropdown').forEach(menu => {
      menu.style.display = 'none';
      const icon = menu.previousElementSibling.querySelector('.dropdown-icon');
      if (icon) {
        icon.classList.remove('open');
      }
    });
  }
});

//ENDnavbar dropdown menu




