import React from "react";

const Blog = () => {
  return (
    <div className="p-16">
      <div class="card text-slate-600 base-content shadow-xl">
          <h1 className="text-4xl font-semibold text-slate-600 text-center">Q & A</h1>
        <div class="card-body">
          <h2 class="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <p>
            1.Lazy loading images in React. 2.To optimize React rendering, you
            need to make sure that components receive only necessary props.
            3.Avoid using Index as Key for map 4. Spreading props on DOM
            elements 5. CSS Animations Instead of JS Animations
          </p>
        </div>
        <div class="card-body">
          <h2 class="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            This types of state we can use to manage state. 1. Local state 2.
            Global state 3. Server state
          </p>
        </div>
        <div class="card-body">
          <h2 class="card-title">How does prototypical inheritance work?</h2>
          <p>
            If when we read a property from object, and it’s missing, JavaScript
            automatically takes it from the prototype. In programming, this is
            called “prototypal inheritance”.
          </p>
        </div>
        <div class="card-body">
          <h2 class="card-title">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts?
          </h2>
          <p>
            The virtual DOM: React keeps a copy of the previous state of the
            page. It uses it as a reference point when it decides on what should
            be repainted and what shouldn't. When you click on a button, the
            entire page doesn't need to repaint the entire DOM. setState triggers a rerender. A rerender is not a
            complete repainting of the DOM. It is triggering a repaint of the
            particular element you're passing in when it finds a difference.
          </p>
        </div>
        <div class="card-body">
          <h2 class="card-title">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Unit testing is a type of software testing where individual units or
            software components are tested. Its purpose is to validate that each
            unit of code performs as expected. To perform unit testing, a
            developer writes a piece of code (unit tests) to verify the code to
            be tested (unit) is correct.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
