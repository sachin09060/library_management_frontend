import React, { useState, useEffect } from "react";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Snackbar,
} from "@mui/material";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    bookId: "",
    bookName: "",
    bookImgUrl: "",
    author: "",
    genre: "",
    description: "",
    addedDate: "",
    totalCopies: "",
    availableCopies: "",
  });
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8055/api/book");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBookToDatabase = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8055/api/book/add",
        newBook
      );
      console.log("Book added:", response.data);

      fetchBooks();

      setNewBook({
        bookId: "",
        bookName: "",
        bookImgUrl: "",
        author: "",
        genre: "",
        description: "",
        addedDate: "",
        totalCopies: "",
        availableCopies: "",
      });
      setSnackbarSeverity("success");
      setSnackbarMessage(response.data.message);
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleAddBook = () => {
    if (
      newBook.bookId &&
      newBook.bookName &&
      newBook.author &&
      newBook.genre &&
      newBook.description &&
      newBook.addedDate &&
      newBook.totalCopies &&
      newBook.availableCopies
    ) {
      addBookToDatabase();
    }
  };

  const handleDeleteAndUpdateBook = async (bookId) => {
    try {
      await axios.delete("http://localhost:8055/api/book/delete", {
        data: {
          bookId: bookId,
        },
      });

      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleUpdateBook = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8055/api/book/update",
        newBook
      );
      console.log("Book updated:", response.data);

      fetchBooks();

      setNewBook({
        bookId: "",
        bookName: "",
        bookImgUrl: "",
        author: "",
        genre: "",
        description: "",
        addedDate: "",
        totalCopies: "",
        availableCopies: "",
      });
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const snackbarStyle = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    borderRadius: "12px",
    padding: "24px",
    fontSize: "1.6rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "20px",
          backgroundColor: "#F0EBE3",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Manage Books
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "#F0EBE3",
          }}
        >
          <TextField
            label="Book ID"
            value={newBook.bookId}
            onChange={(e) => setNewBook({ ...newBook, bookId: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Book Name"
            value={newBook.bookName}
            onChange={(e) =>
              setNewBook({ ...newBook, bookName: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Book Image URL"
            value={newBook.bookImgUrl}
            onChange={(e) =>
              setNewBook({ ...newBook, bookImgUrl: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Genre"
            value={newBook.genre}
            onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Description"
            value={newBook.description}
            onChange={(e) =>
              setNewBook({ ...newBook, description: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Added Date"
            type="date"
            variant="outlined"
            value={newBook.addedDate}
            onChange={(e) =>
              setNewBook({ ...newBook, addedDate: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Total Copies"
            value={newBook.totalCopies}
            onChange={(e) =>
              setNewBook({ ...newBook, totalCopies: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Available Copies"
            value={newBook.availableCopies}
            onChange={(e) =>
              setNewBook({ ...newBook, availableCopies: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBook}
          style={{ width: "80%", margin: "20px 0" }}
        >
          Add
        </Button>

      </div>
      <div
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#F0EBE3",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Book List
        </Typography>
        <div style={{ height: "300px", overflowY: "auto", width: "100%" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "8%" }}>Book ID</TableCell>
                  <TableCell style={{ width: "15%" }}>Book Name</TableCell>
                  <TableCell style={{ width: "15%" }}>Book Image URL</TableCell>
                  <TableCell style={{ width: "15%" }}>Author</TableCell>
                  <TableCell style={{ width: "15%" }}>Genre</TableCell>
                  <TableCell style={{ width: "20%" }}>Description</TableCell>
                  <TableCell style={{ width: "7%" }}>Added Date</TableCell>
                  <TableCell style={{ width: "5%" }}>Total Copies</TableCell>
                  <TableCell style={{ width: "5%" }}>
                    Available Copies
                  </TableCell>
                  <TableCell style={{ width: "5%" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book) => (
                  <TableRow
                    key={book.bookId}
                    style={{ height: "40px", backgroundColor: "#F6F5F2" }}
                  >
                    <TableCell style={{ fontSize: "0.8rem" }}>
                      {book.bookId}
                    </TableCell>
                    <TableCell style={{ fontSize: "0.8rem" }}>
                      {book.bookName}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "0.8rem",
                        maxWidth: "100px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {book.bookImgUrl}
                    </TableCell>
                    <TableCell style={{ fontSize: "0.8rem" }}>
                      {book.author}
                    </TableCell>
                    <TableCell style={{ fontSize: "0.8rem" }}>
                      {book.genre}
                    </TableCell>
                    <TableCell style={{ fontSize: "0.8rem" }}>
                      {book.description}
                    </TableCell>
                    <TableCell style={{ fontSize: "0.8rem" }}>
                      {book.addedDate}
                    </TableCell>
                    <TableCell style={{ fontSize: "0.8rem" }}>
                      {book.totalCopies}
                    </TableCell>
                    <TableCell style={{ fontSize: "0.8rem" }}>
                      {book.availableCopies}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDeleteAndUpdateBook(book.bookId)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleUpdateBook(book.bookId)}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Link href="/adminDash" underline="none" style={{ marginTop: "20px" }}>
          <Button variant="contained" color="primary">
            Go to Dashboard
          </Button>
        </Link>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        style={snackbarStyle}
      >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default ManageBooks;
