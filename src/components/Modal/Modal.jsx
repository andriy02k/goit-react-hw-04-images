import React, { useEffect } from 'react'

const Modal = ({ largeImage, closeModal }) => {
  
  useEffect(() => {
      const handleEsc = (e) => {
           if (e.code === 'Escape') closeModal();
      }
      document.addEventListener('keydown', handleEsc)
      return () => {
        document.removeEventListener('keydown', handleEsc)
      }
    }, [closeModal])
    
    
    const handleClick = (e) => {
      if (e.target === e.currentTarget) closeModal();
    }

  return (
    <div className="overlay" onClick={handleClick}>
        <div className="modal">
            <img src={largeImage} alt="" />
        </div>
    </div>
  )
}

export default Modal