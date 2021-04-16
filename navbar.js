// Get position of scroll bar and determines if user has scrolled down. When user scrolls down
// it hides the navbar. When the user scrolls up, the navbar appears.

var prevScrollPosition = window.pageYOffset
window.onscroll = function() {
  var currentScrollPosition = window.pageYOffset
  if (prevScrollPosition > currentScrollPosition) {
    document.getElementById("navbar").style.top = "0";
  }

  else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollPosition = currentScrollPosition
}