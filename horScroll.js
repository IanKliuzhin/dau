(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
    //   console.log('e.wheelDelta', e.wheelDelta)
    //   console.log('e.detail', e.detail)
    //   var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      var delta = Math.abs(e.wheelDelta) < 25 ? 3 * e.wheelDelta : e.wheelDelta;
    //   console.log(delta)
      document.documentElement.scrollLeft -= delta;
      document.body.scrollLeft -= delta;
      e.preventDefault();
  }
  if (window.addEventListener) {
      window.addEventListener("mousewheel", scrollHorizontally, {passive: false});
      window.addEventListener("DOMMouseScroll", scrollHorizontally, {passive: false});
  } else {
      window.attachEvent("onmousewheel", scrollHorizontally);
  }
})();