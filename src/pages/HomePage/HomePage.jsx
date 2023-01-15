import { useState, useEffect } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../HomePage/HomePage.module.css';
import { fetchFilms } from 'components/helpers/api';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchFilms().then(data => setFilms(data.results));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul className={css.link_list}>
        {films.map(film => (
          <Link
            to={`movies/${film.id}`}
            state={{ from: location }}
            className={css.link}
            key={film.id}
          >
            {film.original_title}
          </Link>
        ))}
      </ul>
    </>
  );
}
