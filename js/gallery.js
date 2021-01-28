const largeImage = document.getElementById('large-img')

const imagesList = document.getElementsByClassName('image')

const imageText = document.getElementById('main-txt')

for (const element of imagesList){

  element.addEventListener('click', function() {

    let image = element.getAttribute('src')
    let text = element.getAttribute('alt')
    let width = element.getAttribute('width')
    let height = element.getAttribute('height')

    largeImage.setAttribute('src', image)
    largeImage.setAttribute('width', width)
    largeImage.setAttribute('height', height)
    imageText.textContent = text
  })
}