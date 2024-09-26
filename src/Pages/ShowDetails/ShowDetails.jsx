import React from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ShowDetails = () => {
  const bookItem = useLoaderData();
  const Navigate = useNavigate();

  const {
    bookId,
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = bookItem;

  const handleGoBack = () => {
    Navigate(-1);
  };

  const showSweetAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${bookId}: ${bookName} has been successfully added to Cart/Wishlist`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {/* Book Image */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={bookName}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-md"
        />
        {/* Book Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {bookName}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Author:</span> {author}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Publisher:</span> {publisher}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Year of Publishing:</span>{" "}
              {yearOfPublishing}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Total Pages:</span> {totalPages}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Rating:</span> ⭐ {rating}/5
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <span className="font-semibold">Tags:</span> {tags.join(", ")}
            </p>
          </div>

          {/* Review Section */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Review</h2>
            <p className="text-gray-700 text-lg italic">{review}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-1 mt-6">
        {/* Action Button 1 */}
        <button
          onClick={() => {
            showSweetAlert();
          }}
          className="btn btn-primary w-full md:w-1/4"
        >
          Wish to Read
        </button>
        {/* Action Button 2 */}
        <button
          onClick={() => {
            showSweetAlert();
          }}
          className="btn btn-primary w-full md:w-1/4"
        >
          Add to Cart
        </button>

        {/* Go back button */}
        <button
          onClick={handleGoBack}
          className="btn btn-secondary w-full md:w-1/4"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ShowDetails;
