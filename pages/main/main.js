import { TimelineLite } from "gsap/TweenMax"
import { enableSplitText } from "../../helpers/utils"

enableSplitText()

// const CONTENT_BASE_WIDTH = 1050
// const CONTENT_BASE_HEIGHT = 800

// const resizeContent = () => {

//     const scale = Math.min(
//       window.innerWidth / CONTENT_BASE_WIDTH,
//       window.innerHeight / CONTENT_BASE_HEIGHT,
//     )

//     const transform = `translateX(-50%) translateY(-50%) scale(${scale})`

//     const content = document.getElementById('content')

//     content.style.webkitTransform = transform
//     content.style.MozTransform = transform
//     content.style.msTransform = transform
//     content.style.OTransform = transform
//     content.style.transform = transform
// }

document.addEventListener("DOMContentLoaded", () => {
  // window.addEventListener('resize', () => {
  //     resizeContent()
  // })

  // resizeContent()

  const tl = new TimelineLite({ paused: true })

  tl.staggerTo(
    "#linesContainer",
    0.2,
    {
      width: "98%",
      height: "96%",
    },
    0,
    "+=.5"
  )

  const theRelease = new SplitText(".theRelease", { type: "chars" })
  tl.staggerFromTo(
    theRelease.chars,
    0.024,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=0"
  )

  const whichTook = new SplitText("#whichTook", { type: "chars" })
  tl.staggerFromTo(
    whichTook.chars,
    0.024,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=0"
  )
  tl.staggerFromTo(
    "#whichTook>.carriage",
    0.12,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      repeat: 3,
      yoyo: true,
    },
    0.12,
    "+=0.096"
  )

  const from = new SplitText("#from", { type: "chars" })
  tl.staggerFromTo(
    from.chars,
    0.024,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=0"
  )
  tl.staggerFromTo(
    "#from24>.carriage",
    0.12,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      repeat: 3,
      yoyo: true,
    },
    0.12,
    "+=0.096"
  )

  const jan24 = new SplitText(".jan24", { type: "chars" })
  tl.staggerFromTo(
    jan24.chars,
    0.024,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=0"
  )

  const to = new SplitText("#to", { type: "chars" })
  tl.staggerFromTo(
    to.chars,
    0.024,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=.5"
  )
  tl.staggerFromTo(
    "#to17>.carriage",
    0.12,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      repeat: 3,
      yoyo: true,
    },
    0.12,
    "+=0"
  )

  const feb17 = new SplitText(".feb17", { type: "chars" })
  tl.staggerFromTo(
    feb17.chars,
    0.024,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=0"
  )

  tl.staggerFromTo(
    "#over>.carriage",
    0.12,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      repeat: 7,
      yoyo: true,
    },
    0.12,
    "+=0.096"
  )

  const isNow = new SplitText("#isNow", { type: "chars" })
  tl.staggerFromTo(
    isNow.chars,
    0.072,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
    },
    0.072,
    "+=0"
  )

  tl.staggerFromTo(
    "#weLook>.carriage",
    0.12,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      repeat: 7,
      yoyo: true,
    },
    0.12,
    "+=0.096"
  )

  const weLook = new SplitText("#weLook", { type: "chars" })
  tl.staggerFromTo(
    weLook.chars,
    0.024,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=0"
  )

  tl.staggerTo(
    "#weLook",
    0.096,
    {
      marginTop: '2em',
    },
    0,
    "+=0"
  )

  const soon = new SplitText("#soon", { type: "chars" })
  tl.staggerFromTo(
    soon.chars,
    0.024,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=0"
  )

  tl.set("#disapContainer", {opacity: 0}, "+=0.125")
  tl.staggerTo(
      "#disapContainer",
      .3,
      {
        height: 0,
      },
      0,
      "+=0"
    )
  tl.staggerTo(
      "#weLook",
      .036,
      {
        marginTop: 0,
      },
      0,
      "+=0"
    )

  const register = new SplitText("#register", { type: "chars" })
  tl.staggerFromTo(
    register.chars,
    0.024,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0.024,
    "+=0"
  )
  tl.staggerFromTo(
    "#register>.carriage",
    0.12,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      repeat: 1,
      yoyo: true,
    },
    0.12,
    "+=0.012"
  )

  tl.staggerFrom(
    ".mc-field-group",
    0.5,
    {
      width: 0,
    },
    0.2,
    "-=.25"
  )

  tl.set("#mc-embedded-subscribe", {visibility: "visible"}, "+=0")

  tl.play()
})
