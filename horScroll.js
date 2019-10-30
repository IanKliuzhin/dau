// const participantsAspRat = 5019 / 2133
// const instituteAspRat = 24219 / 2133

// document.addEventListener('DOMContentLoaded', () => {
//   const bg = document.getElementById("bg");
//   bg.addEventListener('wheel', (event) => {
//     const offsetPX = window.getComputedStyle(bg).getPropertyValue('background-position-x')
//     const offset = parseInt(offsetPX, 10)
//     const clientHeight = document.documentElement.clientHeight
//     const clientWidth = document.documentElement.clientWidth
//     const aspRat = bg.classList.contains('participantsBG') ? participantsAspRat : instituteAspRat
//     const imgWidth = parseInt(clientHeight * aspRat, 10)
//     const delta = event.wheelDelta
//     if (offset + delta > 0) bg.style.backgroundPositionX
//     else if (offset + delta + imgWidth < clientWidth) bg.style.backgroundPositionX = clientWidth - imgWidth
//     else bg.style.backgroundPositionX = offset + delta + 'px'
//   })
// });

document.addEventListener('wheel', (e) => {
  // var item = document.documentElement;
  // console.log(e.deltaY);
  // if (e.deltaY > 0) item.scrollLeft += 100;
  // else item.scrollLeft -= 100;
  var item = document.documentElement;
  // console.log(e.deltaY);
  // console.log(item.scrollLeft);
  item.scrollLeft += 25 * e.deltaY;
});
