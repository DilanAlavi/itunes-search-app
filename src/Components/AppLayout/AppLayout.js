import React from 'react';
import './AppLayout.css';

const AppLayout = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>iTunes Search</h1>
      </header>
      <main className="container">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;