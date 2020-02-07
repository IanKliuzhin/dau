export const addVertScroll = (main, about, changePage) => {
  const mainDoc = main.contentWindow.document;
  const aboutDoc = about.contentWindow.document;
  function scrollVertically(e) {
    e = mainDoc.event || e;
    var delta = (Math.abs(e.wheelDelta) < 25 && Math.abs(e.wheelDelta) > 10) ? 2 * e.wheelDelta : e.wheelDelta;
    e.preventDefault();
    const lines = mainDoc.getElementById('lines')
    const oldWidth = parseInt(window.getComputedStyle(lines).getPropertyValue('width'), 10) * 100 / mainDoc.documentElement.clientWidth
    const oldHeight = parseInt(window.getComputedStyle(lines).getPropertyValue('height'), 10) * 100 / mainDoc.documentElement.clientHeight
    const oldTop = parseInt(window.getComputedStyle(about).getPropertyValue('top'), 10) * 100 / mainDoc.documentElement.clientHeight
    if (delta > 0) {
      lines.style.width = oldWidth > 90 ? '100%' : `${oldWidth + 10}%`
      lines.style.height = oldHeight > 86.4 ? '96%' : `${oldHeight + 9.6}%`
      about.style.top = oldTop > 95 ? '100%' : `${oldTop + 5}%`
    } else if (oldTop > 55) {
        lines.style.width = `${oldWidth - 10}%`
        lines.style.height = `${oldHeight - 9.6}%`
        about.style.top = `${oldTop - 5}%`
      } else {
        if (main.classList.contains('visible')) {
          about.style.top = ""
          main.classList.remove('visible')
          changePage('about', 'main')
        }
        if (mainDoc.removeEventListener) {
            mainDoc.removeEventListener("mousewheel", scrollVertically);
            mainDoc.removeEventListener("DOMMouseScroll", scrollVertically);
            aboutDoc.removeEventListener("mousewheel", scrollVertically);
            aboutDoc.removeEventListener("DOMMouseScroll", scrollVertically);
        } else {
            mainDoc.detachEvent("onmousewheel", scrollVertically);
            aboutDoc.detachEvent("onmousewheel", scrollVertically);
        }
      }
  }
  if (mainDoc.addEventListener) {
      mainDoc.addEventListener("mousewheel", scrollVertically, {passive: false});
      mainDoc.addEventListener("DOMMouseScroll", scrollVertically, {passive: false});
      aboutDoc.addEventListener("mousewheel", scrollVertically, {passive: false});
      aboutDoc.addEventListener("DOMMouseScroll", scrollVertically, {passive: false});
  } else {
      mainDoc.attachEvent("onmousewheel", scrollVertically);
      aboutDoc.attachEvent("onmousewheel", scrollVertically);
  }
}