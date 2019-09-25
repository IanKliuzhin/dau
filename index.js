window.onload = () => {
  const loadingPageName = /#(.+)/.test(window.location.href) ? /#(.+)/.exec(window.location.href)[1] : ""

  const pageNames = ["institute", "participants", "docs"]
  const sources = {
    main: './main.html',
    docs: 'https://evgeniyivanov.com',
    participants: 'https://i-m-i.ru',
    institute: 'https://alumniball.strelka.com',
  }
  const pages = {
    main: document.getElementsByClassName("main")[0],
  }
  const links = {
    main: document.getElementById(`mainLink`),
  }

  const clearClasses = () => Object.keys(pages).forEach(pageName => pages[pageName].classList = pageName)

  const makeLoader = () => {
    const container = document.createElement('div')
    container.classList.add('pulse-container')
    for (let i = 0; i < 3; i++) {
      const bubble = document.createElement('div')
      bubble.classList.add(`pulse-bubble`, `pulse-bubble-${i+1}`)
      container.appendChild(bubble)      
    }
    return container
  }

  pageNames.forEach(pageName => {
    const page = document.createElement('iframe')
    page.classList.add(pageName)
    page.style.width = '100%'
    page.style.height = '100%'
    page.src = sources[pageName]
    page.onload = () => onFrameLoad(page)
    pages[pageName] = page
    document.body.appendChild(page)
    if (loadingPageName === pageName) {
      clearClasses()
      page.classList.add("visible")
    }
  })

  pageNames.concat('main').forEach(pageName => {
    const link = document.createElement('span')
    link.classList.add('link')
    link.id = `${pageName}Link`
    if (pageName === 'main') {
      link.classList.add("active")
      link.innerHTML = pageName
    } else {
      const loader = makeLoader()
      link.appendChild(loader)
    }
    document.body.appendChild(link)
    links[pageName] = link
    link.addEventListener("click", () => {
      window.history.pushState(pageName, pageName, pageName === 'main' ? ' ' : `#${pageName}`);
      clearClasses()
      pages[pageName].classList.add("visible")
    })
  })

  if (loadingPageName === "") {
    clearClasses()
    pages.main.classList.add("visible")
  }
}

const onFrameLoad = (frame) => {
  const pageName = frame.classList[0]
  const link = document.getElementById(`${pageName}Link`)
  link.innerHTML = pageName
  link.classList.add("active")
};
