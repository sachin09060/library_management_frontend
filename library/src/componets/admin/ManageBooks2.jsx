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
  Snackbar,
} from "@mui/material";

const ManageBooks2 = () => {

    const[books, setBooks] = useState([])
    const[book,setBook]=useState('')
    const[bookId, setBookId] = useState('')
    const[bookName, setBookName] = useState('')
    const[bookUrl, setBookUrl] = useState('')
    const[bookAuthor, setBookAuthor] = useState('')
    const[genres, setGenres] = useState('')
    const[description, setDescirption] = useState('')
    const[addedDate, setAddedDate] = useState ('')  
    const[totalCopies, setTotalCopies] = useState('')
    const[availableCopies, setAvailableCopies] = useState('')
    
    useEffect(()=>{
      getBooks(); 
    },[])


    const clearFields = () =>{
      setBookId('');
      setBookName('');
      setBookUrl('');
      setBookAuthor('');
      setDescirption('');
      setGenres('');
      setAddedDate('');
      setTotalCopies('');
      setAvailableCopies('')
    }


    const getBooks = () =>{
      axios.get('http://localhost:8080/api/v1/library/allbook')
      .then(response =>{
        console.log("Books are getched", response);
        setBooks(response.data.data || [])
      })
      .catch(error => {
        console.log("failed to fetch",error);
      })
    }


const addBooks = () => {
     console.log(bookId, bookName, bookUrl, bookAuthor,genres,description, addedDate,totalCopies,availableCopies);
    if(!bookId || !bookName || !bookUrl || !bookAuthor || !genres || !description || !addedDate || !totalCopies
        || !availableCopies){
        alert('Fill all the fields');
    }
    else{
    axios.post('http://localhost:8080/api/v1/library/abook' ,{bookId,bookName,bookUrl,
        bookAuthor,genres,description,addedDate,totalCopies,availableCopies})
        .then(response =>{
          if(response.data.message === "Book added"){
            console.log("added successfully",response.data.data);
            alert("successful added")
            clearFields()
            getBooks();
          }
          else{
            alert("book already present")
          }   
        })
        .catch(error => {
            console.log("Unable to add",error);
        })

    }
}  

const deletBook = (bookId) =>{
    axios.delete('http://localhost:8080/api/v1/library/deletebookbyid',{data:{bookId}})
    .then(response => {
      console.log("deleted successfully", response);
      getBooks();
    })
    .catch(error => {
      console.log("failed to delete",error);
    })
}

const selectBookToUpdate = (bookId) =>{
    const selectedBook = books.find(book =>bookId===book.bookId )
    setBookId(selectedBook.bookId)
    setBookName(selectedBook.bookName)
    setBookUrl(selectedBook.bookUrl)
    setBookAuthor(selectedBook.bookAuthor)
    setGenres(selectedBook.genres)
    setAddedDate(selectedBook.addedDate)
    setDescirption(selectedBook.description)
    setTotalCopies(selectedBook.totalCopies)
    setAvailableCopies(selectedBook.availableCopies)
    

    // setBook(selectedBook); 
    //to put table data to fields
}
const updateBook=()=>{
  axios.put('http://localhost:8080/api/v1/library/updatebookbyid',{bookId,bookName, bookUrl, bookAuthor,genres,description, addedDate,totalCopies,availableCopies})
  .then(response => {
    console.log("updated",response);
    alert("upadated successfull")
    getBooks();
    clearFields()
  })
  .catch(error => {
    console.log("unable to update",error);
  })
}

  const allGenres = [
    "FANTASY",
    "MYSTERY",
    "SCIENCE_FICTION",
    "NOVEL",
    "NON_FICTION",
    "HISTORY",
    "BIOGRAPHY",
    "SPIRITUALITY",
    "POETRY",
    "HUMOR",
    "DETECTIVE",
    "AUTOBIOGRAPHY",
    "PHILOSOPHY",
    "FAIRY_TALE",
    "COMICS",
    "COOK_BOOKS",
    "TRAVEL",
    "MUSIC",
    "ART_DESIGN",
    "DRAWING",
    "VISUAL_ART",
    "PHOTOGRAPHY",
    "BUSINESS",
    "ECONOMICS",
    "POLITICS",
    "FINANCE",
    "MONEY",
    "PSYCHOLOGY",
    "TECHNOLOGY",
    "BIOLOGY",
  ];

  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop:" 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#F0EBE3",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Manage Books
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: "#F0EBE3",
            marginBottom: "10px"
          }}
        >
          <TextField
            label="Book ID"
            value={bookId}
            onChange={(e) => {setBookId(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Book Name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Book URL"
            value={bookUrl}
            onChange={(e) => {setBookUrl(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Author"
            value={bookAuthor}
            onChange={(e) => {setBookAuthor(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            select
            label=""
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            style={{ width: "200px", margin: "10px" }}
            SelectProps={{ native: true }}
          >
            <option value="">Select genre</option>
            {allGenres.map((genres) => (
              <option key={genres} value={genres}>
                {genres}
              </option>
            ))}
          </TextField>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => {setDescirption(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Added Date"
            type="datetime-local"
            variant="outlined"
            value={addedDate}
            onChange={(e) => {setAddedDate(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Total Copies"
            value={totalCopies}
            onChange={(e) => setTotalCopies(e.target.value)}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Available Copies"
            value={availableCopies}
            onChange={(e) => setAvailableCopies(e.target.value)}
            style={{ width: "200px", margin: "10px" }}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={()=>{addBooks()}}
          style={{ width: "80%", margin: "20px 0" }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={()=>{updateBook()}}
          style={{ width: "80%", margin: "20px 0" }}
        >
         update
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
          overflow: "scroll",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Book List
        </Typography>
        <div style={{ height: "300px", overflowY: "scroll", width: "100%" }}>
          <TableContainer component={Paper}>
          <div style={{ maxWidth: "100%", overflowX: "auto", height: "300px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: "8%", height: "20px" }}>Book ID</TableCell>
                  <TableCell style={{ width: "15%", height: "20px" }}>Book Name</TableCell>
                  <TableCell style={{ width: "15%", height: "20px" }}>Book Image URL</TableCell>
                  <TableCell style={{ width: "15%", height: "20px" }}>Author</TableCell>
                  <TableCell style={{ width: "15%", height: "20px" }}>Genre</TableCell>
                  <TableCell style={{ width: "15%", height: "20px" }}>Description</TableCell>
                  <TableCell style={{ width: "7%", height: "20px" }}>Added Date</TableCell>
                  <TableCell style={{ width: "5%", height: "20px" }}>Total Copies</TableCell>
                  <TableCell style={{ width: "5%", height: "20px" }}>Available Copies</TableCell>
                  <TableCell style={{ width: "5%", height: "20px" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books && books.length > 0 ? (
                  books.map((book) => (
                    <TableRow key={book.bookId} style={{ height: "40px", backgroundColor: "#F6F5F2" }}>
                      <TableCell style={{ fontSize: "0.8rem" }}>{book.bookId}</TableCell>
                      <TableCell style={{ fontSize: "0.8rem" }}>{book.bookName}</TableCell>
                      <TableCell style={{fontSize: "0.8rem", maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis"}}>{book.bookUrl}</TableCell>
                      <TableCell style={{ fontSize: "0.8rem" }}>{book.bookAuthor}</TableCell>
                      <TableCell style={{ fontSize: "0.8rem" }}>{book.genres}</TableCell>
                      <TableCell style={{ fontSize: "0.8rem" }}>{book.description}</TableCell>
                      <TableCell style={{ fontSize: "0.8rem" }}>{book.addedDate}</TableCell>
                      <TableCell style={{ fontSize: "0.8rem" }}>{book.totalCopies}</TableCell>
                      <TableCell style={{ fontSize: "0.8rem" }}>{book.availableCopies}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={()=>{deletBook(book.bookId)}}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => selectBookToUpdate(book.bookId)}
                        >
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={10}>No books available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          </TableContainer>
          </div>
        </div>
      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={500}
        onClose={handleSnackbarClose}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#008DDA",
          color: "#FFFFFF",
          borderRadius: "12px",
          padding: "24px",
          fontSize: "1.6rem",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar> */}
    </Container>
  );
};

export default ManageBooks2;
