import { HomePage } from 'pages/HomePage/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Movies } from 'pages/Movies/Movies';
import { Layout } from 'components/Layout/Layout';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Reviews } from 'pages/Reviews/Reviews';
import { Cast } from 'pages/Cast/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
