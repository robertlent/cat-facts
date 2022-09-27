document.querySelector('button').addEventListener('click', getFetch)
let catPhoto = document.querySelector('img')
let factText = document.querySelector('h2')

function getFetch() {
  const url = 'https://meowfacts.herokuapp.com'
  const imageURL = 'https://api.thecatapi.com/v1/images/search'

  fetch(imageURL)
    .then(res => res.json())
    .then(data => {
      catPhoto.src = data[0].url
    })

  fetch(url)
    .then(res => res.json())
    .then(data => {
      factText.innerText = data.data[0]
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}