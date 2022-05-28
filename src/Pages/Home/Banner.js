import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/Y26VdSt/slider1.webp)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-lg ">
          <p className="mb-5 ">NEW TECHNOKOGY & BUILD</p>
          <h1 className="mb-5 text-6xl font-bold">WHEELS & TIRES COLLECTION</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
