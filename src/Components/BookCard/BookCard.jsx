import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ bookItem }) => {
  const { bookId, image, tags, bookName, author, category, rating } = bookItem;

  return (
    <div className="flex flex-col justify-between h-full border p-4 rounded-lg shadow-lg">
      {/* Cover Image */}
      <div className="book-cover">
        <img src={image} alt={`${bookName} cover`} className="w-full h-auto" />
      </div>
      {/* Tags */}
      <div className="tags mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 mr-2 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Info */}
      <div className="book-info mt-4">
        <h2 className="text-lg font-semibold">{bookName}</h2>
        <p className="text-gray-600">by {author}</p>

        {/* Category */}
        <p className="text-sm text-blue-500 mt-1">Category: {category}</p>

        {/* Rating */}
        <div className="rating flex items-center mt-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{rating} / 5</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <Link to={`/showDetails/${bookId}`}>
          <button className="btn btn-primary w-full mt-4">Book Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
