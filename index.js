import { addNumsPicChanger, addPointsPicChanger, addThumbnailsPicChanger } from "./helpers/picChange";
import {getHTML} from './getHTML'

const pageNames = ["main", "institute", "participants", "documents"]
const linkTitles = {
  main: "DAU",
  institute: "The Institute",
  participants: "Participants",
  documents: "Documents",
}
const sources = {
  main: "pages/main/main.html",
  documents: "pages/documents/index.html",
  participants: "pages/participants/index.html",
  institute: "pages/institute/index.html",
}
const contents = {
  main: "pages/main/main.html",
  documents: "pages/documents/documents.html",
  participants: "pages/participants/participants.html",
  institute: "pages/institute/institute.html",
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
      if (animElem) animElem.classList.add('animated')
      let content = ''
      getHTML(contents[pageName], function (response) {
        content = response.getElementById('scrollContainer');
        if (content) {
          const body = page.contentWindow.document.getElementsByTagName('body')[0]
          body.appendChild(content)
          body.classList.add('loaded')
          page.classList.add('loaded')
          if (pageName === 'participants') {
            addThumbnailsPicChanger(page.contentWindow.document)
            addPointsPicChanger(page.contentWindow.document)
          } else if (pageName === "institute") {
            addNumsPicChanger(page.contentWindow.document)
          }
        }
      });
    }

    pageNames.forEach((pageName) => {
      const page = document.createElement("iframe")
      page.classList.add(pageName)
      if (pageName === "main") {
        page.classList.add('visible')
      }
      page.style.width = "100%"
      page.style.height = "100%"
      document.body.appendChild(page)
      pages[pageName] = page
      // page.src = sources[pageName]
      page.src = sources[pageName]
      if (loadingPageName === "" && pageName === "main") {
        page.classList.add('visible')
      } else if (loadingPageName === pageName) {
        clearVisibiles()
        setTimeout(() => {
          loadPageContent(pageName)
          page.classList.add("loaded", "visible")
        }, 300);
      }
    })

    const showLinksBar = () => {
      const linksBar = document.getElementById('linksBar')
      const linesContainer = document.getElementById('linesContainer')
      linesContainer.removeEventListener('click', showLinksBar)
      Object.entries(links).forEach(([,link]) => link.classList.remove('visible', 'chosen'))
      linksBar.classList.remove('folded')
      linksBar.classList.add('expanded')
      clearVisibiles()
      setTimeout(() => {
        Object.entries(links).forEach(([,link]) => link.classList.add('visible'))
      }, 1000);
    }

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
        const linksBar = document.getElementById('linksBar')
        linksBar.classList.remove('expanded')
        linksBar.classList.add('above', 'folded')
        Object.entries(links).forEach(([,link]) => link.classList.remove('visible'))
        const linesContainer = document.getElementById('linesContainer')
        setTimeout(() => {
          link.classList.add('chosen', 'visible')
          linksBar.classList.remove('above')
          linesContainer.classList.add('clickable')
          linesContainer.addEventListener('click', showLinksBar)
        }, 1000);
        if (!page.classList.contains('loaded')) {
          loadPageContent(pageName)
        }
      })
    })

    if (loadingPageName === '') {
      setTimeout(() => {
        document.getElementById('linesContainer').classList.add('shown')
        Object.entries(links).forEach(([,link]) => link.classList.add('visible'))
      }, 300);
    } else {
      document.getElementById('linksBar').classList.add('folded')
      setTimeout(() => {
        document.getElementById('linesContainer').classList.add('shown')
        links[loadingPageName].classList.add('visible', 'chosen')
      }, 1000);
    }
  },
  true
)
