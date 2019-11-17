export const addPicChanger = (document) => {
  const shown = document.getElementById('alina');

  const thumbnails = shown.getElementsByTagName('img');
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', (e) => {
      const prev = shown.getElementsByClassName('selected')
      if (prev.length > 0) prev[0].classList.remove('selected')
      e.target.classList.add('selected');
      shown.style.backgroundImage = `url(${e.target.getAttribute('src')})`
    })
  }
}

