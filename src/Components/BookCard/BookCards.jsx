import React, { useEffect } from "react";
import { useState } from "react";
import BookCard from "./BookCard";

const BookCards = () => {
  const [BookCards, setBookCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookCards = async () => {
    try {
      const response = await fetch("/bookShopApi.json");
      if (!response.ok) {
        throw new Error("Failed to fetch the data");
      }
      const data = await response.json();
      setBookCards(data);
    } catch (error) {
      console.error("Error fetching book data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookCards();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(BookCards);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {BookCards.map((bookItem) => (
          <BookCard key={bookItem.bookId} bookItem={bookItem}></BookCard>
        ))}
      </ul>
    </div>
  );
};

export default BookCards;
