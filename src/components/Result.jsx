import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Result() {
    const { score } = useParams();
    //const { user } = useParams();
    const emailId = localStorage.getItem('emailId');
    const [rating, setRating] = useState(0);

    const handleRating = (index) => {
        setRating(index);
    };

    return (
        <div>
            <div>
                <h1>Exam Results</h1>
                <p>Your score is: {score}</p>
            </div>
            <div>
                <h2>Your Rating</h2>
                <p>Rate your experience out of 5:</p>
                <div>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= rating ? "on" : "off"}
                                onClick={() => handleRating(index)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                        );
                    })}
                </div>
            </div>
            <div>
                <h2>Leave a Review</h2>
                <textarea placeholder="Write your review here..." rows="4" cols="50"></textarea>
                <br />
                <button>Submit Review</button>
            </div>
        </div>      
    );
}

export default Result;