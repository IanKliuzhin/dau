import "./index.css"

import { enableSplitText, } from "./utils"
import { TimelineLite, } from "gsap/TweenMax"

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

  const tl = new TimelineLite({ paused: true, })

  tl.staggerTo(
    "#linesContainer",
    0.2,
    {
      width: "98%",
      height: "98%",
    },
    0,
    "+=.5"
  )
  // const tlGirl = new TimelineLite({paused: true})
  const theRelease = new SplitText(".theRelease", { type: "chars", })
  const whichTook = new SplitText("#whichTook", { type: "chars", })
  const from = new SplitText("#from", { type: "chars", })
  const jan24 = new SplitText(".jan24", { type: "chars", })
  const to = new SplitText("#to", { type: "chars", })
  const feb17 = new SplitText(".feb17", { type: "chars", })
  const isNow = new SplitText("#isNow", { type: "chars", })
  const weLook = new SplitText("#weLook", { type: "chars", })
  const soon = new SplitText("#soon", { type: "chars", })
  const register = new SplitText("#register", { type: "chars", })
  // const threeMonths = new SplitText('#threeMonths', {type: 'chars'})

  // tlGirl.to('#girl', 3.1, {transform: "rotate(-15deg)"})

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
    "+=1"
  )
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

  tl.set("#disapContainer", {opacity: 0,}, "+=0.25")
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
  // tl.set("#for_details", {opacity: 1}, "+=.3")
  // tl.set("#details", {opacity: 1}, "+=0")

  // tl.staggerFrom (
  //     ["#redmi", "#price"],
  //     .2,
  //     {width: 0, paddingLeft: 0, paddingRight: 0},
  //     .2,
  //     "+=.2"
  // )

  // tl.staggerFromTo(
  //     ".violet_circle",
  //     .3,
  //     {opacity: 0, scale: 0},
  //     {opacity: 1, scale: 1.1},
  //     .1,
  //     "+=.3"
  //   )

  // tl.staggerFromTo(
  //     "#girl",
  //     .2,
  //     {scale: 1},
  //     {scale: 1.1},
  //     .1,
  //     "-=.1"
  // )

  // tl.staggerTo(
  //     [".violet_circle", "#girl"],
  //     .2,
  //     {scale: 1},
  //     .1,
  //     "-=.2"
  // )

  // tlGirl.play()
  tl.play()
})
