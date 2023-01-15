import { fetchReviewsById } from 'components/helpers/api';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsById(movieId).then(data => setReviews(data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return reviews.length > 0 ? (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author} </h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p> Sorry! No reviews </p>
  );
}
