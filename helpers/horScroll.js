(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      // console.log('e.wheelDelta', e.wheelDelta)
      // console.log('e.type', e.type)
      // var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      var delta = (Math.abs(e.wheelDelta) < 25 && Math.abs(e.wheelDelta) > 10) ? 2 * e.wheelDelta : e.wheelDelta;
      // console.log(delta)
      // console.log(e.wheelDelta, delta)
      document.documentElement.scrollLeft -= delta;
      document.body.scrollLeft -= delta;
      sessionStorage.setItem(`scroll_${document.documentElement.className}`, document.body.scrollLeft)
      e.preventDefault();
  }
  if (window.addEventListener) {
      window.addEventListener("mousewheel", scrollHorizontally, {passive: false});
      window.addEventListener("DOMMouseScroll", scrollHorizontally, {passive: false});
  } else {
      window.attachEvent("onmousewheel", scrollHorizontally);
  }
})();