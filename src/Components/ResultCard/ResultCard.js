import React from 'react';
import './ResultCard.css';

const ResultCard = ({ item }) => {
  return (
    <div className="result-card">
      <div className="card-image">
        <img
          src={item.artworkUrl100 || '/default-album.png'}
          alt={item.collectionName || item.trackName || 'Album Cover'}
          onError={(e) => { e.target.onerror = null; e.target.src = '/default-album.png' }}
        />
      </div>
      <div className="card-content">
        <h3>{item.collectionName || item.trackName || 'Unknown'}</h3>
        <p className="artist-name">{item.artistName || 'Unknown Artist'}</p>
        {item.collectionPrice && (
          <p className="price">${item.collectionPrice.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default ResultCard;