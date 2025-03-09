import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {

  test('shows all media types in the dropdown', () => {
    render(<SearchBar onSearch={() => {}} />);
    
    const mediaSelect = screen.getByRole('combobox');
    expect(mediaSelect).toBeInTheDocument();
    const mediaTypes = [
      'All', 'Movies', 'Podcasts', 'Music', 'Music Videos', 
      'Audiobooks', 'TV Shows', 'Software', 'E-books'
    ];
    
    mediaTypes.forEach(type => {
      expect(screen.getByRole('option', { name: type })).toBeInTheDocument();
    });
  });
  test('calls onSearch with correct parameters when form is submitted', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText('Search for artist, album, or song...');
    const mediaSelect = screen.getByRole('combobox');
    const searchButton = screen.getByRole('button', { name: /search/i });
    
    fireEvent.change(searchInput, { target: { value: 'Queen' } });
    fireEvent.change(mediaSelect, { target: { value: 'music' } });
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith('Queen', 'music');
  });

});