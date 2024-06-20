import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const BookGallery = ({ books }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(window.sessionStorage.getItem("email"));
  const [selectedBookId, setSelectedBookId] = useState("");
  const [userEmailError, setUserEmailError] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setUserEmailError(false);
  };

  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (!email.trim()) {
      setUserEmailError(true);
      return;
    }

    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0];
    const returnDate = new Date(currentDate);
    returnDate.setDate(returnDate.getDate() + 15);
    const formattedReturnDate = returnDate.toISOString().split("T")[0];
    const dueDate = new Date(returnDate);
    dueDate.setDate(dueDate.getDate() + 1);
    const formattedDueDate = dueDate.toISOString().split("T")[0];
    const requestBody = {
      email: email,
      bookId: selectedBookId,
      issuedDate: formattedCurrentDate,
      dueDate: formattedDueDate,
      returnDate: formattedReturnDate,
      isReturned: false,
      isRenewed: false,
    };

    axios.post("http://localhost:8080/api/v1/library/atransaction", requestBody)
      .then((response) => {
        if(response.data.message==="transaction added"){
        console.log(response.data);
        alert("One transaction added Successfully!");
        //decrement available book
        axios.put("http://localhost:8080/api/v1/library/available/book/decrement", { bookId: selectedBookId })
        .then((response) => {
            console.log("available book decremented", response.data.message);

            // Update transaction to mark return as false
            axios.put("http://localhost:8080/api/v1/library/updatetransaction", { transactionId: response.data.transactionId, isReturned: false })
              .then((response) => {
                console.log("Transaction updated:", response.data);
              })
              .catch((error) => {
                console.error("Unable to update transaction:", error);
              });
        })
        .catch((error) => {
            console.error("Unable to decrement available book:", error);
        });

        handleClose();
        window.location.reload();
      }
      else{
          alert("you already taken this !!");
          window.location.reload();
      }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("you already taken this !!");
        window.location.reload();
      });
  };

  const handleSelectBook = (bookId) => {
    if(email === null){
      alert("Please Register Or SignIn")
      navigate('/UserSignIn')
    }
    else{
      setSelectedBookId(bookId);
      handleShow();
    }
  };
  
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm your Email to get Book!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                autoFocus
                value={email}
                disabled
                onChange={(e) => {
                  setEmail(e.target.value);
                  setUserEmailError(false);
                }}
                isInvalid={userEmailError}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          gap: "20px",
        }}
      >
        {books.map((book) => (
          <Card key={book.bookId} style={{ width: "80%", maxWidth: "250px", margin: "10px" }}>
            <CardMedia
              component="img"
              image={book.bookUrl}
              alt={book.bookName}
              sx={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.bookName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
              >
                By: {book.bookAuthor}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Genre: {book.genres}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  maxHeight: "3em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Description: {book.description}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  maxHeight: "3em",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <span style={{color:"red"}}>Copies: {book.availableCopies}</span>
              </Typography>

              <Button
                variant="outline-info"
                onClick={() => handleSelectBook(book.bookId)}
              >
                Get Book
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default BookGallery;
