export const colorLinks = (doc) => {
  const links = document.getElementsByClassName('link')[0]
  console.log(links)
  const light = doc.querySelectorAll('.contentContainer.light')
  console.log(light)
  const dark = doc.querySelectorAll('.contentContainer.dark')
  console.log(dark)
  const optionsLight = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }
  const optionsDark = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }
  let lightVisible = false
  let darkVisible = false

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      // console.log(entry.boundingClientRect)
      // console.log(entry.intersectionRatio)
      // console.log(entry.intersectionRect)
      // console.log(entry.isIntersecting)
      // console.log(entry.rootBounds)
      // console.log(entry.target)
      // console.log(entry.time)
      // console.log(entry.target.classList);

      const { target, isIntersecting } = entry
      if (target.classList.contains('dark')) {
        darkVisible = isIntersecting
      } else if (target.classList.contains('light')) {
        lightVisible = isIntersecting
      }
      console.log({lightVisible})
      console.log({darkVisible})
      if (darkVisible) {
        if (lightVisible) {
          links.classList.remove('dark')
        } else {
          links.classList.remove('dark')
        }
      } else if (lightVisible) {
          links.classList.add('dark')
        } else {
          // links.classList.add('dark')
        }
    });
  };

  const observerLight = new IntersectionObserver(callback, optionsLight);
  const observerDark = new IntersectionObserver(callback, optionsDark);

  light.forEach((l) => observerLight.observe(l))
  dark.forEach((d) => observerDark.observe(d))
}
