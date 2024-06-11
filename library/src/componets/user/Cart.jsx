import React, { useState, useEffect } from "react";
import axios from "axios";
import BookGallery2 from "../books/BookCard2";
import { Typography, Pagination } from "@mui/material";
import Header2 from "../homePage/Header2";
import Footer from "../homePage/Footer";

function Cart() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const booksPerPage = 4;

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const userEmail = sessionStorage.getItem("email");
      if (!userEmail) {
        console.error("User email not found in sessionStorage");
        return;
      }
      const response = await axios.get(
        `http://localhost:8055/api/history?email=${userEmail}`
      );
      const nonReturnedTransactions = response.data.data.filter(
        (transaction) => !transaction.returned
      );
      const bookIds = nonReturnedTransactions.map(
        (transaction) => transaction.bookId
      );
      const bookData = await fetchBooksData(bookIds);
      setBooks(bookData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const fetchBooksData = async (bookIds) => {
    try {
      const response = await axios.get("http://localhost:8055/api/book");
      const booksData = response.data.data.filter((book) =>
        bookIds.includes(book.bookId)
      );
      return booksData;
    } catch (error) {
      console.error("Error fetching books data:", error);
      return [];
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = page * booksPerPage;
  const paginatedBooks = books.slice(startIndex, endIndex);

  return (
    <>
      <Header2 />
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
          <h1 style={{ textAlign: "center" }}>Recently Picked Books</h1>
          {paginatedBooks.length > 0 ? (
            <>
              <BookGallery2 books={paginatedBooks} />
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
            <Typography variant="body1">
              No books found for the user.
            </Typography>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
