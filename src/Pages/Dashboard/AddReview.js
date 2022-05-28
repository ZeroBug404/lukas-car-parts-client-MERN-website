import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const textRef = useRef("");
  const starRef = useRef("");

  const navigate = useNavigate();

  const handleAddReview = (e) => {
    e.preventDefault();
    let reviewText = textRef.current.value;
    const star = starRef.current.value;
    // console.log(reviewText, star);

    const review = {
      reviewText,
      star,
      name: user.displayName,
    };

    fetch(`https://protected-plains-56245.herokuapp.com/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ success: data });
        navigate("/dashboard/myprofile");
        toast("Thanks for your feedback!");
      });
  };
  return (
    <div className="card lg:w-1/2 bg-base-100 shadow-xl">
      <div className="p-6">
        <h2 className="card-title text-slate-600 mb-2">
          Tell something about our service!
        </h2>

        <form>
          <textarea
            ref={textRef}
            className="textarea textarea-warning w-full h-40 leading-6 text-slate-800 text-base"
            placeholder="Write here"
          ></textarea>

          <select
            ref={starRef}
            className="select select-warning w-2/5 max-w-xs text-slate-600"
          >
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>
          <div className="card-actions mt-2 justify-end">
            <button onClick={handleAddReview} className="btn btn-primary w-40">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
