export const addThumbnailsPicChanger = (doc) => {
  const showns = [doc.getElementById("alina"), doc.getElementById("vika")]

  showns.forEach((shown) => {
    const thumbnails = shown.getElementsByClassName("imgContainer")
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener("click", (e) => {
        const prev = shown.getElementsByClassName("selected")
        if (prev.length > 0) prev[0].classList.remove("selected")
        e.target.classList.add("selected")
        shown.style.backgroundImage = window.
          getComputedStyle(e.target.getElementsByClassName("img")[0]).
          getPropertyValue("background-image")
      })
    }
  })
}

export const addPointsPicChanger = (doc) => {
  const containers = [
    doc.getElementById("nora"),
    doc.getElementById("vika2"),
    doc.getElementById("natasha"),
    doc.getElementById("degeneration"),
  ]
  containers.forEach((container) => {
    const shown = container.getElementsByClassName("shown")
    const points = container.getElementsByClassName("clickableArea")
    for (var i = 0; i < points.length; i++) {
      points[i].addEventListener("click", (e) => {
        const prev = container.getElementsByClassName("selected")
        if (prev.length > 0) prev[0].classList.remove("selected")
        e.target.classList.add("selected")
        shown[0].className = `shown selected_${e.target.getAttribute("data-id")}`
      })
    }
  })
}

export const addNumsPicChanger = (doc) => {
  const cadrsContainer = doc.getElementById("cadrsContainer")
  const cadrNumsContainer = doc.getElementById("cadrNumsContainer")
  const nums = cadrNumsContainer.getElementsByClassName("cadrNum")
  for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", (e) => {
      const prev = cadrNumsContainer.getElementsByClassName("chosen")
      if (prev.length > 0) prev[0].classList.remove("chosen")
      e.target.classList.add("chosen")
      const prevCadr = cadrsContainer.getElementsByClassName("visible")
      if (prevCadr.length > 0) prevCadr[0].classList.remove("visible")
      cadrsContainer.getElementsByClassName(`cadr${i + 1}`)[0].classList.add("visible")
    })
  }
}

export const addNumsPicChanger2 = (doc) => {
  const cadrsContainers = doc.getElementsByClassName("cadrsContainer")
  const cadrNumsContainers = doc.getElementsByClassName("cadrNumsContainer")
  for (let j = 0; j < cadrsContainers.length; j++) {
    const nums = cadrNumsContainers[j].getElementsByClassName("cadrNum")

    for (let i = 0; i < nums.length; i++) {
      const changeNumByClick = (e) => {
        const prev = cadrNumsContainers[j].getElementsByClassName("chosen")
        if (prev.length > 0) prev[0].classList.remove("chosen")
        e.target.classList.add("chosen")
        const prevCadr = cadrsContainers[j].getElementsByClassName("visible")
        if (prevCadr.length > 0) prevCadr[0].classList.remove("visible")
        cadrsContainers[j].getElementsByClassName(`cadr${i + 1}`)[0].classList.add("visible")
      }
      nums[i].addEventListener("click", changeNumByClick, false)
    }

    const changeCadrByClick = () => {
      const prevNum = cadrNumsContainers[j].getElementsByClassName("chosen")
      if (prevNum.length > 0) {
        const curNumber = parseInt(prevNum[0].innerHTML, 10)
        const nextNumber = curNumber > nums.length - 1 ? 1 : curNumber + 1
        prevNum[0].classList.remove("chosen")
        cadrNumsContainers[j].getElementsByClassName(`cadrNum${nextNumber}`)[0].classList.add("chosen")
        const prevCadr = cadrsContainers[j].getElementsByClassName("visible")
        if (prevCadr.length > 0) prevCadr[0].classList.remove("visible")
        cadrsContainers[j].getElementsByClassName(`cadr${nextNumber}`)[0].classList.add("visible")
      }
    }

    cadrsContainers[j].addEventListener("click", changeCadrByClick, false)
  }
}
