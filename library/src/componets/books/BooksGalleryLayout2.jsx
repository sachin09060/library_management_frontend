import React, { useState, useEffect } from "react";
import axios from "axios";
import BookGallery from "./BookCard";
import { Typography, Pagination } from "@mui/material";

const BooksGalleryLayout2 = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const booksPerPage = 4;

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8055/api/book");
      setBooks(response.data.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

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
