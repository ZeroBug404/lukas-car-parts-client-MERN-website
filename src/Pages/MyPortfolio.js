import React from "react";
import aboutME from "../images/aboutMe.png";

const MyPortfolio = () => {
  return (
    <div className="">
      {/* <h1 className="text-center mt-3">
        About <span className="text-success">ME</span>
      </h1>
      <div className="my-5 aboutInfo flex">
        <div className="w-50">
          <img width={"40%"} src={aboutME} alt="" />
        </div>
        <div className="w-50 aboutInfo-text">
          <h2>Hi I'm Shimu & My Mission - </h2>
          <p>
            I want to be a professional web developer and want to create my own
            IT firm and be an successful entrepreneur. However I really want to
            help those peoples who are needy and I just want to create my own
            empire with the love of people.
          </p>
        </div>
      </div> */}

      <div class=" min-h-screen bg-base-200 pt-16">
        <div class="hero-content flex-col lg:flex-row-reverse justify-between px-28">
          <div className="">
            <img src={aboutME} class="max-w-sm rounded-lg shadow-2xl" alt="" />
            
          </div>
            <button class="btn btn-primary">Contact Me</button>
          <div>
            <h1 class="text-5xl font-bold">I'm Shimu</h1>
            <p class="py-4">⊛ A professional MERN stack junior developer.</p>
            <h1 class="text-3xl font-bold">My Email</h1>
            <p class="py-3">⊛ 404.zerobug@gmail.com</p>
            <h1 class="text-3xl font-bold py-4">
            ⊛ I'm now studying CSE at IUBAT
            </h1>
            <h1 class="text-3xl font-bold">⊛ Technoligies I'm Expert in</h1>

            <p class="py-3">
              <ul class="steps steps-vertical">
                <li class="step step-primary">React JS</li>
                <li class="step step-primary">Node JS</li>
                <li class="step step-primary">Express JS</li>
                <li class="step step-primary">MongoDB</li>
                <li class="step step-primary">BootStrap, Tailwind CSS</li>
              </ul>
            </p>

            <h1 class="text-3xl font-bold">⊛ My Recent MERN Projects</h1>
            <p class="py-5">
              <ul class="steps steps-vertical lg:steps-horizontal">
                <li class="step step-primary">
                  {" "}
                  <a
                    href="https://psychiatrist-website.web.app/"
                    class="link link-accent"
                  >
                    Lukas Car Part site
                  </a>
                </li>
                <li class="step step-primary">
                  <a
                    href="https://bicycle-inventory.web.app/"
                    class="link link-accent"
                  >
                    Bicycle Inventory
                  </a>
                </li>
                <li class="step step-primary">
                  {" "}
                  <a
                    href="https://psychiatrist-website.web.app/"
                    class="link link-accent"
                  >
                    Psychiatrist Website
                  </a>
                </li>
              </ul>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
