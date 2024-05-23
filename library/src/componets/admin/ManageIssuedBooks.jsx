import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

const ManageIssuedBooks = () => {
  const [newIssuedBook, setNewIssuedBook] = useState({
    userId: '',
    bookId: '',
    issuedDate: '',
    dueDate: '',
    returnDate: '',
    returned: false,
    renewed: false
  });

  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    fetchIssuedBooks();
  }, []);

  const fetchIssuedBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8055/api/history');
      setIssuedBooks(response.data);
    } catch (error) {
      console.error('Error fetching issued books:', error);
    }
  };

  const handleAddIssuedBook = async () => {
    try {
      const response = await axios.post('http://localhost:8055/api/history/add', newIssuedBook);
      console.log('Issued book added:', response.data);
      setNewIssuedBook({
        userId: '',
        bookId: '',
        issuedDate: '',
        dueDate: '',
        returnDate: '',
        returned: false,
        renewed: false
      });
      fetchIssuedBooks(); // Refresh the issued books list
    } catch (error) {
      console.error('Error adding issued book:', error);
    }
  };

  const handleDeleteIssuedBook = async (id) => {
    try {
      await axios.delete(`http://localhost:8055/api/history/delete/${id}`);
      console.log('Issued book deleted:', id);
      fetchIssuedBooks();
    } catch (error) {
      console.error('Error deleting issued book:', error);
    }
  };

  return (
    <Container maxWidth="xl" style={{ marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#EBF3E8', borderRadius: '10px', marginBottom: '20px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Manage Issued Books
      </Typography>
      <div style={{ width: '100%', padding: '20px', backgroundColor: '#EBF3E8', borderRadius: '10px', marginBottom: '20px' }}>
        <TextField
          label="User ID"
          variant="outlined"
          fullWidth
          value={newIssuedBook.userId}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, userId: e.target.value })}
        />
        <TextField
          label="Book ID"
          variant="outlined"
          fullWidth
          value={newIssuedBook.bookId}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, bookId: e.target.value })}
        />
        <TextField
          label="Issued Date"
          type="date"
          variant="outlined"
          fullWidth
          value={newIssuedBook.issuedDate}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, issuedDate: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Due Date"
          type="date"
          variant="outlined"
          fullWidth
          value={newIssuedBook.dueDate}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, dueDate: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Return Date"
          type="date"
          variant="outlined"
          fullWidth
          value={newIssuedBook.returnDate}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, returnDate: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" color="primary" onClick={handleAddIssuedBook}style={{ width: '80%', margin: '20px 0' }}>
          Add
        </Button>
      </div>
      <div style={{ width: '100%', padding: '10px', backgroundColor: '#D2E3C8', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Issued Books List
        </Typography>
        <div style={{ height: '300px', overflowY: 'auto', width: '100%' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Book ID</TableCell>
                  <TableCell>Issued Date</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Return Date</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {issuedBooks.map((book) => (
                  <TableRow key={book.id} style={{ height: '40px', backgroundColor: '#EBF3E8' }}>
                    <TableCell>{book.userId}</TableCell>
                    <TableCell>{book.bookId}</TableCell>
                    <TableCell>{book.issuedDate}</TableCell>
                    <TableCell>{book.dueDate}</TableCell>
                    <TableCell>{book.returnDate}</TableCell>
                    <TableCell>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Link href="/adminDash" underline="none" style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary">
            Go to Dashboard
          </Button>
        </Link>
      </div>
      </div>
    </Container>
  );
};

export default ManageIssuedBooks;
