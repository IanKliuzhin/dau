import { addCountPicChanger, addNumsPicChanger, addPointsPicChanger, addThumbnailsPicChanger } from "./helpers/picChange";
import { addVertScroll } from "./helpers/vertScroll";
import {getHTML} from './helpers/getHTML'
import { lazyLoadImages } from "./helpers/lazyImagesLoader";
import { makeMapHints } from "./helpers/mapHintsMaker";

const pageNames = ["main", "institute", "participants", "digital"]
const linkTitles = {
  main: "DAU",
  institute: "The Institute",
  participants: "Participants",
  digital: "DAU&nbsp;&nbsp;&nbsp;DIGITAL&nbsp;&nbsp;(coming soon)",
}
const sources = {
  main: "pages/main/main.html",
  digital: "/",
  participants: "pages/participants/index.html",
  institute: "pages/institute/index.html",
  about: "pages/about/about.html",
}
const contents = {
  main: "pages/main/main.html",
  digital: "",
  participants: "pages/participants/participants.html",
  institute: "pages/institute/institute.html",
  about: "pages/about/about.html",
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

    const linksBar = document.getElementById('linksBar')
    const burger = document.getElementById('burger')
    const closer = burger.getElementsByClassName('closer')[0]
    const sharing = linksBar.getElementsByClassName('sharing')[0]
    const clearVisibiles = () => Object.keys(pages).forEach((pageName) => (pages[pageName].classList.remove('visible')))

    const showLinksBar = () => {
      // const linksBar = document.getElementById('linksBar')
      // const burger = document.getElementById('burger')
      burger.removeEventListener('click', showLinksBar)
      Object.entries(links).forEach(([,link]) => link.classList.remove('visible', 'clickable', 'chosen'))
      linksBar.classList.remove('folded')
      linksBar.classList.add('expanded')
      clearVisibiles()
      setTimeout(() => {
        Object.entries(links).forEach(([,link]) => link.classList.add('visible', 'clickable'))
        sharing.classList.add('visible', 'clickable')
        burger.classList.add('closeable')
        closer.addEventListener('click', hideLinksBar)
      }, 1000);
    }

    const hideLinksBar = () => {
      linksBar.classList.remove('expanded')
      linksBar.classList.add('above', 'folded')
      Object.entries(links).forEach(([,link]) => link.classList.remove('visible', 'clickable'))
      sharing.classList.remove('visible', 'clickable')
      closer.removeEventListener('click', hideLinksBar)
      burger.classList.remove('closeable')
      const vpn = getVisiblePageName()
      pages[vpn].classList.add("visible", "withTransition")
      setTimeout(() => {
        links[vpn].classList.add("chosen", "visible")
        burger.classList.add('clickable')
        burger.addEventListener('click', showLinksBar)
      }, 1000);
    }

    const changePage = (pageName, oldPageName) => {
      window.history.pushState(pageName, pageName, pageName === "main" ? " " : `#${pageName}`)
      clearVisibiles()
      const oldPage = pages[oldPageName]
      const newPage = pages[pageName]
      newPage.classList.add("visible", "withTransition")
      Object.keys(pages).forEach((pageName) => (pages[pageName].classList.remove('when_main', 'when_institute', 'when_participants', 'when_about')))
      Object.keys(pages).forEach((pageName) => (pages[pageName].classList.add(`when_${getVisiblePageName()}`)))
      if (oldPageName) oldPage.classList.add("withTransition")
      hideLinksBar()
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
        if (oldPageName && oldPageName === "main") pages.main.contentWindow.document.getElementById('linesContainer').classList.remove('shown', 'withTransition')
        if (oldPageName) pages.main.contentWindow.document.tl.progress(1, false);
      }, 600);
      if (oldPageName && oldPageName === "main") pages.main.contentWindow.document.getElementById('linesContainer').classList.remove('withTransition')
      if (!newPage.classList.contains('loaded')) {
        loadPageContent(pageName)
      }
      switch (pageName) {
        case 'main':
          addVertScroll(pages.main, pages.about, changePage)
          pages.main.contentWindow.document.getElementById('link_watch_now').addEventListener("click", openAbout)
          break;
        case 'about':
          if (oldPageName) {
            lazyLoadImages(newPage.contentWindow.document)
            addCountPicChanger(newPage.contentWindow.document)
          } else pages.about.onload = () => {
            lazyLoadImages(newPage.contentWindow.document)
            addCountPicChanger(newPage.contentWindow.document)
          }
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
            addCountPicChanger(page.contentWindow.document)
          }
        }
      });
    }

    const openAbout = () => {
      const oldPageName = getVisiblePageName()
      changePage('about', oldPageName)
    }

    const releasePageNames = ["main", "participants", "institute", "about"]

    releasePageNames.forEach((pageName) => {
      const page = document.createElement("iframe")
      page.classList.add(pageName)
      // if (pageName === "main") {
      //   page.classList.add('visible')
      // }
      page.style.width = "100%"
      page.style.height = "100%"
      document.body.appendChild(page)
      pages[pageName] = page
      page.src = sources[pageName]
      if (loadingPageName === "" && pageName === "main") {
        page.classList.add('visible')
      } else if (loadingPageName === pageName) {
        clearVisibiles()
        setTimeout(() => {
          // loadPageContent(pageName)
          // lazyLoadImages(page.contentWindow.document)
          // addCountPicChanger(page.contentWindow.document)
          changePage(pageName, null)
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
      if (releasePageNames.includes(pageName)) link.addEventListener("click", () => {
        const oldPageName = getVisiblePageName()
        changePage(pageName, oldPageName)
      })
      else link.classList.add('disabled')
    })

    const awkwardLink = document.createElement('span')
    awkwardLink.innerHTML = 'ONLINE CINEMA'
    // awkwardLink.target = '_blank'
    // awkwardLink.href = 'https://www.dau.movie/'
    awkwardLink.addEventListener("click", (e) => {
      e.stopPropagation();
      openAbout()
    })
    links.about = awkwardLink
    links.main.appendChild(awkwardLink)

    // const burger = document.getElementById('burger')
    if (loadingPageName === '') {
      pages.main.onload = () => {
        if (burger) burger.classList.add('shown')
        Object.entries(links).forEach(([pageName,link]) => (pageName !== 'main') && link.classList.add('visible', 'clickable'))
        // links.about.classList.add('clickable')
        sharing.classList.add('visible', 'clickable')
        // console.log('pages.main.contentWindow.document.getElementById("linesContainer")', pages.main.contentWindow.document.getElementById("linesContainer"));
        pages.main.contentWindow.document.getElementById('linesContainer').classList.add('shown')
        setTimeout(() => {
          pages.main.contentWindow.document.getElementById('linesContainer').classList.remove('withTransition')
          pages.main.contentWindow.document.getElementById('link_watch_now').addEventListener("click", openAbout)
          addVertScroll(pages.main, pages.about, changePage)
        }, 850);
      }
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
  true,
)
