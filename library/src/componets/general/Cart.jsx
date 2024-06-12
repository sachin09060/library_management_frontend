import React, { useState, useEffect } from "react";
import axios from "axios";
import BookGallery2 from "./../books/BookGallery2";
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

        // Fetch transactions for the user
        const transactionResponse = await axios.get(`http://localhost:8080/api/v1/library/alltransaction?email=${userEmail}`);
        const transactions = transactionResponse.data.data;

        // Filter transactions where isReturned is false
        const nonReturnedTransactions = transactions.filter((transaction) => transaction.isReturned === false);
        console.log("Non-returned transactions:", nonReturnedTransactions);

        // Extract bookIds from non-returned transactions
        const bookIds = nonReturnedTransactions.map((transaction) => transaction.bookId);
        console.log("Book IDs of non-returned books:", bookIds);

        // Fetch books using the extracted bookIds
        const bookResponse = await axios.get(`http://localhost:8080/api/v1/library/allbook`);
        const books = bookResponse.data.data;

        // Filter books based on bookIds
        const filteredBooks = books.filter((book) => bookIds.includes(book.bookId));
        console.log("Filtered books:", filteredBooks);

        // Set the state with filtered books
        setBooks(filteredBooks);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};



  const fetchBooksData = async (bookIds) => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/library/allbook");
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
