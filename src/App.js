import React, { useState } from 'react';
import { searchITunes } from './Services/iTunesService';
import SearchBar from './Components/SearchBar/SearchBar';
import ResultCard from './Components/ResultCard/ResultCard';
import AppLayout from './Components/AppLayout/AppLayout';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (term, mediaType) => {
    if (!term.trim()) return;

    setIsLoading(true);

    try {
      const data = await searchITunes(term, mediaType);
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <div className="loading">Loading...</div>}
      <div className="results-container">
        {results.length > 0 && (
          <div className="results-grid">
            {results.map((item, index) => (
              <ResultCard key={item.trackId || item.collectionId || item.artistId || index} item={item} />
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default App;