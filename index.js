import {getHTML} from './getHTML'
import { addPicChanger } from "./helpers/picChange";

const pageNames = ["main", "institute", "participants", "documents"]
const linkTitles = {
  main: "DAU",
  institute: "Institute",
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
      // console.log(pages[pageName].contentDocument)
      const page = pages[pageName]
      const animElem = page.contentDocument.getElementsByClassName('screensaver')[0]
      animElem.classList.add('animated')
      let content = ''
      getHTML(contents[pageName], function (response) {
        content = response.getElementById('scrollContainer');
      });
      setTimeout(() => {
        const body = page.contentDocument.getElementsByTagName('body')[0]
        body.appendChild(content)
        body.classList.add('loaded')
        page.classList.add('loaded')
        if (pageName === 'participants') addPicChanger(page.contentDocument)
      }, 1000);
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
      link.classList.add('link', pageName, 'active')
      link.innerHTML = linkTitles[pageName]
      document.body.appendChild(link)
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

    if (loadingPageName === "") {
      clearVisibiles()
      pages.main.classList.add("visible", "loaded")
    }
  },
  true
)
