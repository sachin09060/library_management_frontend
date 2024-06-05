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
} from "@mui/material";

const ManageIssuedBooks2 = () => {
const[transactions, setTransactions] = useState(''); 
const[bookId,setBookId] = useState('');
const[email, setEmail] = useState('');
const[issuedDate,setIssuedDate] = useState('');
const[dueDate,setDueDate] = useState('');
const[returnDate, setReturnDate] = useState('')

const clearFields = () =>{
    setBookId('');
    setEmail('');
    setIssuedDate('');
    setDueDate('');
    setReturnDate('');
}

useEffect(() => {
    getTransactions()
},[])

const addTransaction = () =>{
    axios.post('http://localhost:8080/api/v1/library/atransaction',{
        bookId,email,issuedDate,dueDate,returnDate
    })
    .then(res =>{
        console.log("Transaction added", res);
        alert("transaction added")
        clearFields()
    })
    .catch(err => {
        console.log("unable to do transation" , err);
    })
}

const getTransactions = () =>{
    axios.get('http://localhost:8080/api/v1/library/alltransaction')
    .then(res => {
        console.log("transactions are fetched",res);
        setTransactions(res.data.data || [])
    })
}
  

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
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Book ID"
            variant="outlined"
            fullWidth
            value={bookId}
            onChange={(e) => {setBookId(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />

          <TextField
            label="Issued Date"
            type="date"
            variant="outlined"
            fullWidth
            value={issuedDate}
            onChange={(e) => {setIssuedDate(e.target.value)}}
            InputLabelProps={{ shrink: true }}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Due Date"
            type="date"
            variant="outlined"
            fullWidth
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Return Date"
            type="date"
            variant="outlined"
            fullWidth
            value={returnDate}
            onChange={(e) => {setReturnDate(e.target.value)}}
            InputLabelProps={{ shrink: true }}
            style={{ width: "200px", margin: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => addTransaction()}
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
                    <TableCell>Email</TableCell>
                    <TableCell>Book ID</TableCell>
                    <TableCell>Issued Date</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell>Return Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions && transactions.map((book) => (
                    <TableRow
                      key={book.id}
                      style={{
                        height: "40px",
                        backgroundColor: "#F6F5F2",
                      }}
                    >
                      <TableCell>{book.email}</TableCell>
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
      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        style={snackbarStyle}
      >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar> */}
    </Container>
  );
};

export default ManageIssuedBooks2;
