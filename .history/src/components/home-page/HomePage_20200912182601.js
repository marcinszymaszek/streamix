import React from 'react';
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import Movies from '../header/Header'
import Navigation from '../navigation/Navigation'
import axios from 'axios';




const HomePage = () => {
  return (
    <div className="home-page-container">
      <Header />
      <Navigation />
      <Movies />
      <Pagination />
      
    </div>
  );
}

export default HomePage;
