import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import ShowDetails from "../Pages/ShowDetails/ShowDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/showDetails/:bookId",
        loader: async ({ params }) => {
          console.log(params); // Logs the params object
          console.log(params.bookId); // Logs the specific bookId

          // Fetch the entire JSON file
          const response = await fetch("/bookShopApi.json");
          if (!response.ok) {
            throw new Error("Failed to fetch book data");
          }
          const data = await response.json();

          // console.log(data); // Logs the array of books

          // Find the specific book by bookId (note: params.bookId is a string, so convert it to a number if necessary)
          const bookItem = data.find(
            (book) => book.bookId === parseInt(params.bookId)
          );

          if (!bookItem) {
            throw new Error("Book not found");
          }

          // console.log(bookItem);
          // console.log(bookItem.bookId); // Logs the found book's ID
          return bookItem; // Return the specific book item
        },
        element: <ShowDetails />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
]);
