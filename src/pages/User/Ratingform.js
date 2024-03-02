import React, { useState } from 'react';
import { Rating } from '@mui/material';
import Stack from '@mui/material/Stack';

const getCookie = (name) => {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${name}=`));

  if (cookieValue) {
    return cookieValue.split('=')[1];
  }

  return null;
};

const decodeToken = (token) => {
    if (!token) {
      return null;
    }
  
    // Split the token into parts
    const [, payloadBase64] = token.split('.');
  
    if (!payloadBase64) {
      return null;
    }
  
    // Decode the base64-encoded payload
    const payload = JSON.parse(atob(payloadBase64));
  
    return payload.userId; // Correctly extract userId from payload
  };
  
  

const ReviewForm = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [token] = useState(getCookie('token'));
  const [feedback, setFeedback] = useState('');
const [tokenn, SetToken] = useState()
  console.log(review, rating);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseFloat(e.target.value));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = decodeToken(token);
      SetToken(decodeToken(token));
  
      const response = await fetch('http://localhost:4000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user: userId, // Use the extracted userId
          feedback: review,
          rating: rating,
        }),
      });
  
      if (response.ok) {
        console.log('Review submitted successfully');
        // Reset form fields
        setFeedback('');
        setRating(0);
      } else {
        const error = await response.json();
        console.error('Error submitting review:', error);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
      <div className="mb-4">
        <label htmlFor="review" className="block text-gray-700 font-semibold mb-2">
          Your Review:
        </label>
        <textarea
          id="review"
          className="w-full h-32 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Write your review here (20-30 words)"
          value={review}
          onChange={handleReviewChange}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
          Rating:
        </label>
        <Stack spacing={1}>
          <Rating
            name="user-rating"
            value={rating}
            precision={0.5}
            onChange={handleRatingChange}
          />
        </Stack>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewForm;
