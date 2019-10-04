const onFrameLoad = (frame) => {
  console.log("frame loaded")
  const pageName = frame.classList[0]
  const link = document.getElementById(`${pageName}Link`)
  link.innerHTML = pageName
  link.classList.add("active")
}

document.addEventListener(
  "DOMContentLoaded",
  (e) => {
    console.log(e)
    if (e.target.defaultView.frameElement) return

    const loadingPageName = /#(.+)/.test(window.location.href)
      ? /#(.+)/.exec(window.location.href)[1]
      : ""

    const pageNames = ["institute", "participants", "docs"]
    const sources = {
      DAU: "./main.html",
      docs: "about.html",
      participants: "participants.html",
      institute: "institute.html",
      // docs: "https://evgeniyivanov.com",
      // participants: "https://i-m-i.ru",
      // institute: "https://alumniball.strelka.com",
    }
    const pages = {
      DAU: document.getElementsByClassName("main")[0],
    }
    const links = {
      DAU: document.getElementById(`mainLink`),
    }

    const clearClasses = () => Object.keys(pages).forEach((pageName) => (pages[pageName].classList = pageName))

    const makeLoader = () => {
      const container = document.createElement("div")
      container.classList.add("pulse-container")
      for (let i = 0; i < 3; i++) {
        const bubble = document.createElement("div")
        bubble.classList.add(`pulse-bubble`, `pulse-bubble-${i + 1}`)
        container.appendChild(bubble)
      }
      return container
    }

    pageNames.forEach((pageName) => {
      const page = document.createElement("iframe")
      page.classList.add(pageName)
      page.style.width = "100%"
      page.style.height = "100%"
      page.src = sources[pageName]
      page.onload = () => onFrameLoad(page)
      pages[pageName] = page
      console.log('page.src', page.src)
      document.body.appendChild(page)
      if (loadingPageName === pageName) {
        clearClasses()
        page.classList.add("visible")
      }
    })

    pageNames.concat("DAU").forEach((pageName) => {
      const link = document.createElement("span")
      link.classList.add("link")
      link.id = `${pageName}Link`
      if (pageName === "DAU") {
        link.classList.add("active")
        link.innerHTML = pageName
      } else {
        const loader = makeLoader()
        link.appendChild(loader)
      }
      document.body.appendChild(link)
      links[pageName] = link
      link.addEventListener("click", () => {
        window.history.pushState(pageName, pageName, pageName === "DAU" ? " " : `#${pageName}`)
        clearClasses()
        pages[pageName].classList.add("visible")
      })
    })

    if (loadingPageName === "") {
      clearClasses()
      pages.DAU.classList.add("visible")
    }
  },
  true
)
