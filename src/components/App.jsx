import { Component } from 'react'
import '../index.css';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import { getAllImages } from './api/getImages'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal'
import Button from './Button/Button';
  
export class App extends Component {
  state = {
    page: 1,
    query: '',
    gallery: [],
    isLoading: false,
    largeImage: '',
    showModal: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.query !== prevState.query) {
      this.getImages()
    }
  }

  getImages = async () => {
    try {
      this.setState({ isLoading: true });
      const responce = await getAllImages(this.state.query, this.state.page);
      this.setState((prev) => ({
        gallery: [...prev.gallery, ...responce.hits],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  onSubmit = (q) => {
    if (q === '') {
      alert('Please, input word!');
      return
    } else if (q === this.state.query) {
      alert('Please, input a new word!');
      return
    }
    this.setState({ query: q, page: 1, gallery: [] });
  }

  openModal = (largeURL) => {
    this.setState({
      largeImage: largeURL,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      largeImage: '',
      showModal: false,
    });
  };

  handleLoadMore = () => {
		this.setState((prev) => ({ page: prev.page + 1 }))
	}

  render() {
    const { gallery, isLoading, largeImage, showModal } = this.state;
      return (
          <div className='App'>
            <Searchbar onSubmit={this.onSubmit} />
            <ImageGallery gallery={gallery} openModal={this.openModal} />
            {isLoading && <Loader />}
            {showModal && <Modal largeImage={largeImage} closeModal={this.closeModal} />}
            {gallery.length > 0 && <Button onClick={this.handleLoadMore} />}
          </div>
        );
    };
}



