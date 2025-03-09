import React, { useState } from 'react';
import './SearchBar.css';

const mediaTypes = [
  { value: 'all', label: 'All' },
  { value: 'movie', label: 'Movies' },
  { value: 'podcast', label: 'Podcasts' },
  { value: 'music', label: 'Music' },
  { value: 'musicVideo', label: 'Music Videos' },
  { value: 'audiobook', label: 'Audiobooks' },
  { value: 'tvShow', label: 'TV Shows' },
  { value: 'software', label: 'Software' },
  { value: 'ebook', label: 'E-books' }
];

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mediaType, setMediaType] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, mediaType);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for artist, album, or song..."
          className="search-input"
          required
        />
        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
          className="media-select"
        >
          {mediaTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;