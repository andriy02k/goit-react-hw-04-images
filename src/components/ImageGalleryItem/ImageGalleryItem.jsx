import React from 'react'

const ImageGalleryItem = ({image, openModal}) => {
  return (
    <li className="gallery-item">
        <img className="gallery-item-image" src={image.webformatURL} alt="" onClick={()=>{openModal(image.largeImageURL)}}/>
    </li>
  )
}

export default ImageGalleryItem