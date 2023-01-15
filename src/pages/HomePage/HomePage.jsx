
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import css from '../HomePage/HomePage.module.css'
// import { NavLink } from 'react-router-dom';
// import css from '../HomePage/HomePage.module.css'

export const HomePage = () =>{

    const [films, setFilms] = useState([]);

  const fetchFilms = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US&page=1'
    )
      .then(response => response.json())
      .then(json => setFilms(json.results));
  };

  useEffect(() => {
    fetchFilms();
  }, []); 
   
  return ( 
<>
<h2>Trending today</h2>
      <ul className={css.link_list}>
        {films.map(film => (
          <Link to={`movies/${film.id}`} className={css.link} key={film.id}>{film.original_title}</Link>
        ))}
      </ul>
     
    </>
  )

} 

