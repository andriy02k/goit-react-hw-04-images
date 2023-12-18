import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({gallery, openModal}) => {
  return (
    <ul className="gallery">
        {gallery.map(image => (
            <ImageGalleryItem key={image.id} image={image} openModal={openModal}/>
        ))}
    </ul>
  )
}

export default ImageGallery