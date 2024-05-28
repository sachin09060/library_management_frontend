import React, { useState, useEffect } from "react";
import axios from "axios";
import BookGallery from "./BookGallery";
import { Typography, Pagination, TextField, Button, MenuItem } from "@mui/material";

const BooksGalleryLayout = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState({ searchBy: "", query: "" });
  const [searchClicked, setSearchClicked] = useState(false);
  const booksPerPage = 8;

  const fetchBooks = async () => {
    let url = "http://localhost:8055/api/book";
    if (searchParams.searchBy && searchParams.query) {
      url += `?${searchParams.searchBy}=${searchParams.query}`;
    }
    try {
      const response = await axios.get(url);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    setSearchClicked(true);
  };

  useEffect(() => {
    fetchBooks();
  }, [searchClicked]);

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = page * booksPerPage;
  const paginatedBooks = books.slice(startIndex, endIndex);

  return (
    <div className="App" style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "20px", textAlign: "left" }}>
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
          fullWidth
          name="query"
          value={searchParams.query}
          onChange={handleSearchChange}
        />
        <Button variant="contained" onClick={handleSearch} style={{ marginBottom: 20 }}>
          Search
        </Button>
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
