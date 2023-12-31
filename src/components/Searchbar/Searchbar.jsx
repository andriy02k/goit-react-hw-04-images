import React, { useState } from 'react'

const Searchbar = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = ({ target: { value } }) => {
        setQuery(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
    }
    
  return (
    <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
            <button type="submit" className="button">
                <span className="button-label">Search</span>
            </button>

            <input
                className="input"
                type="text"
                placeholder="Search images and photos"
                value={query}
                onChange={handleChange}
            />
            </form>
        </header>
  )
}

export default Searchbar