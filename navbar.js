// Get position of scroll bar and determines if user has scrolled down. When user scrolls down
// it hides the navbar. When the user scrolls up, the navbar appears.

let prevScrollPosition = window.pageYOffset
window.onscroll = function () {
  const currentScrollPosition = window.pageYOffset
  if (prevScrollPosition > currentScrollPosition) {
    document.getElementById('navigation-bar').style.top = '0'
  } else {
    document.getElementById('navigation-bar').style.top = '-70px'
  }
  prevScrollPosition = currentScrollPosition
}
