import React from 'react';
import './shared/css/PageLayout.css';
import { FiUsers, FiGrid } from 'react-icons/fi';

function App() {
  return (
    <div>
      <h1>Home</h1>
      <div className='page-list'>
        <a href="/contatti"><FiUsers />Mostra contatti</a>
        <a href="/prodotti"><FiGrid />Mostra articoli</a>
      </div>
    </div>
  );
}

export default App;