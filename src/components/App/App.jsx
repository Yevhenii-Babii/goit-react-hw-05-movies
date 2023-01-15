import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { HomePage } from 'pages/HomePage/HomePage';
// import { Movies } from 'pages/Movies/Movies';
// import Layout from 'components/Layout/Layout';
// import { Cast } from 'pages/Cast/Cast';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Reviews } from 'pages/Reviews/Reviews';
import { lazy } from 'react';

const Layout = lazy(() => import('components/Layout/Layout'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import(`pages/Reviews/Reviews`));

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
