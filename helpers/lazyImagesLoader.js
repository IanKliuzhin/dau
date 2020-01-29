export const lazyLoadImages = (doc) => {
  var lazyBackgrounds = [].slice.call(doc.querySelectorAll(".lazy"));
  if ("IntersectionObserver" in window) {
    const lazyBackgroundObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
          entry.target.classList.remove("lazy");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
}
