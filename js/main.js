/* MASERHEAD CHANGING WORD
-------------------------------------------------- */

$(function changeWord() {
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
    if ($(window).scrollTop() > 1050) {
      if (!$navbar.hasClass("navbar-fixed-top")) {
        $navbar.addClass("navbar-fixed-top");
      }
    } else {
      $navbar.removeClass("navbar-fixed-top");
    }
  }
});

$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.first-container').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.nav-container').addClass('solid-nav');
        } else {
            $('.nav-container').removeClass('solid-nav');
        }

    });
});

document.getElementById("submitDetails").addEventListener("click", check)

var check = function(){
  setTimeout(check, 2000); // check again in a second
  saveFormInputs();
}


function saveFormInputs()
{

var firstName = document.getElementById("inputFirstName").value;
var lastName = document.getElementById("inputLastName").value;
var email = document.getElementById("inputEmail").value;
var number = document.getElementById("inputNumber").value;
var message = document.getElementById("message").value;
var recievePlans = document.getElementById("gridCheck").value;



  alert("Thank you for reaching out to me. I will get in touch soon!")
}
