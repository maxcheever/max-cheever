// get the large image div
const largeImage = document.getElementById('large-img')

// get all of the smaller images and place in a list
const imagesList = document.getElementsByClassName('image')

const imageText = document.getElementById('main-txt')

// loop through the small images list
for (const element of imagesList){

  // make the images "clickable"
  element.addEventListener('click', function() {

    // get the file location, width, and height from the image chosen
    let image = element.getAttribute('src')
    let text = element.getAttribute('alt')
    let width = element.getAttribute('width')
    let height = element.getAttribute('height')

    // set the large image div bg-image url, width, and height using the image variable
    largeImage.setAttribute('src', image)
    largeImage.setAttribute('width', width)
    largeImage.setAttribute('height', height)
    imageText.textContent = text
  })
}