import { TimelineLite } from "gsap/TweenMax"
import { enableSplitText } from "../../helpers/utils"
import { enableSubmit } from "../../helpers/enableSubmit"

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

  const theRelease = new SplitText(".berlinale", { type: "chars" })
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
    "+=0.7"
  )

  const whichTook = new SplitText(".at_fest", { type: "chars" })
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

  tl.staggerTo(
      "#shiftContainer",
      .3,
      {
        marginLeft: '5em',
      },
      0,
      "+=0"
    )

  tl.staggerFromTo(
    ".at_fest>.carriage",
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

  const from = new SplitText(".nat_title", { type: "chars" })
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
  const nat = new SplitText(".nat", { type: "chars" })
  tl.staggerFromTo(
    nat.chars,
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
    ".nat>.carriage",
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

  const jan24 = new SplitText(".nat_date", { type: "chars" })
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

  const natTbcDate = new SplitText(".nat_tbc_date", { type: "chars" })
  tl.staggerFromTo(
    natTbcDate.chars,
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

  const to = new SplitText(".nat_place", { type: "chars" })
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

  const natTbcPlace = new SplitText(".nat_tbc_place", { type: "chars" })
  tl.staggerFromTo(
    natTbcPlace.chars,
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
    ".nat_tbc_place>.carriage",
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

  const feb17 = new SplitText(".deg_title", { type: "chars" })
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

  const deg = new SplitText(".deg", { type: "chars" })
  tl.staggerFromTo(
    deg.chars,
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

  const degDate = new SplitText(".deg_date", { type: "chars" })
  tl.staggerFromTo(
    degDate.chars,
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

  const degTbcDate = new SplitText(".deg_tbc_date", { type: "chars" })
  tl.staggerFromTo(
    degTbcDate.chars,
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

  const degPlace = new SplitText(".deg_place", { type: "chars" })
  tl.staggerFromTo(
    degPlace.chars,
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

  const degTbcPlace = new SplitText(".deg_tbc_place", { type: "chars" })
  tl.staggerFromTo(
    degTbcPlace.chars,
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
    ".deg_tbc_place>.carriage",
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

  const isNow = new SplitText(".feb_11", { type: "chars" })
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
    ".feb_11>.carriage",
    0.12,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      repeat: 6,
      yoyo: true,
    },
    0.12,
    "+=0"
  )

  tl.set(".feb_11>.carriage", {opacity: 0}, "+=0")


  // tl.staggerFromTo(
  //   "#weLook>.carriage",
  //   0.12,
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //     repeat: 7,
  //     yoyo: true,
  //   },
  //   0.12,
  //   "+=0.096"
  // )

  // const weLook = new SplitText("#weLook", { type: "chars" })
  // tl.staggerFromTo(
  //   weLook.chars,
  //   0.024,
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //   },
  //   0.024,
  //   "+=0"
  // )

  // tl.staggerTo(
  //   "#weLook",
  //   0.096,
  //   {
  //     marginTop: '2em',
  //   },
  //   0,
  //   "+=0"
  // )

  // const soon = new SplitText("#soon", { type: "chars" })
  // tl.staggerFromTo(
  //   soon.chars,
  //   0.024,
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //   },
  //   0.024,
  //   "+=0"
  // )

  // tl.set("#disapContainer", {opacity: 0}, "+=0.125")
  // tl.staggerTo(
  //     "#disapContainer",
  //     .3,
  //     {
  //       height: 0,
  //     },
  //     0,
  //     "+=0"
  //   )
  // tl.staggerTo(
  //     "#weLook",
  //     .036,
  //     {
  //       marginTop: 0,
  //     },
  //     0,
  //     "+=0"
  //   )

  // const register = new SplitText("#register", { type: "chars" })
  // tl.staggerFromTo(
  //   register.chars,
  //   0.024,
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //   },
  //   0.024,
  //   "+=0"
  // )
  // tl.staggerFromTo(
  //   "#register>.carriage",
  //   0.12,
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //     repeat: 1,
  //     yoyo: true,
  //   },
  //   0.12,
  //   "+=0.012"
  // )

  // tl.staggerFrom(
  //   ".mc-field-group",
  //   0.5,
  //   {
  //     width: 0,
  //   },
  //   0.2,
  //   "-=.25"
  // )

  // tl.set("#mc-embedded-subscribe", {visibility: "visible"}, "+=0")

  tl.play()
  document.tl = tl;

  enableSubmit(document)
})
