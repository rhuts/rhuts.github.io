const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
  nav.classList.add("active");
});
navClose.addEventListener("click", () => {
  nav.classList.remove("active");
});

// LOGO SLIDER
const owl = $(".owl-carousel-logos");
owl.owlCarousel({
  loop: true,
  center: true,
  margin: 10,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".owl-next-logos").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".owl-prev-logos").click(function () {
  owl.trigger("prev.owl.carousel");
});

// PORTFOLIO SLIDER
const owl2 = $(".owl-carousel-portfolio");
owl2.owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-next-portfolio").click(function () {
  owl2.trigger("next.owl.carousel");
});
$(".owl-prev-portfolio").click(function () {
  owl2.trigger("prev.owl.carousel");
});

// BLOG SLIDER
const owl3 = $(".owl-carousel-blog");
owl3.owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-next-blog").click(function () {
  owl3.trigger("next.owl.carousel");
});
$(".owl-prev-blog").click(function () {
  owl3.trigger("prev.owl.carousel");
});

// SERVICES SLIDER
const servicesSection = document.querySelector(".services-container");
if ($(window).width() < 859) {
  const owl4 = $(".owl-carousel-services");
  owl4.owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $(".owl-next-service").click(function () {
    owl4.trigger("next.owl.carousel");
  });
  $(".owl-prev-service").click(function () {
    owl4.trigger("prev.owl.carousel");
  });
}
