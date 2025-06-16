const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const words = [
  "Digital Marketing Specialist",
  "Content Marketer",
  "Community Manager",
  "Social Media Manager",
  "Content Writer",
  "Content Creator",
  "Video Editor",
  "Voice Over Artist",
];
const typingSpeed = 150;
const deletingSpeed = 50;
const newWordDelay = 2000;

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    // Pause before deleting
    setTimeout(deleteText, newWordDelay);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, deletingSpeed);
  } else {
    // Move to the next word
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0; // Loop back to the first word
    }
    setTimeout(type, typingSpeed + 200); // Slight delay before typing next word
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newWordDelay + 250); // Initial delay
  }
});

// Portfolio filter

// CONTACT

document.addEventListener("DOMContentLoaded", function () {
  const sendToGmailButton = document.getElementById("sendToGmail");

  if (sendToGmailButton) {
    sendToGmailButton.addEventListener("click", function () {
      const form = document.getElementById("contactForm");
      const nameInput = form.querySelector("#name");
      const emailInput = form.querySelector("#email");
      const subjectInput = form.querySelector("#subject");
      const messageInput = form.querySelector("#message");
      const recipient = "okoronkwonmesoma@gmail.com"; // Replace with your Gmail address

      const name = nameInput ? nameInput.value : "";
      const email = emailInput ? emailInput.value : "";
      const subject = subjectInput ? subjectInput.value : "";
      const message = messageInput ? messageInput.value : "";

      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0AMessage:%0D%0A${message}`;
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;

      window.location.href = mailtoLink;
    });
  } else {
    console.error("Button with ID 'sendToGmail' not found.");
  }
});

(function ($) {
  "use strict";

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#loader").length > 0) {
        $("#loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("nav-sticky");
    } else {
      $(".navbar").removeClass("nav-sticky");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Typed Initiate
  if ($(".hero .hero-text h2").length == 1) {
    var typed_strings = $(".hero .hero-text .typed-text").text();
    var typed = new Typed(".hero .hero-text h2", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  Skills;
  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    center: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // Portfolio filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-filter li").on("click", function () {
    $("#portfolio-filter li").removeClass("filter-active");
    $(this).addClass("filter-active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
})(jQuery);

// Navbar collapsing







document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarSupportedContent');

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', (event) => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarCollapse.classList.remove('show');
        event.target.blur(); // Remove focus from the clicked link
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarSupportedContent');

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});




$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1,
    },
  }),
    $(".filters a").click(function () {
      $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return (
        t.isotope({
          filter: i,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1,
          },
        }),
        !1
      );
    });
});

// google maps
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
}
