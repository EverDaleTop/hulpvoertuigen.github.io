const url = "http://script.google.com/macros/library/d/17hpzIJfd2Nh_5uFyj9ddZaSbw1nrDH4VikWdDBpzaBpPpSVXvgUZqK6-/5"
const id = "AKfycbyvqgIWnYuGnIdNkD--JvZQGhOgsXAfZ-2W9ahJQC_NT9iiI8ssOmB1RMGle2TgOV-n"
const searchBtn = document.getElementById("search_button")

searchBtn.onclick = () => {
    fetch(url)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    .then(data => console.log(data))
    .catch(error => console.error(error))
}
