const cadrsContainer = document.getElementById("cadrsContainer");
const cadrNumsContainer = document.getElementById("cadrNumsContainer");
const nums = cadrNumsContainer.getElementsByClassName('cadrNum')
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener('click', (e) => {
    const prev = cadrNumsContainer.getElementsByClassName('chosen');
    if (prev.length > 0) prev[0].classList.remove('chosen')
    e.target.classList.add('chosen');
    const prevCadr = cadrsContainer.getElementsByClassName('visible')
    if (prevCadr.length > 0) prevCadr[0].classList.remove('visible')
    cadrsContainer.getElementsByClassName(`cadr${i + 1}`)[0].classList.add('visible')
  })
}