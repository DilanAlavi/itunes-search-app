import React from 'react';
import './ResultCard.css';

const ResultCard = ({ item }) => {
  return (
    <div className="result-card">
      <div className="card-image">
        <img
          src={item.artworkUrl100}
          alt={item.collectionName || item.trackName}
        />
      </div>
      <div className="card-content">
        <h3>{item.collectionName || item.trackName}</h3>
        <p className="artist-name">{item.artistName}</p>
      </div>
    </div>
  );
};

export default ResultCard;