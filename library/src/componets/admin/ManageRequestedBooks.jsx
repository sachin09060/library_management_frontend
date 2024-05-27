import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ManageRequestedBooks = () => {
  const [requestedBooks, setRequestedBooks] = useState([]);
  const [newRequestedBook, setNewRequestedBook] = useState({ name: '', email: '', message: '' });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const fetchAllMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8055/api/contact');
      setRequestedBooks(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleAddRequestedBook = async () => {
    try {
      const response = await axios.post('http://localhost:8055/api/contact/add', newRequestedBook);
      console.log('Message added:', response.data);

      fetchAllMessages();

      setNewRequestedBook({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  const handleDeleteRequestedBook = async (email) => {
    try {
      await axios.delete('http://localhost:8055/api/contact/delete', { data: { email } });
      fetchAllMessages();
      setAlertMessage('Message request deleted successfully!');
      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const handleClick = () => {
    navigate('/adminDash');
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Manage Requests
      </Typography>
      <div>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={newRequestedBook.name}
          onChange={(e) => setNewRequestedBook({ ...newRequestedBook, name: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={newRequestedBook.email}
          onChange={(e) => setNewRequestedBook({ ...newRequestedBook, email: e.target.value })}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={newRequestedBook.message}
          onChange={(e) => setNewRequestedBook({ ...newRequestedBook, message: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleAddRequestedBook} style={{ marginTop: 10 }}>
          Add Message
        </Button>
      </div>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        All Messages
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requestedBooks.map((book) => (
              <TableRow key={book._id}>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.email}</TableCell>
                <TableCell>{book.message}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteRequestedBook(book.email)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleClick} style={{ marginTop: 2, '&:hover': { backgroundColor: '#303f9f' } }}>
        Go to Dashboard
      </Button>
      <Snackbar open={alertOpen} autoHideDuration={2000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%', backgroundColor: '#8b0000', fontSize: '1.2rem', color: 'white' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ManageRequestedBooks;
