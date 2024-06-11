import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import BookGallery from "./BookCard";
import { Typography, Pagination, TextField, MenuItem } from "@mui/material";

const BooksGalleryLayout = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState({ searchBy: "", query: "" });
  const [searchClicked, setSearchClicked] = useState(false);
  const booksPerPage = 8;

  const fetchBooks = useCallback(async () => {
    let url = "http://localhost:8055/api/book";
    if (searchParams.searchBy && searchParams.query) {
      if (searchParams.searchBy === "genre") {
        url += `?${searchParams.searchBy}=${searchParams.query.toUpperCase()}`;
      } else {
        url += `?${searchParams.searchBy}=${searchParams.query}`;
      }
    }
    try {
      const response = await axios.get(url);
      setBooks(response.data.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }, [searchParams]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
    setSearchClicked(false);
  };

  useEffect(() => {
    if (searchClicked || (searchParams.searchBy && searchParams.query)) {
      fetchBooks();
    } else {
      const fetchAllBooks = async () => {
        try {
          const response = await axios.get("http://localhost:8055/api/book");
          setBooks(response.data.data);
        } catch (error) {
          console.error("Error fetching all books:", error);
        }
      };
      fetchAllBooks();
    }
  }, [fetchBooks, searchClicked, searchParams]);

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = page * booksPerPage;
  const paginatedBooks = books ? books.slice(startIndex, endIndex) : [];

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
        <TextField
          select
          label="Search by"
          variant="outlined"
          style={{ marginBottom: 10 }}
          fullWidth
          name="searchBy"
          value={searchParams.searchBy}
          onChange={handleSearchChange}
        >
          <MenuItem value="bookId">Book ID</MenuItem>
          <MenuItem value="bookName">Book Name</MenuItem>
          <MenuItem value="author">Author</MenuItem>
          <MenuItem value="genre">Genre</MenuItem>
        </TextField>
        <TextField
          label={`Search by ${searchParams.searchBy}`}
          variant="outlined"
          style={{ marginBottom: 10 }}
          name="query"
          fullWidth
          value={searchParams.query}
          onChange={handleSearchChange}
        />
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
          <Typography variant="body1">No books found.</Typography>
        )}
      </div>
    </div>
  );
};

export default BooksGalleryLayout;
