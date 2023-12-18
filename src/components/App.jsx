import React, {useEffect, useState} from 'react'
import '../index.css';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import { getAllImages } from './api/getImages'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal'
import Button from './Button/Button';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (query !== '' || page !== 1) getImages();
  }, [query, page]);
  
  const getImages = async () => {
    try {
      setIsLoading(true);
      const responce = await getAllImages(query, page);
      setGallery(prev => [...prev, ...responce.hits]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmit = (q) => {
    if (q === '') {
      alert('Please, input word!');
      return;
    } else if (q === query) {
      alert('Please, input a new word!');
      return;
    }
    setQuery(q);
    setPage(1);
    setGallery([]);
  }

  const openModal = (largeURL) => {
    setLargeImage(largeURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setLargeImage('');
    setShowModal(false);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
	}

  return (
    <div className='App'>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery gallery={gallery} openModal={openModal} />
      {isLoading && <Loader />}
      {showModal && <Modal largeImage={largeImage} closeModal={closeModal} />}
      {gallery.length > 0 && <Button onClick={handleLoadMore} />}
    </div>
  )
}
