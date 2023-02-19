const a2_title = document.getElementById('a2_title');

window.scroll(function() {
    var hT = a2_title.offset().top,
        hH = a2_title.outerHeight(),
        wH = window.height(),
        wS = whit.scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
      alert('you have scrolled to the h1!');
    }
 });