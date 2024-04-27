import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

const initialIssuedBooks = [
  { id: 1, bookTitle: 'Book 1', isbn: 'ISBN123', personName: 'John Doe', email: 'john@example.com', startDate: '2024-04-01' },
  { id: 2, bookTitle: 'Book 2', isbn: 'ISBN456', personName: 'Jane Doe', email: 'jane@example.com', startDate: '2024-04-05' },
  { id: 3, bookTitle: 'Book 3', isbn: 'ISBN789', personName: 'Alice Smith', email: 'alice@example.com', startDate: '2024-04-10' },
];

const ManageIssuedBooks = () => {
  const [issuedBooks, setIssuedBooks] = useState(initialIssuedBooks);
  const [newIssuedBook, setNewIssuedBook] = useState({ bookTitle: '', isbn: '', personName: '', email: '', startDate: '' });

  const handleAddIssuedBook = () => {
    if (newIssuedBook.bookTitle && newIssuedBook.isbn && newIssuedBook.personName && newIssuedBook.email && newIssuedBook.startDate) {
      const updatedIssuedBooks = [...issuedBooks, { id: issuedBooks.length + 1, ...newIssuedBook }];
      setIssuedBooks(updatedIssuedBooks);
      setNewIssuedBook({ bookTitle: '', isbn: '', personName: '', email: '', startDate: '' });
    }
  };

  const handleDeleteIssuedBook = (id) => {
    const updatedIssuedBooks = issuedBooks.filter(book => book.id !== id);
    setIssuedBooks(updatedIssuedBooks);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Manage Issued Books
      </Typography>
      <div>
        <TextField
          label="Book Title"
          variant="outlined"
          fullWidth
          value={newIssuedBook.bookTitle}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, bookTitle: e.target.value })}
        />
        <TextField
          label="ISBN"
          variant="outlined"
          fullWidth
          value={newIssuedBook.isbn}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, isbn: e.target.value })}
        />
        <TextField
          label="Person Name"
          variant="outlined"
          fullWidth
          value={newIssuedBook.personName}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, personName: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={newIssuedBook.email}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, email: e.target.value })}
        />
        <TextField
          label="Start Date"
          type="date"
          variant="outlined"
          fullWidth
          value={newIssuedBook.startDate}
          onChange={(e) => setNewIssuedBook({ ...newIssuedBook, startDate: e.target.value })}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" color="primary" onClick={handleAddIssuedBook} style={{ marginTop: 10 }}>
          Add
        </Button>
      </div>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        Issued Books List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Book Title</TableCell>
              <TableCell>ISBN</TableCell>
              <TableCell>Person Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issuedBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.bookTitle}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.personName}</TableCell>
                <TableCell>{book.email}</TableCell>
                <TableCell>{book.startDate}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteIssuedBook(book.id)}>
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

export default ManageIssuedBooks;
