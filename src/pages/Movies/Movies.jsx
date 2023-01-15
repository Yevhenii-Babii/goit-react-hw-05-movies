import React from 'react';
import { fetchFilms } from 'components/helpers/api';
import { useEffect } from 'react';
import { useState } from 'react';
import css from '../Movies/Movies.module.css';


export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      fetchFilms(query).then(data => setMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  const onButtonSubmit = event => {
    event.preventDefault();
    
  };

  const onTextChange = event => {
    setQuery(() => event.target.value.trim());
  };

  return (
    <>
      
      <div className={css.wrapper}>
        <input
          placeholder="Search images and photos"
          className={css.searchBar}
          type="text"
          value={query}
          onChange={onTextChange}
        />
        <button className={css.btnSubmit} onSubmit={onButtonSubmit}>
          Submit
        </button>
      </div>
      <ul>
        {movies.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
      </>
  );
};
