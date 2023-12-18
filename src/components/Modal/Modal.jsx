import React, { Component } from 'react'

class Modal extends Component {
    state = {}

     handleEsc = (e) => {
         if (e.code === 'Escape') {
             this.props.closeModal()
         };
    }

    componentDidMount() {
		document.addEventListener('keydown', this.handleEsc)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleEsc)
    }
    
    handleClick = (e) => {
      if (e.target === e.currentTarget) {
        this.props.closeModal();
      }
    }

    render() {
        return (
            <div className="overlay" onClick={this.handleClick}>
                <div className="modal">
                    <img src={this.props.largeImage} alt="" />
                </div>
            </div>
        )
    };
}

export default Modal

