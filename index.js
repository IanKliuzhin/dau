import { addNumsPicChanger, addNumsPicChanger2, addPointsPicChanger, addThumbnailsPicChanger } from "./helpers/picChange";
import { addVertScroll } from "./helpers/vertScroll";
import {getHTML} from './helpers/getHTML'
import { lazyLoadImages } from "./helpers/lazyImagesLoader";
import { makeMapHints } from "./helpers/mapHintsMaker";

const pageNames = ["main", "institute", "participants", "about"]
const linkTitles = {
  main: "DAU",
  institute: "The Institute [Coming Soon]",
  participants: "Participants [Coming Soon]",
  about: "About DAU Project",
}
const sources = {
  main: "pages/main/main.html",
  about: "pages/about/about.html",
  participants: "pages/participants/index.html",
  institute: "pages/institute/index.html",
}
const contents = {
  main: "pages/main/main.html",
  about: "pages/about/about.html",
  participants: "pages/participants/participants.html",
  institute: "pages/institute/institute.html",
}

document.addEventListener(
  "DOMContentLoaded",
  (e) => {
    // console.log(e)
    if (e.target.defaultView.frameElement) return

    const getVisiblePageName = () => (/#(.+)/.test(window.location.href) ? /#(.+)/.exec(window.location.href)[1] : 'main')

    const loadingPageName = /#(.+)/.test(window.location.href) ? /#(.+)/.exec(window.location.href)[1] : ""
    const pages = {}
    const links = {}

    const clearVisibiles = () => Object.keys(pages).forEach((pageName) => (pages[pageName].classList.remove('visible')))

    const changePage = (pageName, oldPageName) => {
      window.history.pushState(pageName, pageName, pageName === "main" ? " " : `#${pageName}`)
      clearVisibiles()
      const oldPage = pages[oldPageName]
      const newPage = pages[pageName]
      newPage.classList.add("visible", "withTransition")
      Object.keys(pages).forEach((pageName) => (pages[pageName].classList.remove('when_main', 'when_institute', 'when_participants', 'when_about')))
      Object.keys(pages).forEach((pageName) => (pages[pageName].classList.add(`when_${getVisiblePageName()}`)))
      oldPage.classList.add("withTransition")
      const linksBar = document.getElementById('linksBar')
      linksBar.classList.remove('expanded')
      linksBar.classList.add('above', 'folded')
      Object.entries(links).forEach(([,link]) => link.classList.remove('visible', 'clickable'))
      const burger = document.getElementById('burger')
      burger.classList.add('clicked')
      if (pageName === "main") {
        pages.main.contentWindow.document.getElementById('linesContainer').classList.add('shown')
        const lines = pages.main.contentWindow.document.getElementById('lines')
        lines.style.width = ""
        lines.style.height = ""
      }
      setTimeout(() => {
        Object.keys(links).forEach((pN) => {
          if (pN === pageName) links[pN].classList.add("chosen", "visible")
          else links[pN].classList.add("clickable")
        })
        // links[pageName].classList.add('chosen', 'visible')
        linksBar.classList.remove('above')
        burger.classList.add('clickable')
        burger.addEventListener('click', showLinksBar)
        Object.keys(pages).forEach((pageName) => (pages[pageName].classList.remove('withTransition')))
        if (oldPageName === "main") pages.main.contentWindow.document.getElementById('linesContainer').classList.remove('shown', 'withTransition')
        // else if (pageName === "main") pages.main.contentWindow.document.getElementById('linesContainer').classList.add('shown')
        pages.main.contentWindow.document.tl.progress(1, false);
      }, 600);
      if (oldPageName === "main") pages.main.contentWindow.document.getElementById('linesContainer').classList.remove('withTransition')
      // if (!newPage.classList.contains('loaded')) {
      //   loadPageContent(pageName)
      // }
      switch (pageName) {
        case 'main':
          addVertScroll(pages.main, pages.about, changePage)
          break;
        case 'about':
          lazyLoadImages(newPage.contentWindow.document)
          addNumsPicChanger2(newPage.contentWindow.document)
          break;
        default:
          break;
      }
    }

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
            const scroll = sessionStorage.getItem('scroll_participants')
            addThumbnailsPicChanger(page.contentWindow.document)
            addPointsPicChanger(page.contentWindow.document)
            lazyLoadImages(page.contentWindow.document)
            if (scroll) {
              page.contentWindow.document.documentElement.scrollLeft = parseInt(scroll, 0)
              page.contentWindow.document.body.scrollLeft = parseInt(scroll, 0)
            }
          } else if (pageName === "institute") {
            const scroll = sessionStorage.getItem('scroll_institute')
            if (scroll) {
              page.contentWindow.document.documentElement.scrollLeft = parseInt(scroll, 0)
              page.contentWindow.document.body.scrollLeft = parseInt(scroll, 0)
            }
            addNumsPicChanger(page.contentWindow.document)
            makeMapHints(page.contentWindow.document)
            lazyLoadImages(page.contentWindow.document)
          } else if (pageName === "about") {
            // lazyLoadImages(page.contentWindow.document)
            addNumsPicChanger2(page.contentWindow.document)
          }
        }
      });
    }

    const releasePageNames = ["main", "about"]

    releasePageNames.forEach((pageName) => {
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
      } else if (loadingPageName === 'about') {
        // clearVisibiles()
        // setTimeout(() => {
        //   // loadPageContent(pageName)
        //   page.classList.add("loaded", "visible")
        //   // lazyLoadImages(page.contentWindow.document)
        //   addNumsPicChanger2(page.contentWindow.document)
        // }, 300);
        setTimeout(() => {
          changePage('about', 'main')
        }, 500);
      }
    })

    const showLinksBar = () => {
      const linksBar = document.getElementById('linksBar')
      const burger = document.getElementById('burger')
      burger.removeEventListener('click', showLinksBar)
      Object.entries(links).forEach(([,link]) => link.classList.remove('visible', 'clickable', 'chosen'))
      linksBar.classList.remove('folded')
      linksBar.classList.add('expanded')
      clearVisibiles()
      setTimeout(() => {
        Object.entries(links).forEach(([,link]) => link.classList.add('visible', 'clickable'))
      }, 1000);
    }

    pageNames.forEach((pageName) => {
      const link = document.createElement("span")
      link.classList.add('link', pageName)
      link.innerHTML = linkTitles[pageName]
      document.getElementById('linksBar').appendChild(link)
      links[pageName] = link
      if (pageName === 'main' || pageName === 'about') link.addEventListener("click", () => {
        const oldPageName = getVisiblePageName()
        changePage(pageName, oldPageName)
      })
      else link.classList.add('disabled')
    })

    const burger = document.getElementById('burger')
    if (loadingPageName === '') {
      setTimeout(() => {
        if (burger) burger.classList.add('shown')
        Object.entries(links).forEach(([pageName,link]) => (pageName !== 'main') && link.classList.add('visible'))
        links.about.classList.add('clickable')
        // console.log('pages.main.contentWindow.document.getElementById("linesContainer")', pages.main.contentWindow.document.getElementById("linesContainer"));
        pages.main.contentWindow.document.getElementById('linesContainer').classList.add('shown')
      }, 650);
      setTimeout(() => {
        pages.main.contentWindow.document.getElementById('linesContainer').classList.remove('withTransition')
        addVertScroll(pages.main, pages.about, changePage)
      }, 1500);
    } else {
      document.getElementById('linksBar').classList.add('folded')
      if (burger) burger.classList.add('clicked')
      setTimeout(() => {
        burger.classList.add('shown', 'clickable')
        burger.addEventListener('click', showLinksBar)
        links[loadingPageName].classList.add('visible', 'chosen')
        links.main.classList.add('clickable')
      }, 1000);
    }
  },
  true
)
