import React, { useState } from "react";
import BookGallery from "./BookGallery";
import { Typography , Pagination} from "@mui/material";

const books = [
  {
    title: "A Man Called Ove",
    subtitle:"The million-copy bestselling phenomenon,",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzOViPgKawfZV44V2f1htmZxN3O8FzDqHmF7Gb5T4DxUIkRsmqGRsHoQfFKxaM4C74sdPeV2YwXvCc8zAHj4olzR87-8LVQT00fNw3GbKBpsvM8ZQ7lhnc&usqp=CAE",
    author: "Fredrik Backman",
  },
  {
    title: "An Uncommon Love",
    subtitle:"The Early Life of Sudha and Narayana Murthy",
    image: "https://m.media-amazon.com/images/I/71v9iNrb-vL._SY466_.jpg",
    author: "Banerjee Divakaruni, Chitra",
  },
  {
    title: "Penguin Destinations Of A Lifetime",
    subtitle:"National Geographic takes you on a photographic tour of our world...",
    image: "https://m.media-amazon.com/images/I/91vMxtTtWaL._SY342_.jpg",
    
  },
  {
    title: "Maximum City",
    subtitle:"Bombay Lost and Found",
    image: "https://m.media-amazon.com/images/I/81Gwsv8bRdL._SY466_.jpg",
    author: "Suketu Mehta",
  },
  {
    title: "On The Kebab Trail",
    subtitle:"A Moti Mahal Cookbook",
    image: "https://m.media-amazon.com/images/I/81vEXSX-NPL._SY466_.jpg",
    author: "Monish Gujral",
  },
  {
    title: "You Can",
    subtitle:"Do you often wonder whether you really have it in you to accomplish your goals",
    image: "https://m.media-amazon.com/images/I/61aJc8wQX4L._SY466_.jpg",
    author: "George Matthew Adams ",
  },
  {
    title: "JavaScript from Beginner to Professional",
    subtitle:"Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages",
    image: "https://m.media-amazon.com/images/I/71oZ45OrLjL._SY466_.jpg",
    author: "Luciano Mammino",
  },
  {
    title: "Building Web Apps with Python and Flask",
    subtitle:"A practical guide for the rapid web application development with FlaskKey Features",
    image: "https://m.media-amazon.com/images/I/616ZlpDW6eL._SY466_.jpg",
    author: "Malhar Lathkar ",
  },

];


const BooksGalleryLayout2 = () => {
  const [page, setPage] = useState(1);
  const booksPerPage = 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = page * booksPerPage;
  const paginatedBooks = books.slice(startIndex, endIndex);

 return (
    <div
      className="App"
      style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Our Book Gallery</h1>
        {paginatedBooks.length > 0 ? (
          <>
            <BookGallery books={paginatedBooks} />
            {books.length > booksPerPage && (
              <div style={{ marginTop: 20, textAlign: "center" }}>
                <Pagination
                  count={Math.ceil(books.length / booksPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                />
              </div>
            )}
          </>
        ) : (
          <Typography variant="body1">Loading books...</Typography>
        )}
      </div>
    </div>
  );
};

export default BooksGalleryLayout2;
