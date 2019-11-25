import { addPointsPicShanger, addThumbnailsPicChanger } from "./helpers/picChange";
import {getHTML} from './getHTML'
import { TimelineLite } from "gsap/TweenMax"

const pageNames = ["main", "institute", "participants", "documents"]
const linkTitles = {
  main: "DAU",
  institute: "The Institute",
  participants: "Participants",
  documents: "Documents",
}
const sources = {
  main: "./pages/main/main.html",
  documents: "./pages/documents/index.html",
  participants: "./pages/participants/index.html",
  institute: "./pages/institute/index.html",
}
const contents = {
  main: "./pages/main/main.html",
  documents: "./pages/documents/documents.html",
  participants: "./pages/participants/participants.html",
  institute: "./pages/institute/institute.html",
}

document.addEventListener(
  "DOMContentLoaded",
  (e) => {
    // console.log(e)
    if (e.target.defaultView.frameElement) return

    const loadingPageName = /#(.+)/.test(window.location.href)
      ? /#(.+)/.exec(window.location.href)[1]
      : ""

    const pages = {}
    const links = {}

    const clearVisibiles = () => Object.keys(pages).forEach((pageName) => (pages[pageName].classList.remove('visible')))

    const loadPageContent = (pageName) => {
      // console.log(pages[pageName].contentWindow.document)
      const page = pages[pageName]
      const animElem = page.contentWindow.document.getElementsByClassName('screensaver')[0]
      animElem.classList.add('animated')
      let content = ''
      getHTML(contents[pageName], function (response) {
        content = response.getElementById('scrollContainer');
        const body = page.contentWindow.document.getElementsByTagName('body')[0]
        body.appendChild(content)
        body.classList.add('loaded')
        page.classList.add('loaded')
        if (pageName === 'participants') {
          addThumbnailsPicChanger(page.contentWindow.document)
          addPointsPicShanger(page.contentWindow.document)
        }
      });
    }

    pageNames.forEach((pageName) => {
      const page = document.createElement("iframe")
      page.classList.add(pageName)
      page.style.width = "100%"
      page.style.height = "100%"
      document.body.appendChild(page)
      pages[pageName] = page
      // page.src = sources[pageName]
      page.src = sources[pageName]
      if (pageName !== "main" && loadingPageName === pageName) {
        clearVisibiles()
        setTimeout(() => {
          loadPageContent(pageName)
          page.classList.add("loaded", "visible")
        }, 300);
      }
    })

    pageNames.forEach((pageName) => {
      const link = document.createElement("span")
      link.classList.add('link', pageName)
      link.innerHTML = linkTitles[pageName]
      document.getElementById('linksBar').appendChild(link)
      links[pageName] = link
      link.addEventListener("click", () => {
        window.history.pushState(pageName, pageName, pageName === "main" ? " " : `#${pageName}`)
        clearVisibiles()
        const page = pages[pageName]
        page.classList.add("visible")
        if (!page.classList.contains('loaded')) {
          loadPageContent(pageName)
        }
      })
    })

    const tl = new TimelineLite({ paused: true })

    tl.staggerTo(
      "#linesContainer",
      0.2,
      {
        width: "98%",
        height: "96%",
      },
      0,
      "+=1"
    )

    tl.staggerFromTo(
      [links.main, links.documents, links.institute, links.participants],
      // links.main,
      .3,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      0,
      "+=0.1"
    )
    tl.play()

    if (loadingPageName === "") {
      clearVisibiles()
      pages.main.classList.add("visible", "loaded")
    }
  },
  true
)
