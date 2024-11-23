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

$(".services_carousel").owlCarousel({
  loop: true,
  nav: true,
  // autoplay: true,
  margin: 20,
  autoplayTimeout: 1000,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    300: {
      items: 1.5,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 3,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1500: {
      items: 4,
    },
  },
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


//graph
// var data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   datasets: [{
//     label: "Dataset #1",
//     backgroundColor: "#25989063",
//     borderColor: "#4bb077",
//     borderWidth: 2,
//     hoverBackgroundColor: "rgba(255,99,132,0.4)",
//     hoverBorderColor: "rgba(255,99,132,1)",
//     data: [65, 59, 20, 81, 56, 55, 40],
//   }]
// };

// var options = {
//   maintainAspectRatio: false,
//   scales: {
//     y: {
//       stacked: true,
//       grid: {
//         display: true,
//         color: "rgba(255,99,132,0.2)"
//       }
//     },
//     x: {
//       grid: {
//         display: false
//       }
//     }
//   }
// };

// new Chart('chart', {
//   type: 'bar',
//   options: options,
//   data: data
// });


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





