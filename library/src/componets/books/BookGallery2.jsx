import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const BookGallery2 = ({ books }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(window.sessionStorage.getItem("email"));
  const [selectedBookId, setSelectedBookId] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedAction, setSelectedAction] = useState("");
  const name = window.sessionStorage.getItem("name");

  console.log(email);

  useEffect(() => {
    axios
      .get("http://localhost:8055/api/user")
      .then((response) => {
        setUsers(response.data.data.map((user) => user.email));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setEmailError(false);
    setSelectedAction("");
    window.location.reload();
  };

  const handleShow = () => setShow(true);

  const handleSubmit = (actionType) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email) || !users.includes(email)) {
      setEmailError(true);
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

    let requestBody = {
      email: email,
      bookId: selectedBookId,
      issuedDate: formattedCurrentDate,
      dueDate: formattedDueDate,
      returnDate: formattedReturnDate,
      returned: false,
      renewed: false,
    };

    if (actionType === "return") {
      requestBody.returned = true;
      requestBody.returnDate = formattedCurrentDate;
    } else if (actionType === "renew") {
      requestBody.renewed = true;
    }

    axios
      .put("http://localhost:8055/api/history/update", requestBody)
      .then((response) => {
        console.log(response.data);
        alert("Book returned successfully!");
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSelectBook = (bookId, actionType) => {
    setSelectedBookId(bookId);
    setSelectedAction(actionType);
    handleShow();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Hi {name}! to get Book!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Please confirm your registered email before clicking Submit!
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email id"
                autoFocus
                value={email}
                disabled
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                isInvalid={emailError}
              />
              <Form.Control.Feedback type="invalid">
                {emailError
                  ? "Invalid email. Please enter a valid registered email."
                  : "Please enter a valid email."}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {selectedAction === "return" && (
            <Button variant="info" onClick={() => handleSubmit("return")}>
              Return Book
            </Button>
          )}
          {selectedAction === "renew" && (
            <Button variant="info" onClick={() => handleSubmit("renew")}>
              Renew Book
            </Button>
          )}
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
          <Card key={book.bookId} style={{ width: "calc(25% - 20px)" }}>
            <CardMedia
              component="img"
              image={book.bookImgUrl}
              alt={book.bookName}
              sx={{ width: "225px", height: "268px", objectFit: "cover" }}
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
                By: {book.author}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Genre: {book.genre}
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
              <Button
                variant="outline-info"
                size="sm"
                className="ms"
                onClick={() => handleSelectBook(book.bookId, "return")}
              >
                Return Book
              </Button>

              <Button
                variant="outline-info"
                size="sm"
                className="ms"
                onClick={() => handleSelectBook(book.bookId, "renew")}
              >
                Renew Book
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default BookGallery2;
