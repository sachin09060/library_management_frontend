import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Alert, Table } from "react-bootstrap";

import { TableContainer, Paper } from "@mui/material";

const AddTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [transactionData, setTransactionData] = useState({
    email: "",
    bookId: "",
    issuedDate: "",
    dueDate: "",
    returnDate: "",
    returned: false,
    renewed: false,
  });
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:8055/api/history");
      console.log("Transactions:", response.data.data);
      setTransactions(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter((transaction) =>
        Object.values(transaction).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredTransactions(filtered);
    }
  }, [searchTerm, transactions]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8055/api/history/add",
        transactionData
      );
      console.log("Transaction added:", response.data);

      fetchTransactions();

      setSnackbarSeverity("success");
      setSnackbarMessage(response.data.message);
      setShowSnackbar(true);
      setTransactionData({
        email: "",
        bookId: "",
        issuedDate: "",
        dueDate: "",
        returnDate: "",
        returned: false,
        renewed: false,
      });
    } catch (error) {
      console.error("Error adding transaction:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to add transaction. Please try again later.");
      setShowSnackbar(true);
    }
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <>
      <Container style={{ marginTop: 20 }}>
        <h2>Add Transaction</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form onSubmit={handleSubmit} style={{ width: "50%" }}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={transactionData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBookId">
              <Form.Label>Book ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book ID"
                name="bookId"
                value={transactionData.bookId}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formIssuedDate">
              <Form.Label>Issued Date</Form.Label>
              <Form.Control
                type="date"
                name="issuedDate"
                value={transactionData.issuedDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                value={transactionData.dueDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formReturnDate">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="date"
                name="returnDate"
                value={transactionData.returnDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" className="mt-4" type="submit">
              Add Transaction
            </Button>
          </Form>
        </div>
        <Alert
          show={showSnackbar}
          variant={snackbarSeverity}
          onClose={handleSnackbarClose}
          dismissible
          style={{ marginTop: 20 }}
        >
          {snackbarMessage}
        </Alert>
      </Container>
      <Container style={{ marginTop: 20 }}>
        <h2>All Transactions</h2>
        <Form.Group controlId="searchBox">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <TableContainer component={Paper}>
            <div
              style={{ maxWidth: "100%", overflowX: "auto", height: "300px" }}
            >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Book ID</th>
                    <th>Issued Date</th>
                    <th>Due Date</th>
                    <th>Return Date</th>
                    <th>Returned</th>
                    <th>Renewed</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.email}</td>
                      <td>{transaction.bookId}</td>
                      <td>{transaction.issuedDate}</td>
                      <td>{transaction.dueDate}</td>
                      <td>{transaction.returnDate}</td>
                      <td>{transaction.returned ? "Yes" : "No"}</td>
                      <td>{transaction.renewed ? "Yes" : "No"}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default AddTransaction;
