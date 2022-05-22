import React from "react";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{backgroundImage: "url(https://i.ibb.co/Y26VdSt/slider1.webp)"}}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content ">
        <div class="max-w-lg ">
          <p class="mb-5 ">
            NEW TECHNOKOGY & BUILD 
          </p>
          <h1 class="mb-5 text-6xl font-bold">WHEELS & TIRES COLLECTION</h1>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
