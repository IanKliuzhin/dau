import {getHTML} from './getHTML'

// const onFrameLoad = (frame) => {
//   // console.log("frame loaded")
//   const pageName = frame.classList[0]
//   const link = document.getElementById(`${pageName}Link`)
//   link.innerHTML = pageName
//   link.classList.add("active")
// }

document.addEventListener(
  "DOMContentLoaded",
  (e) => {
    console.log(e)
    if (e.target.defaultView.frameElement) return

    const loadingPageName = /#(.+)/.test(window.location.href)
      ? /#(.+)/.exec(window.location.href)[1]
      : ""

    const pageNames = ["DAU", "institute", "participants", "docs"]
    const sources = {
      DAU: "./pages/main/main.html",
      docs: "./pages/about/about.html",
      participants: "./pages/participants/participants.html",
      institute: "./pages/institute/institute.html",
    }
    const pages = {
      // DAU: document.getElementsByClassName("main")[0],
    }
    const links = {
      // DAU: document.getElementById(`mainLink`),
    }

    const clearVisibileClasses = () => Object.keys(pages).forEach((pageName) => (pages[pageName].classList.remove('visible')))

    const loadPageContent = (pageName) => {
      console.log(pages[pageName].contentDocument)
      const page = pages[pageName]
      const animElem = page.contentDocument.getElementsByTagName('div')[0]
      animElem.classList.add('animated')
      let content = ''
      getHTML(sources[pageName], function (response) {
        content = response.documentElement.innerHTML;
      });
      setTimeout(() => {
        animElem.classList.remove('animated')
        page.srcdoc = content;
        page.classList.add('loaded')
      }, 7000);
    }

    // const makeLoader = () => {
    //   const container = document.createElement("div")
    //   container.classList.add("pulse-container")
    //   for (let i = 0; i < 3; i++) {
    //     const bubble = document.createElement("div")
    //     bubble.classList.add(`pulse-bubble`, `pulse-bubble-${i + 1}`)
    //     container.appendChild(bubble)
    //   }
    //   return container
    // }

    pageNames.forEach((pageName) => {
      const page = document.createElement("iframe")
      page.classList.add(pageName)
      page.style.width = "100%"
      page.style.height = "100%"
      document.body.appendChild(page)
      pages[pageName] = page
      // page.src = sources[pageName]
      if (pageName === "DAU") {
        page.src = sources[pageName]
      } else {
        getHTML('./screensaver.html', (response) => {
          page.srcdoc = response.documentElement.innerHTML
          // page.onload = () => onFrameLoad(page)
          // console.log('page.src', page.src)
          if (loadingPageName === pageName) {
            clearVisibileClasses()
            setTimeout(() => {
              loadPageContent(pageName)
              page.classList.add("loaded")
              page.classList.add("visible")
            }, 200);
          }
        });
      }
    })

    // pageNames.concat("DAU").forEach((pageName) => {
    pageNames.forEach((pageName) => {
      const link = document.createElement("span")
      link.classList.add("link")
      link.id = `${pageName}Link`
      // if (pageName === "DAU") {
      //   link.classList.add("active")
      //   link.innerHTML = pageName
      // } else {
      //   const loader = makeLoader()
      //   link.appendChild(loader)
      // }
      link.classList.add("active")
      link.innerHTML = pageName
      document.body.appendChild(link)
      links[pageName] = link
      link.addEventListener("click", () => {
        window.history.pushState(pageName, pageName, pageName === "DAU" ? " " : `#${pageName}`)
        clearVisibileClasses()
        const page = pages[pageName]
        page.classList.add("visible")
        if (!page.classList.contains('loaded')) {
          loadPageContent(pageName)
        }
      })
    })

    if (loadingPageName === "") {
      clearVisibileClasses()
      pages.DAU.classList.add("visible")
      pages.DAU.classList.add("loaded")
    }
  },
  true
)
