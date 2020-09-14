import React, { useState, useEffect } from 'react';
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import TopMovies from '../top-movies/TopMovies'
import Pagination from '../pagination/Pagination'
import axios from 'axios';

const HomePage = () => {

  // https://itunes.apple.com/us/rss/topmovies/limit=100/json

  const [topMovies, setTopMovies] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [topMoviesPerPage] = useState(20);


  useEffect(() => {
    async function fetchItunesAPI() {
      let result = await axios('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
      // response = await response.json()
      setTopMovies(result.data);
    }
    fetchItunesAPI()
  }, [])


  // useEffect(async () => {
  //     const result = await axios('https://itunes.apple.com/us/rss/topmovies/limit=100/json');
  //     setTopMovies(result.data);
  //   }, []);

  // // Get current beers
  // const indexOfLastBeer = currentPage * beersPerPage;
  // const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  // const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

  // //Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);




  return (
    <div className="home-page-container">
      <Header />
      <Navigation />
      <section className="top-movies-list">
        <TopMovies />
        <Pagination />
      </section>
    </div>
  );
}

export default HomePage;
