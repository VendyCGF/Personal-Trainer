/* MASERHEAD CHANGING WORD
-------------------------------------------------- */

$(function () {
  count = 0;
  wordsArray = ["body", "state", "lifestyle"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 2500);
});

/* STICKY NAV BAR
-------------------------------------------------- */

$(document).ready(function() {
  var $navbar = $("#mainNav");

  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
      AdjustHeader();
  });

  function AdjustHeader(){
    if ($(window).scrollTop() > 1600) {
      if (!$navbar.hasClass("navbar-fixed-top")) {
        $navbar.addClass("navbar-fixed-top");
      }
    } else {
      $navbar.removeClass("navbar-fixed-top");
    }
  }
});
