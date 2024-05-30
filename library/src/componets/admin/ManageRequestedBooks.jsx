import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const ManageRequestedBooks = () => {
  const [requestedBooks, setRequestedBooks] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const fetchAllMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/library/getfeedback');
      setRequestedBooks(response.data.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
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


  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40, backgroundColor: '#F0EBE3', padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        All Messages
      </Typography>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <TableContainer component={Paper} style={{ marginTop: 10 }}>
          <Table>
            <TableBody>
              {requestedBooks.map((book) => (
                <TableRow key={book._id} style={ {backgroundColor:"F6F5F2"} }>
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
      </div>
      <Snackbar open={alertOpen} autoHideDuration={2000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%', backgroundColor: '#005B41', fontSize: '1.2rem', color: 'white' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ManageRequestedBooks;