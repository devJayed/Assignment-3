import React from 'react';

const Banner = () => {
  return (
    <div className="hero bg-base-200 mb-8 border p-4 rounded-lg shadow-lg">
      <div className="hero-content flex-col lg:flex-row">
        {/* Left Section: Title and Button */}
        <div className="text-left flex-1 pl-4">
          <h1 className="text-5xl font-bold">
            Unlock a World of Stories – Find Your Next Favorite Book at <span className="text-primary">Boi Bitan</span>
          </h1>
          <p className="py-6 text-lg">
            Whether you are looking for thrilling adventures, heartwarming romances, or mind-bending mysteries, we have the perfect book for you!
          </p>
          <button className="btn btn-primary">Buy Book</button>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/2 flex-1">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
