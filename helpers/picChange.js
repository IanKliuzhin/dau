export const addThumbnailsPicChanger = (doc) => {
  const showns = [doc.getElementById('alina'), doc.getElementById('vika')];

  showns.forEach((shown) => {
    const thumbnails = shown.getElementsByTagName('img');
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('click', (e) => {
        const prev = shown.getElementsByClassName('selected')
        if (prev.length > 0) prev[0].classList.remove('selected')
        e.target.classList.add('selected');
        shown.style.backgroundImage = `url(${e.target.getAttribute('src')})`
      })
    }
  });
}

export const addPointsPicShanger = (doc) => {
  const containers = [doc.getElementById('nora'), doc.getElementById('vika2')]
  containers.forEach((container) => {
    const shown = container.getElementsByClassName('shown');
    const points = container.getElementsByClassName('point');
    for (var i = 0; i < points.length; i++) {
      points[i].addEventListener('click', (e) => {
        const prev = container.getElementsByClassName('selected')
        if (prev.length > 0) prev[0].classList.remove('selected')
        e.target.classList.add('selected');
        shown[0].className = `shown selected_${e.target.getAttribute('data-id')}`
      })
    }
  })
}
