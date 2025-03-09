import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultCard from './ResultCard';

describe('ResultCard Component', () => {
  test('renders with full item data', () => {
    const mockItem = {
      artworkUrl100: 'https://itunes.com/imagen.jpg',
      collectionName: 'Test Album',
      trackName: 'Test Track',
      artistName: 'Test Artist',
      collectionPrice: 9.99
    };
    
    render(<ResultCard item={mockItem} />);

    const image = screen.getByAltText('Test Album');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://itunes.com/imagen.jpg');
    
    expect(screen.getByText('Test Album')).toBeInTheDocument();

    expect(screen.getByText('Test Artist')).toBeInTheDocument();

    expect(screen.getByText('$9.99')).toBeInTheDocument();
  });
  test('renders with fallback for unknown title', () => {
    const mockItem = {
      artworkUrl100: 'https://itunes.com/imagen.jpg',
      artistName: 'Test Artist'
    };
    
    render(<ResultCard item={mockItem} />);
    expect(screen.getByText('Unknown')).toBeInTheDocument();
  });
  test('renders with fallback for unknown artist', () => {
    const mockItem = {
      artworkUrl100: 'https://itunes.com/imagen.jpg',
      collectionName: 'Test Album'
    };
    
    render(<ResultCard item={mockItem} />);
    expect(screen.getByText('Unknown Artist')).toBeInTheDocument();
  });
  test('does not display price when not available', () => {
    const mockItem = {
      artworkUrl100: 'https://itunes.com/imagen.jpg',
      collectionName: 'Test Album',
      artistName: 'Test Artist'
    };
    
    render(<ResultCard item={mockItem} />);
    const priceElement = screen.queryByText(/\$/);
    expect(priceElement).not.toBeInTheDocument();
  });
  test('uses default image when artwork URL is not provided', () => {
    const mockItem = {
      collectionName: 'Test Album',
      artistName: 'Test Artist'
    };
    
    render(<ResultCard item={mockItem} />);
    
    const image = screen.getByAltText('Test Album');
    expect(image).toHaveAttribute('src', '/images/default-album.png');
  });
  
  
  

});