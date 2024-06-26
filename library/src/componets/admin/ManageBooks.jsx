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
  Snackbar,
} from "@mui/material";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const [updateBook, setUpdateBook] = useState({
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

  const [modalShow, setModalShow] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

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
      setSnackbarSeverity("error");
      console.error("Error adding Book:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to add Book. Please try again later.");
      setShowSnackbar(true);
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

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete("http://localhost:8055/api/book/delete", {
        data: { bookId: bookId },
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
        updateBook
      );
      console.log("Book updated:", response.data.data);

      fetchBooks();

      setUpdateBook({
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
      setModalShow(false);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleEditBook = (book) => {
    setUpdateBook(book);
    setModalShow(true);
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
    backgroundColor: "#008DDA",
    color: "#FFFFFF",
    borderRadius: "12px",
    padding: "24px",
    fontSize: "1.6rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const allGenres = [
    "FANTASY",
    "MYSTERY",
    "SCIENCE_FICTION",
    "NOVEL",
    "NON_FICTION",
    "HISTORY",
    "BIOGRAPHY",
    "SPIRITUALITY",
    "POETRY",
    "HUMOR",
    "DETECTIVE",
    "AUTOBIOGRAPHY",
    "PHILOSOPHY",
    "FAIRY_TALE",
    "COMICS",
    "COOK_BOOKS",
    "TRAVEL",
    "MUSIC",
    "ART_DESIGN",
    "DRAWING",
    "VISUAL_ART",
    "PHOTOGRAPHY",
    "BUSINESS",
    "ECONOMICS",
    "POLITICS",
    "FINANCE",
    "MONEY",
    "PSYCHOLOGY",
    "TECHNOLOGY",
    "BIOLOGY",
  ];

  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: " 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#F0EBE3",
          borderRadius: "10px",
          marginBottom: "10px",
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
            marginBottom: "10px",
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
            select
            label=""
            value={newBook.genre}
            onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
            SelectProps={{ native: true }}
          >
            <option value="">Select genre</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </TextField>
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
            type="datetime-local"
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
          overflow: "scroll",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Book List
        </Typography>
        <div style={{ height: "300px", overflowY: "scroll", width: "100%" }}>
          <TableContainer component={Paper}>
            <div
              style={{ maxWidth: "100%", overflowX: "auto", height: "300px" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: "8%", height: "20px" }}>
                      Book ID
                    </TableCell>
                    <TableCell style={{ width: "15%", height: "20px" }}>
                      Book Name
                    </TableCell>
                    <TableCell style={{ width: "15%", height: "20px" }}>
                      Book Image URL
                    </TableCell>
                    <TableCell style={{ width: "15%", height: "20px" }}>
                      Author
                    </TableCell>
                    <TableCell style={{ width: "15%", height: "20px" }}>
                      Genre
                    </TableCell>
                    <TableCell style={{ width: "15%", height: "20px" }}>
                      Description
                    </TableCell>
                    <TableCell style={{ width: "7%", height: "20px" }}>
                      Added Date
                    </TableCell>
                    <TableCell style={{ width: "5%", height: "20px" }}>
                      Total Copies
                    </TableCell>
                    <TableCell style={{ width: "5%", height: "20px" }}>
                      Available Copies
                    </TableCell>
                    <TableCell style={{ width: "5%", height: "20px" }}>
                      Action
                    </TableCell>
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
                          onClick={() => handleDeleteBook(book.bookId)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleEditBook(book)}
                        >
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        style={snackbarStyle}
      >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            label="Book ID"
            value={updateBook.bookId}
            onChange={(e) => setUpdateBook({ ...updateBook, bookId: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            label="Book Name"
            value={updateBook.bookName}
            onChange={(e) => setUpdateBook({ ...updateBook, bookName: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            label="Book Image URL"
            value={updateBook.bookImgUrl}
            onChange={(e) => setUpdateBook({ ...updateBook, bookImgUrl: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            label="Author"
            value={updateBook.author}
            onChange={(e) => setUpdateBook({ ...updateBook, author: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            select
            label="Genre"
            value={updateBook.genre}
            onChange={(e) => setUpdateBook({ ...updateBook, genre: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
            SelectProps={{ native: true }}
          >
            <option value="">Select genre</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </TextField>
          <TextField
            label="Description"
            value={updateBook.description}
            onChange={(e) => setUpdateBook({ ...updateBook, description: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            label="Added Date"
            type="datetime-local"
            variant="outlined"
            value={updateBook.addedDate}
            onChange={(e) => setUpdateBook({ ...updateBook, addedDate: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Total Copies"
            value={updateBook.totalCopies}
            onChange={(e) => setUpdateBook({ ...updateBook, totalCopies: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <TextField
            label="Available Copies"
            value={updateBook.availableCopies}
            onChange={(e) => setUpdateBook({ ...updateBook, availableCopies: e.target.value })}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateBook}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageBooks;
