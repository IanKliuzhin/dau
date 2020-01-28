export const addVertScroll = (main, about, changePage) => {
  const mainDoc = main.contentWindow.document;
  const aboutDoc = about.contentWindow.document;
  function scrollVertically(e) {
    e = mainDoc.event || e;
    // console.log('e.wheelDelta', e.wheelDelta)
    // console.log('e.type', e.type)
    // var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var delta = (Math.abs(e.wheelDelta) < 25 && Math.abs(e.wheelDelta) > 10) ? 2 * e.wheelDelta : e.wheelDelta;
    // console.log(delta)
    // console.log(e.wheelDelta, delta)
    e.preventDefault();
    const lines = mainDoc.getElementById('lines')
    const oldWidth = parseInt(window.getComputedStyle(lines).getPropertyValue('width'), 10) * 100 / mainDoc.documentElement.clientWidth
    const oldHeight = parseInt(window.getComputedStyle(lines).getPropertyValue('height'), 10) * 100 / mainDoc.documentElement.clientHeight
    console.log('oldWidth', oldWidth);
    console.log('oldHeight', oldHeight);
    const oldTop = parseInt(window.getComputedStyle(about).getPropertyValue('top'), 10) * 100 / mainDoc.documentElement.clientHeight
    console.log('oldTop', oldTop);
    if (delta > 0) {
      console.log('-->');
      lines.style.width = oldWidth > 90 ? '100%' : `${oldWidth + 10}%`
      lines.style.height = oldHeight > 86.4 ? '96%' : `${oldHeight + 9.6}%`
      about.style.top = oldTop > 95 ? '100%' : `${oldTop + 5}%`
    } else {
      console.log('<--');
      if (oldTop > 55) {
        lines.style.width = `${oldWidth - 10}%`
        lines.style.height = `${oldHeight - 9.6}%`
        about.style.top = `${oldTop - 5}%`
      } else {
        lines.style.width = ""
        lines.style.height = ""
        about.style.top = ""
        lines.classList.remove('shown')
        main.classList.remove('visible')
        changePage('about', 'main')
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