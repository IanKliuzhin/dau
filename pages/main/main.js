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

  // const berlinale = new SplitText(".berlinale", { type: "words" })
  // berlinale.words.forEach((word) => {
  //   const splittedWord = new SplitText(word, { type: "chars" })
  //   tl.staggerFromTo(
  //     splittedWord.chars,
  //     0.024,
  //     {
  //       opacity: 0.1,
  //     },
  //     {
  //       opacity: 1,
  //     },
  //     0.024,
  //     "+=0"
  //   )
  // })

  const dauNat = new SplitText(".dau_nat", { type: "chars" })
  tl.staggerFromTo(
    dauNat.chars,
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

  const silvBear = new SplitText(".silv_bear", { type: "chars" })
  tl.staggerFromTo(
    silvBear.chars,
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
    ".silv_bear>.carriage",
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

  const forOutst = new SplitText(".for_outst", { type: "words" })
  forOutst.words.forEach((word) => {
    const splittedWord = new SplitText(word, { type: "chars" })
    tl.staggerFromTo(
      splittedWord.chars,
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
  })

  tl.staggerFromTo(
    ".for_outst>.carriage",
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

  const jurJur = new SplitText(".jur_jur", { type: "chars" })
  tl.staggerFromTo(
    jurJur.chars,
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

  const at70th = new SplitText(".at_70th", { type: "chars" })
  tl.staggerFromTo(
    at70th.chars,
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

  const filmFest = new SplitText(".film_fest", { type: "chars" })
  tl.staggerFromTo(
    filmFest.chars,
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

  // tl.staggerTo(
  //     "#shiftContainer",
  //     .3,
  //     {
  //       marginLeft: '5em',
  //     },
  //     0,
  //     "+=0"
  //   )

  tl.staggerFromTo(
    ".film_fest>.carriage",
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

  const dauDeg = new SplitText(".dau_deg", { type: "chars" })
  tl.staggerFromTo(
    dauDeg.chars,
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

  const berSpec = new SplitText(".ber_spec", { type: "chars" })
  tl.staggerFromTo(
    berSpec.chars,
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
    ".ber_spec>.carriage",
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

  tl.play()
  document.tl = tl;

  enableSubmit(document)
})
