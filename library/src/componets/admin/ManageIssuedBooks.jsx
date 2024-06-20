import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ManageIssuedBooks2 = () => {
  const [transactions, setTransactions] = useState("");
  
  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = () => {
    axios
      .get("http://localhost:8080/api/v1/library/alltransaction")
      .then((res) => {
        console.log("Transactions are fetched", res);
        setTransactions(res.data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  };


  return (
    <Container maxWidth="xl">
      <div>
        <Typography variant="h2" align="center" gutterBottom>
          Manage Issued Books
        </Typography>
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            Issued Books List
          </Typography>
          <div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>Book ID</TableCell>
                    <TableCell>Issued Date</TableCell>
                    <TableCell>Due Date</TableCell>
                    <TableCell>Return Date</TableCell>
                    <TableCell>Return</TableCell>
                    <TableCell>Renewed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions && transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.email}</TableCell>
                      <TableCell>{transaction.bookId}</TableCell>
                      <TableCell>{transaction.issuedDate}</TableCell>
                      <TableCell>{transaction.dueDate}</TableCell>
                      <TableCell>{transaction.returnDate}</TableCell>
                      <TableCell>
                        {transaction.isReturned ? "Returned" : "Not Returned"}
                      </TableCell>
                      <TableCell>
                        {transaction.isRenewed ? "Renewed" : "Not Renewed"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ManageIssuedBooks2;
