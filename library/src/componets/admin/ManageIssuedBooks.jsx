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

const ManageIssuedBooks = () => {
  const [newIssuedBook, setNewIssuedBook] = useState({
    userId: "",
    bookId: "",
    issuedDate: "",
    dueDate: "",
    returnDate: "",
    returned: false,
    renewed: false,
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [issuedBooks, setIssuedBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    userId: "",
    bookId: "",
    issuedDate: "",
    dueDate: "",
    returnDate: "",
  });

  useEffect(() => {
    fetchIssuedBooks();
  }, []);

  const fetchIssuedBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8055/api/history");
      setIssuedBooks(response.data.data);
    } catch (error) {
      console.error("Error fetching issued books:", error);
    }
  };

  const handleAddIssuedBook = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8055/api/history/add",
        newIssuedBook
      );
      console.log("Issued book added:", response.data);
      setNewIssuedBook({
        userId: "",
        bookId: "",
        issuedDate: "",
        dueDate: "",
        returnDate: "",
        returned: false,
        renewed: false,
      });
      setSnackbarSeverity("success");
      setSnackbarMessage(response.data.message);
      setSnackbarOpen(true);
      fetchIssuedBooks();
    } catch (error) {
      console.error("Error adding issued book:", error);
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
    backgroundColor: "#008DDA",
    color: "#FFFFFF",
    borderRadius: "12px",
    padding: "24px",
    fontSize: "1.6rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  // Filter issued books based on search query
  const filteredBooks = issuedBooks.filter(book =>
    book.userId.toLowerCase().includes(searchQuery.userId.toLowerCase()) &&
    book.bookId.toLowerCase().includes(searchQuery.bookId.toLowerCase()) &&
    book.issuedDate.includes(searchQuery.issuedDate) &&
    book.dueDate.includes(searchQuery.dueDate) &&
    book.returnDate.includes(searchQuery.returnDate)
  );

  return (
    <Container
      maxWidth="xl"
      style={{
        width: "100%",
        padding: "10px",
        backgroundColor: "#F0EBE3",
        borderRadius: "10px",
        marginBottom: "10px",
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
          Manage Issued Books
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
            label="User ID"
            variant="outlined"
            fullWidth
            value={searchQuery.userId}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, userId: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Book ID"
            variant="outlined"
            fullWidth
            value={searchQuery.bookId}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, bookId: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Issued Date"
            type="date"
            variant="outlined"
            fullWidth
            value={searchQuery.issuedDate}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, issuedDate: e.target.value })
            }
            InputLabelProps={{ shrink: true }}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Due Date"
            type="date"
            variant="outlined"
            fullWidth
            value={searchQuery.dueDate}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, dueDate: e.target.value })
            }
            InputLabelProps={{ shrink: true }}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Return Date"
            type="date"
            variant="outlined"
            fullWidth
            value={searchQuery.returnDate}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, returnDate: e.target.value })
            }
            InputLabelProps={{ shrink: true }}
            style={{ width: "200px", margin: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddIssuedBook}
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
            Issued Books List
          </Typography>
          <div
            style={{
              width: "100%",
              height: "340px",
              overflowY: "auto",
              backgroundColor: "#F0EBE3",
            }}
          >
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TextField
                        label="User ID"
                        variant="standard"
                        value={searchQuery.userId}
                        onChange={(e) =>
                          setSearchQuery({ ...searchQuery, userId: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        label="Book ID"
                        variant="standard"
                        value={searchQuery.bookId}
                        onChange={(e) =>
                          setSearchQuery({ ...searchQuery, bookId: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        label="Issued Date"
                        variant="standard"
                        value={searchQuery.issuedDate}
                        onChange={(e) =>
                          setSearchQuery({ ...searchQuery, issuedDate: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        label="Due Date"
                        variant="standard"
                        value={searchQuery.dueDate}
                        onChange={(e) =>
                          setSearchQuery({ ...searchQuery, dueDate: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        label="Return Date"
                        variant="standard"
                        value={searchQuery.returnDate}
                        onChange={(e) =>
                          setSearchQuery({ ...searchQuery, returnDate: e.target.value })
                        }
                      />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredBooks.map((book) => (
                    <TableRow
                      key={book.id}
                      style={{
                        height: "40px",
                        backgroundColor: "#F6F5F2",
                      }}
                    >
                      <TableCell>{book.userId}</TableCell>
                      <TableCell>{book.bookId}</TableCell>
                      <TableCell>{book.issuedDate}</TableCell>
                      <TableCell>{book.dueDate}</TableCell>
                      <TableCell>{book.returnDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={500}
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

export default ManageIssuedBooks;
