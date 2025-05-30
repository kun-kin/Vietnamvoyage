$(window).scroll(function () {
  var headerHeight = $(".header").outerHeight();
  // kiểm tra điều kiện > header thì mới addClass
  if ($(window).scrollTop() > headerHeight) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }

  //scroll to div
  // if ($(this).scrollTop() >= $('.navigator').offset().top) {
  //     $('.navigator-container').addClass('fixed');
  //     $('.navigator-logo').show();
  // } else {
  //     $('.navigator-container').removeClass('fixed');
  //     $('.navigator-logo').hide();
  // }
});

/* back to top */
var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0
    },
    "1000"
  );
});

$(document).ready(function () {
  // $("#check-in").flatpickr({
  //   dateFormat: "d/m/Y"
  // });
  // $("#check-out").flatpickr({
  //   dateFormat: "d/m/Y"
  // });
  $(".number-count").counterUp();
});
$(document).mouseup(function (e) {
  if ($(e.target).closest(".menu-mobile").length === 0) {
    $(".menu-mobile").removeClass("opened");
    $(".overlay-mobile").removeClass("opened");
    $("body").removeClass("ov-hidden");
    $(".sub-toggle").removeClass("active");
    $(".menu-mobile").find(".sub-menu").slideUp();
  }
});

$(".menu-toggle").click(function () {
  $(".menu-mobile").addClass("opened");
  $(".overlay-mobile").addClass("opened");
  $("body").addClass("ov-hidden");
});
$(".menu-mobile .close-menu-mobile").click(function () {
  $(".menu-mobile").removeClass("opened");
  $(".overlay-mobile").removeClass("opened");
  $("body").removeClass("ov-hidden");
  $(".sub-toggle").removeClass("active");
  $(this).parents(".menu-mobile").find(".sub-menu").slideUp();
});

$(".hasChildren .sub-toggle").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(this).parents(".hasChildren").children(".sub-menu").slideToggle();
});

//slider

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  // You can add mobile menu functionality here if needed

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

$(".banner-slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000
});

$(".tourgallery-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".tourgallery-nav"
});
$(".tourgallery-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".tourgallery-for",
  dots: false,
  centerMode: false,
  focusOnSelect: true
});

$(".related-tour-slide").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$(".destinations-slide").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        autoplay: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        autoplay: false
      }
    }
  ]
});

$(".related-post").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        autoplay: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: false
      }
    }
  ]
});
