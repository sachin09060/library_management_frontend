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
//   const [emailError, setEmailError] = useState(false);
//   const [users, setUsers] = useState([]);
//   const name = window.sessionStorage.getItem("name");

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:8055/api/user")
//       .then((response) => {
//         setUsers(response.data.data.map((user) => user.email));
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, []);

//   const handleClose = () => {
//     setShow(false);
//     setEmailError(false);
//   };

//   const handleShow = () => setShow(true);

//   const handleSubmit = async () => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim() || !emailPattern.test(email) || !users.includes(email)) {
//       setEmailError(true);
//       return;
//     }

//     try {
//       const transactionResponse = await axios.get(
//         `http://localhost:8055/api/history?email=${email}&bookId=${selectedBookId}`
//       );
//       const existingTransaction = transactionResponse.data.data;

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
//         returned: false,
//       };

//       if (existingTransactionForBook) {
//         if (existingTransactionForBook.returned) {
//           requestBody._id = existingTransactionForBook._id;
//           await axios.put(
//             "http://localhost:8055/api/history/update",
//             requestBody
//           );
//           await axios.put(
//             "http://localhost:8055/api/history/decrementAvailableBook",
//             { bookId: selectedBookId }
//           );
//           alert("Transaction updated successfully!");
//           window.location.reload();
//         } else {
//           alert("You have already taken this book and not returned it yet.");
//         }
//       } else {
//         await axios.put(
//           "http://localhost:8055/api/history/decrementAvailableBook",
//           { bookId: selectedBookId }
//         );
//         await axios.post("http://localhost:8055/api/history/add", requestBody);
//         alert("New transaction added successfully!");
//         window.location.reload();
//       }

//       setSelectedBookId("");
//       setEmail("");
//       setEmailError(false);
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
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setEmailError(false);
//                 }}
//                 isInvalid={emailError}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {emailError
//                   ? "Invalid email. Please enter a valid registered email."
//                   : "Please enter a valid email."}
//               </Form.Control.Feedback>
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
//           justifyContent: "left",
//           gap: "20px",
//         }}
//       >
//         {books.map((book) => (
//           <Card key={book.bookId} style={{ width: "calc(25% - 20px)" }}>
//             <CardMedia
//               component="img"
//               image={book.bookImgUrl}
//               alt={book.bookName}
//               sx={{ width: "225px", height: "268px", objectFit: "cover" }}
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
//                 By: {book.author}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" gutterBottom>
//                 Genre: {book.genre}
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

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookGallery = ({ books }) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(window.sessionStorage.getItem("email"));
  const [selectedBookId, setSelectedBookId] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [users, setUsers] = useState([]);
  const name = window.sessionStorage.getItem("name");

  const navigate = useNavigate();

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
    setEmailError(false);
    window.location.reload();
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email) || !users.includes(email)) {
      setEmailError(true);
      window.location.reload();
      return;
    }

    try {
      const transactionResponse = await axios.get(
        `http://localhost:8055/api/history?email=${email}&bookId=${selectedBookId}`
      );
      const existingTransaction = transactionResponse.data.data;

      const existingTransactionForBook = existingTransaction.find(
        (transaction) => transaction.bookId === selectedBookId
      );

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
        returned: false,
      };

      if (existingTransactionForBook) {
        if (existingTransactionForBook.returned) {
          requestBody._id = existingTransactionForBook._id;
          await axios.put(
            "http://localhost:8055/api/history/update",
            requestBody
          );
          await axios.put(
            "http://localhost:8055/api/history/decrementAvailableBook",
            { bookId: selectedBookId }
          );
          alert("New transaction added successfully!");
          window.location.reload();
        } else {
          alert("You have already taken this book and not returned it yet.");
          window.location.reload();
        }
      } else {
        await axios.put(
          "http://localhost:8055/api/history/decrementAvailableBook",
          { bookId: selectedBookId }
        );
        await axios.post("http://localhost:8055/api/history/add", requestBody);
        alert("New transaction added successfully!");
        window.location.reload();
      }

      setSelectedBookId("");
      setEmail("");
      setEmailError(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectBook = (bookId) => {
    if (email === null) {
      alert("Please Signin to get book!");
      navigate("/UserSignIn");
    } else {
      setSelectedBookId(bookId);
      handleShow();
    }
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
          <Button variant="info" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {books.map((book) => (
          <Card
            key={book.bookId}
            style={{ width: "100%", maxWidth: "300px", marginBottom: "20px" }}
          >
            <CardMedia
              component="img"
              image={book.bookImgUrl}
              alt={book.bookName}
              sx={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
              }}
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
