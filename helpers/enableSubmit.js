export const enableSubmit = (doc) => {
  const [input, submit] = doc.getElementById('mc_embed_signup_scroll').getElementsByTagName('input')

  const instantValidation = (input) => {
    const invalid = !input.value || input.getAttribute("pattern") && input.value && !new RegExp(input.getAttribute("pattern")).test(input.value)
    if (invalid) submit.classList.remove('enabled')
    else submit.classList.add('enabled')
  }

  if (input.addEventListener) {
    input.addEventListener('input', function(e) {
      instantValidation(e.target);
    }, false);
  } else if (input.attachEvent) {
    input.attachEvent('oninput', function(e) {
      instantValidation(e.srcElement);
    });
  }

  const success = doc.getElementById('mce-success-response')

  const respondToVisibility = (element, callback) => {
    var observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.intersectionRatio > 0);
      });
    });
    observer.observe(element);
  }

  respondToVisibility(success, (visible) => {
    if (visible) {
      doc.getElementById('mc_embed_signup_scroll').getElementsByClassName('mc-field-group')[0].style.display = "none"
      doc.getElementById('mc_embed_signup_scroll').getElementsByClassName('agreement')[0].style.display = "none"
    }
  })
}
