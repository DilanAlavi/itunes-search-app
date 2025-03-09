import React, { useState } from 'react';
import { searchITunes } from './Services/iTunesService';
import SearchBar from './Components/SearchBar/SearchBar';
import ResultCard from './Components/ResultCard/ResultCard';
import AppLayout from './Components/AppLayout/AppLayout';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false); 

  const handleSearch = async (term, mediaType) => {
    if (!term.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true); 

    try {
      const data = await searchITunes(term, mediaType);
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
      setError(`Error fetching data: ${error.message}. Please try again later.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <div className="results-container">
        {results.length > 0 ? (
          <div className="results-grid">
            {results.map((item, index) => (
              <ResultCard key={item.trackId || item.collectionId || item.artistId || index} item={item} />
            ))}
          </div>
        ) : (
          hasSearched && !isLoading && <p className="no-results">No results found. Please try a different search term.</p>
        )}
      </div>
    </AppLayout>
  );
}

export default App;