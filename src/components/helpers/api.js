//  export async function Trends() {
//     const key = 'b22eeaf20157945591c68d8a5e58dd30';
//     const url = 'https://api.themoviedb.org/3/movie/popular';
//     const filter = `?api_key=${key}`;
  
//     const response = await fetch(`${url}${filter}`);
//     const data = await response.json();
  
//     return data;
//   }

import axios from 'axios';

export async function fetchFilms(query) {
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US&page=1&include_adult=false&query=${query}`)
        return data;
    } catch (error) {
        console.log(error);
    }
    }

//     export async function fetchMovieById (movieId) {
// try{
// const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie/${movieId}?api_key=b22eeaf20157945591c68d8a5e58dd30&language=en-US&page=1&include_adult=false`)
// return data
// } catch(error) {
//     console.log(error);
// }
//     }

export async function fetchMovieById(movieId){
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=87b30e96836a8de3573742dd24a908fa&language=en-US`)
        return data;
    } catch (error) {
        console.error(error);
    }
    }

    export async function fetchReviewsById(movieId){
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=87b30e96836a8de3573742dd24a908fa&language=en-US`)
            return data;
        } catch (error) {
            console.error(error);
        }
        }

        export async function fetchCastById(movieId){
            try {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=87b30e96836a8de3573742dd24a908fa&language=en-US`)
                return data;
            } catch (error) {
                console.error(error);
            }
            }