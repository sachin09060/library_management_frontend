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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSelectBook = (bookId) => {
    if(email === null){
      alert("Please Regiseter Or SignIn")
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
          <Card key={book.bookId} style={{ width: "calc(25% - 20px)" }}>
            <CardMedia
              component="img"
              image={book.bookUrl}
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
                Copies: {book.availableCopies}
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


// import React, { useState, useEffect } from "react";
// import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const BookGallery = ({ books }) => {
//   const [show, setShow] = useState(false);
//   const [email, setEmail] = useState(window.sessionStorage.getItem("email"));
//   const [selectedBookId, setSelectedBookId] = useState("");
//   const name = window.sessionStorage.getItem("name");
//   const navigate = useNavigate();

//   useEffect(() => {
//     setEmail(window.sessionStorage.getItem("email"));
//   }, []);

//   const handleClose = () => {
//     setShow(false);
//   };

//   const handleShow = () => setShow(true);

//   const handleSubmit = async () => {
//     try {
//       const transactionResponse = await axios.get(
//         `http://localhost:8080/api/v1/library/alltransaction?email=${email}&bookId=${selectedBookId}`
//       );
//       const existingTransaction = transactionResponse.data;

//       const existingTransactionForBook = existingTransaction.find(
//         (transaction) => transaction.bookId === selectedBookId
//       );

//       const currentDate = new Date();
//       const formattedCurrentDate = currentDate.toISOString().split("T")[0];
//       const returnDate = new Date(currentDate);
//       returnDate.setDate(returnDate.getDate() + 15);
//       const formattedReturnDate = returnDate.toISOString().split("T")[0];
//       const dueDate = new Date(returnDate);
//       dueDate.setDate(dueDate.getDate() + 1);
//       const formattedDueDate = dueDate.toISOString().split("T")[0];

//       const requestBody = {
//         email: email,
//         bookId: selectedBookId,
//         issuedDate: formattedCurrentDate,
//         dueDate: formattedDueDate,
//         returnDate: formattedReturnDate,
//         isReturned: false,
//         isRenewed: false
//       };

//       if (existingTransactionForBook) {
//         if (existingTransactionForBook.isReturned) {
//           requestBody.transactionId = existingTransactionForBook.transactionId;
//           await axios.put(
//             "http://localhost:8080/api/v1/library/updatetransaction",
//             requestBody
//           );
//           await axios.put(
//             "http://localhost:8080/api/v1/library/books/decrement",
//             { bookId: selectedBookId }
//           );
//           alert("New transaction added successfully!");
//           window.location.reload();
//         } else {
//           alert("You have already taken this book and not returned it yet.");
//           window.location.reload();
//         }
//       } else {
//         await axios.put(
//           "http://localhost:8080/api/v1/library/available/book/decrement",
//           { bookId: selectedBookId }
//         );
//         await axios.post("http://localhost:8080/api/v1/library/atransaction", requestBody);
//         alert("New transaction added successfully!");
//         window.location.reload();
//       }

//       setSelectedBookId("");
//       setEmail("");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSelectBook = (bookId) => {
//     if (email === null) {
//       alert("Please Signin to get book!");
//       navigate("/UserSignIn");
//     } else {
//       setSelectedBookId(bookId);
//       handleShow();
//     }
//   };

//   return (
//     <>
//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Hi {name}! to get Book!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>
//                 Please confirm your registered email before clicking Submit!
//               </Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email id"
//                 autoFocus
//                 value={email}
//                 disabled
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="info" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "20px",
//         }}
//       >
//         {books.map((book) => (
//           <Card
//             key={book.bookId}
//             style={{ width: "100%", maxWidth: "300px", marginBottom: "20px" }}
//           >
//             <CardMedia
//               component="img"
//               image={book.bookUrl}
//               alt={book.bookName}
//               sx={{
//                 width: "100%",
//                 height: "280px",
//                 objectFit: "cover",
//               }}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {book.bookName}
//               </Typography>
//               <Typography
//                 variant="subtitle1"
//                 color="text.secondary"
//                 gutterBottom
//               >
//                 By: {book.bookAuthor}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" gutterBottom>
//                 Genre: {book.genres}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 style={{
//                   maxHeight: "3em",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                 }}
//               >
//                 Description: {book.description}
//               </Typography>
//               <Button
//                 variant="outline-info"
//                 onClick={() => handleSelectBook(book.bookId)}
//               >
//                 Get Book
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };

// export default BookGallery;
