import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Link } from '@mui/material';

const initialBooks = [
  { bookId: 1, bookImgUrl: 'Book 1', bookName: 'Author 1', author: '1234567890' , genre: 'Genre', description: 'description', addedDate:'addedDate', totalCopies:'totalCopies', availableCopies: 'availableCopies'},
  { bookId: 2, bookImgUrl: 'Book 2', bookName: 'Author 2', author: '0987654321' , genre: 'Genre', description: 'description', addedDate:'addedDate', totalCopies:'totalCopies', availableCopies: 'availableCopies'},
  { bookId: 3, bookImgUrl: 'Book 3', bookName: 'Author 3', author: '2468109753' , genre: 'Genre', description: 'description', addedDate:'addedDate', totalCopies:'totalCopies', availableCopies: 'availableCopies'},
  { bookId: 4, bookImgUrl: 'Book 4', bookName: 'Author 4', author: '1357924680' , genre: 'Genre', description: 'description', addedDate:'addedDate', totalCopies:'totalCopies', availableCopies: 'availableCopies'},
  { bookId: 5, bookImgUrl: 'Book 5', bookName: 'Author 5', author: '9876543210' , genre: 'Genre', description: 'description', addedDate:'addedDate', totalCopies:'totalCopies', availableCopies: 'availableCopies'}
];

const ManageBooks = () => {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: '', author: '', isbn: '' });

  const handleAddBook = () => {
    if (newBook.bookId && newBook.bookName && newBook.author && newBook.genre && newBook.description && newBook.addedDate && newBook.totalCopies && newBook.availableCopies) {
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
          label="Book ID"
          variant="outlined"
          fullWidth
          value={newBook.bookId}
          onChange={(e) => setNewBook({ ...newBook, bookId: e.target.value })}
        />
        <TextField
          label="Book Name"
          variant="outlined"
          fullWidth
          value={newBook.bookName}
          onChange={(e) => setNewBook({ ...newBook, bookName: e.target.value })}
        />
        <TextField
          label="Book URL"
          variant="outlined"
          fullWidth
          value={newBook.bookImgUrl}
          onChange={(e) => setNewBook({ ...newBook, bookImgUrl: e.target.value })}
        />
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <TextField
          label="Genre"
          variant="outlined"
          fullWidth
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
        />
        <TextField
          label="Added Date"
          variant="outlined"
          fullWidth
          value={newBook.addedDate}
          onChange={(e) => setNewBook({ ...newBook, addedDate: e.target.value })}
        />
        <TextField
          label="Total Copies"
          variant="outlined"
          fullWidth
          value={newBook.totalCopies}
          onChange={(e) => setNewBook({ ...newBook, totalCopies: e.target.value })}
        />
        <TextField
          label="Available Copies"
          variant="outlined"
          fullWidth
          value={newBook.availableCopies}
          onChange={(e) => setNewBook({ ...newBook, availableCopies: e.target.value })}
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
              <TableCell>Book ID</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell>Book URL</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Added Date</TableCell>
              <TableCell>Total Copies</TableCell>
              <TableCell>Available Copies</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.isbn}</TableCell>
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
