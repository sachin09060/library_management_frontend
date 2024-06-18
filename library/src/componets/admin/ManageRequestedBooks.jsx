import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Table, TableHead,TableBody, TableCell, TableContainer, TableRow, Paper, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const ManageRequestedBooks2 = () => {
   const[messages, setMessages] = useState([]);
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[message,setMessage] = useState('');

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const fetchAllMessages = () => {
    axios.get('http://localhost:8080/api/v1/library/getallFeedback')
    .then(res => {
        console.log("all message fetched", res);
        setMessages(res.data.data)
    })
    .catch(err => {
        console.log("unable to fetch" ,err);
    })
  }



  return (
    <Container maxWidth="md" style={{ marginTop: 40, backgroundColor: '#F0EBE3', padding: '20px', borderRadius: '10px' }}>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        All Messages
      </Typography>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <TableContainer component={Paper} style={{ marginTop: 10 }}>
          <Table>
          <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>MESSAGE</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id} style={ {backgroundColor:"F6F5F2"} }>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.message}</TableCell>
                  <TableCell>
                    {/* <Button variant="outlined" color="secondary" onClick={() => handleDeleteRequestedBook(book.email)}>
                      Delete
                    </Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default ManageRequestedBooks2;