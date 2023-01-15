import React, { useEffect } from 'react';
import { useState } from 'react';
import { fetchMovieById } from 'components/helpers/api';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import css from '../MovieDetails/MovieDetails.module.css';

export default function MovieDetails() {
  const [movies, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(data => setMovie(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!movies) {
    return;
  }
  const { genres } = movies;

  return (
    <>
      <Link className={css.btn_details} to={location.state?.from ?? '/'}>
        Go Back
      </Link>
      <div className={css.wrapper_page}>
        <div>
          <img
            src={
              movies.poster_path &&
              `https://image.tmdb.org/t/p/w500${movies.poster_path}`
            }
            alt={movies.original_title}
            width="200px"
          />
        </div>
        <div>
          <h2>
            {movies.original_title} (
            {movies.release_date && movies.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {Math.ceil((movies.vote_average * 100) / 10)} %</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <ul className={css.genres_list}>
            {genres &&
              genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </div>
      </div>
      <div>
        <h3> Additional infomation</h3>

        <Link to="cast" className={css.link_details}>
          {' '}
          Cast{' '}
        </Link>
        <Link to="reviews" className={css.link_details}>
          {' '}
          Reviews
        </Link>

        <Outlet></Outlet>
      </div>
    </>
  );
}
