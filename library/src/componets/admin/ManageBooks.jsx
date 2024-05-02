import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Link } from '@mui/material';

const initialBooks = [
  { id: 1, title: 'Book 1', author: 'Author 1', isbn: '1234567890' },
  { id: 2, title: 'Book 2', author: 'Author 2', isbn: '0987654321' },
  { id: 3, title: 'Book 3', author: 'Author 3', isbn: '2468109753' },
  { id: 4, title: 'Book 4', author: 'Author 4', isbn: '1357924680' },
  { id: 5, title: 'Book 5', author: 'Author 5', isbn: '9876543210' }
];

const ManageBooks = () => {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: '', author: '', isbn: '' });

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.isbn) {
      const updatedBooks = [...books, { id: books.length + 1, ...newBook }];
      setBooks(updatedBooks);
      setNewBook({ title: '', author: '', isbn: '' });
    }
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Manage Books
      </Typography>
      <div>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <TextField
          label="ISBN"
          variant="outlined"
          fullWidth
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleAddBook}>
          Add
        </Button>
      </div>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        Book List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>ISBN</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteBook(book.id)}>
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

export default ManageBooks;
