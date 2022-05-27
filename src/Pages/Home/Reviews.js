import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="bg-slate-100 mx-12 text-slate-900">
      <h2 className="text-4xl font-bold text-center p-8">From Our Clients</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-5 px-10">
        {reviews.map((review, index) => (
          <div key={index} className="card bg-base-100 shadow-xl my-12">
            <div className="card-body">
              <p>{review.reviewText}</p>

              <div className="flex justify-between">
              <div className="flex justify-start items-center my-5">
                <div className="avatar mr-4">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.img} alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="card-title">{review.name}</h2>
                  <p>{review.location}</p>
                </div>
              </div>

              <div>
                {review.star}
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
