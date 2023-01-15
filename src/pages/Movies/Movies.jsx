import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import css from '../Movies/Movies.module.css';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchQueryFilms } from 'components/helpers/api';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const adress = searchParams.get('resultSearch') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!adress) {
      return;
    }

    fetchQueryFilms(adress).then(data => setMovies(data.results));
  }, [adress]);

  const OnInputSubmit = event => {
    event.preventDefault();
    if (!query) {
      return;
    }

    setSearchParams({ resultSearch: query });
  };

  const onInputValue = event => {
    setQuery(event.target.value);
  };

  return (
    <>
      <form onSubmit={OnInputSubmit}>
        <input
          placeholder="Search images and photos"
          className={css.searchBar}
          type="text"
          value={query}
          onChange={onInputValue}
        />
        <button className={css.btnSubmit} type="submit">
          Search
        </button>
      </form>
      <ul className={css.movies_list}>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                to={`${movie.id}`}
                state={{ from: location }}
                className={css.link_list}
              >
                <img
                  src={
                    movie.poster_path &&
                    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  }
                  alt={`${movie.original_title}`}
                  width="200px"
                />
                <h3> {movie.original_title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
