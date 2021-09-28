// set everything outside the onscroll event (less work per scroll)
var banner  = document.getElementById("banner"),
// -60 so it won't be jumpy
stop      = banner.offsetTop - 0,
docBody   = document.documentElement || document.body.parentNode || document.body,
hasOffset = window.pageYOffset !== undefined,
scrollTop;
var view1 = document.getElementById("view1");
var view2 = document.getElementById("view2");
var about = document.getElementById("about");

window.onscroll = function (e) {
  // cross-browser compatible scrollTop.
  scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;

  if (scrollTop >= stop) {
    // stick the div
    banner.className = 'stick';
		// change to view2
		view1.className = 'hide';
		view2.className = '';
    about.className = 'padding';
  } else {
    // release the div
    banner.className = '';
		//change to view1
		view1.className = '';
		view2.className = 'hide';
    about.className = '';

  }
}
