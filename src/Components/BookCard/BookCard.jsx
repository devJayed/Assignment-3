import React from "react";

const BookCard = ({ bookItem }) => {
  const { image, tags, bookName, author, category, rating } = bookItem;

  return (
    <div className="book-card border p-4 rounded shadow-md max-w-sm">
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
      <div className="mt-4">
        <button className="btn btn-primary w-full">Book Details</button>
      </div>
    </div>
  );
};

export default BookCard;
