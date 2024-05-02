import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

const initialRequestedBooks = [
  { id: 1, bookTitle: 'Book 1', personName: 'John Doe', email: 'john@example.com', requestedDate: '2024-04-01' },
  { id: 2, bookTitle: 'Book 2', personName: 'Jane Doe', email: 'jane@example.com', requestedDate: '2024-04-05' },
  { id: 3, bookTitle: 'Book 3', personName: 'Alice Smith', email: 'alice@example.com', requestedDate: '2024-04-10' },
];

const ManageRequestedBooks = () => {
  const [requestedBooks, setRequestedBooks] = useState(initialRequestedBooks);
  const [newRequestedBook, setNewRequestedBook] = useState({ bookTitle: '', personName: '', email: '', requestedDate: '' });

  const handleAddRequestedBook = () => {
    if (newRequestedBook.bookTitle && newRequestedBook.personName && newRequestedBook.email && newRequestedBook.requestedDate) {
      const updatedRequestedBooks = [...requestedBooks, { id: requestedBooks.length + 1, ...newRequestedBook }];
      setRequestedBooks(updatedRequestedBooks);
      setNewRequestedBook({ bookTitle: '', personName: '', email: '', requestedDate: '' });
    }
  };

  const handleDeleteRequestedBook = (id) => {
    const updatedRequestedBooks = requestedBooks.filter(book => book.id !== id);
    setRequestedBooks(updatedRequestedBooks);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Manage Requested Books
      </Typography>
      <div>
        <TextField
          label="Book Title"
          variant="outlined"
          fullWidth
          value={newRequestedBook.bookTitle}
          onChange={(e) => setNewRequestedBook({ ...newRequestedBook, bookTitle: e.target.value })}
        />
        <TextField
          label="Person Name"
          variant="outlined"
          fullWidth
          value={newRequestedBook.personName}
          onChange={(e) => setNewRequestedBook({ ...newRequestedBook, personName: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={newRequestedBook.email}
          onChange={(e) => setNewRequestedBook({ ...newRequestedBook, email: e.target.value })}
        />
        <TextField
          label="Requested Date"
          type="date"
          variant="outlined"
          fullWidth
          value={newRequestedBook.requestedDate}
          onChange={(e) => setNewRequestedBook({ ...newRequestedBook, requestedDate: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" color="primary" onClick={handleAddRequestedBook} style={{ marginTop: 10 }}>
          Add
        </Button>
      </div>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        Requested Books List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book Title</TableCell>
              <TableCell>Requested Person</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Requested Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requestedBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.bookTitle}</TableCell>
                <TableCell>{book.personName}</TableCell>
                <TableCell>{book.email}</TableCell>
                <TableCell>{book.requestedDate}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteRequestedBook(book.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link href="/adminDash" underline="none" style={{ display: 'block', textAlign: 'center', marginTop: 20 }}>
        <Button variant="contained" color="primary" sx={{ '&:hover': { backgroundColor: '#303f9f' } }}>
          Go to Dashboard
        </Button>
      </Link>
    </Container>
  );
};

export default ManageRequestedBooks;
