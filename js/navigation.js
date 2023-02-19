
const a2_title = document.getElementById('a2_title');
const a1_button = document.getElementById('a1_button');

var initialTopOffset = $('.headline').offset().top;
window.scroll(function(event) {
  var scroll = window.scrollTop();
  // if the top of our browser is inside the section2
  if (scroll + initialTopOffset >= a2_title.offset().top && scroll + initialTopOffset <= a2_title.offset().top + a2_title.outerHeight()) {
    a1_button.addClass('in_a1'); // add the class
  } else {
    a1_button.removeClass('in_a1'); // remove the class
  }
});

//trigger the scroll
$(window).scroll(); //ensure if you're in current position when page is refreshed