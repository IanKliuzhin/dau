export const getHTML = (url, callbackFn) => {
  // Feature detection
  if (!window.XMLHttpRequest) return

  // Create new request
  var xhr = new XMLHttpRequest()

  // Setup callbackFn
  xhr.onload = function() {
    if (callbackFn && typeof callbackFn === "function") {
      callbackFn(this.responseXML)
    }
  }

  // Get the HTML
  xhr.open("GET", url)
  xhr.responseType = "document"
  xhr.send()
}
