import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
        {/* Heading  */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {/* Question # 1 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is React.js and Explain the concept of "components" in React.
          </div>
          <div className="collapse-content">
            <p>
              React.js is a JavaScript library used for building user
              interfaces, primarily for single-page applications. Components in
              React are reusable, independent pieces of UI that can manage their
              own state and logic.
            </p>
          </div>
        </div>
        {/* Question # 2 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is JSX in React, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              JSX stands for JavaScript XML. It allows us to write HTML-like
              syntax within JavaScript, which React then compiles into
              JavaScript code using React.createElement.
            </p>
          </div>
        </div>
        {/* Question # 3 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is the Virtual DOM, and how does React use it to optimize
            performance?
          </div>
          <div className="collapse-content">
            <p>
              The Virtual DOM is a lightweight copy of the real DOM. React uses
              it to minimize direct DOM manipulations, updating only what has
              changed by comparing previous and current states.
            </p>
          </div>
        </div>
        {/* Question # 4 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Explain the concept of "props" in React and how they are used.
          </div>
          <div className="collapse-content">
            <p>
              Props (short for properties) are read-only inputs passed from
              parent components to child components. They are used to pass data
              and event handlers between components.
            </p>
          </div>
        </div>
        {/* Question # 5 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is "state" in React, and how does it differ from props?
          </div>
          <div className="collapse-content">
            <p>
              State is an object that holds data that may change over time and
              controls the component's behavior. Unlike props, state is managed
              within the component and can be updated.
            </p>
          </div>
        </div>
        {/* Question # 6 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Explain the useState hook and provide an example of how it is used.
          </div>
          <div className="collapse-content">
            <p>
              The <code>useState</code> hook allows you to add state to
              functional components. It returns an array with two elements: the
              current state and a function to update the state.
            </p>
            <pre className="bg-gray-100 p-2">
              {`const [count, setCount] = useState(0);`}
            </pre>
          </div>
        </div>
        {/* Question # 7 */}
        <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is the purpose of the useEffect hook in React, and when would
            you use it?
          </div>
          <div className="collapse-content">
            <p>
              The <code>useEffect</code> hook allows you to perform side effects
              in functional components, such as data fetching, subscriptions, or
              manual DOM manipulations. It runs after the render.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
