import './index.css'

import {enableSplitText} from './utils'
import {TimelineLite} from 'gsap/TweenMax'

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

document.addEventListener('DOMContentLoaded', () => {

    // window.addEventListener('resize', () => {
    //     resizeContent()
    // })

    // resizeContent()

    const tl = new TimelineLite({paused: true})

    tl.staggerTo(
      "#linesContainer",
      1,
      {
        width: '95%',
        height: '95%',
      },
      0,
      "+=0"
    )
    // const tlGirl = new TimelineLite({paused: true})
    // const openSeason = new SplitText('#openSeason', {type: 'chars'})
    // const threeMonths = new SplitText('#threeMonths', {type: 'chars'})

    // tlGirl.to('#girl', 3.1, {transform: "rotate(-15deg)"})

    // tl.staggerFromTo(
    //     openSeason.chars,
    //     .012,
    //     {
    //       opacity: 0
    //     },
    //     {
    //         opacity: 1,
    //     },
    //     .012,
    //     "+=1"
    //   )

    // tl.staggerFromTo(
    //     threeMonths.chars,
    //     .012,
    //     {
    //       opacity: 0
    //     },
    //     {
    //       opacity: 1,
    //     },
    //     .012,
    //     "+=0"
    //   )

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