import React from 'react';
import './ResultCard.css';

const ResultCard = ({ item }) => {
  return (
    <div className="result-card">
      <div className="card-image">
        <img
          src={item.artworkUrl100 || '/default-album.png'}
          alt={item.collectionName || item.trackName || 'Album Cover'}
        />
      </div>
      <div className="card-content">
        <h3>{item.collectionName || item.trackName || 'Unknown'}</h3>
        <p className="artist-name">{item.artistName || 'Unknown Artist'}</p>
      </div>
    </div>
  );
};

export default ResultCard;