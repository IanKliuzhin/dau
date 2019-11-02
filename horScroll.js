(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.documentElement.scrollLeft -= (delta*25);
      document.body.scrollLeft -= (delta*25);
      e.preventDefault();
  }
  if (window.addEventListener) {
      window.addEventListener("mousewheel", scrollHorizontally, {passive: false});
      window.addEventListener("DOMMouseScroll", scrollHorizontally, {passive: false});
  } else {
      window.attachEvent("onmousewheel", scrollHorizontally);
  }
})();