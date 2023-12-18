import React, { Component } from 'react'

class Searchbar extends Component {
    state = {
        query: '',
    }

    handleChange = ({ target: { value } }) => {
        this.setState((prev) => {
            return { ...prev, query: value }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
  }

    render() {
        return (
        <header className="searchbar">
            <form className="form" onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    placeholder="Search images and photos"
                    // value={this.state.query}
                    onChange={this.handleChange}
                />
            </form>
        </header>
        );
    };
}

export default Searchbar