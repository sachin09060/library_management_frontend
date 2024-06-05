import React, { useState, useEffect } from "react";
import axios from "axios";
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
import MuiAlert from "@mui/material/Alert";

const ManageUsers2 = () => {
const[users, setUsers] = useState([]);
const[userId,setUserId] = useState('');
const[username, setUsername] = useState('');
const[gender, setGender] = useState('');
const[phoneNo, setPhoneNo] = useState('')
const[email, setEmail] = useState('');
const[address, setAddress] = useState('')

// const addUser = (username,gender,phoneNo,email,address) =>{
//     axios.post('http://localhost:8080/api/v1/library/auser',{
//         username,gender,phoneNo,email,address
//     })
//     .then(response => {
//         console.log("user added successful",response);
//         alert("user added")
//     })
//     .catch(error =>{
//         console.log("unable to add the user",error);
//     })
// }   

useEffect(() => {
    getUsers()
},[])


const clearFields = () => {
    setUserId('');
    setUsername('');
    setEmail('');
    setGender('');
    setPhoneNo('');
    setAddress('');
}

const getUsers = () => {
    axios.get('http://localhost:8080/api/v1/library/alluser')
    .then(response => {
        console.log('user fetched',response);
        setUsers(response.data.data || [])
    })
    .catch(error => {
        console.log("unable to fetch",error);
    })
}

const selectUser = (email) =>{
    const seletedUser = users.find(user =>email === user.email)
    setUserId(seletedUser.userId)
    setUsername(seletedUser.username)
    setGender(seletedUser.gender)
    setEmail(seletedUser.email)
    setPhoneNo(seletedUser.phoneNo)
    setAddress(seletedUser.address)
}

const updateUser = () => {
    axios.put('http://localhost:8080/api/v1/library/updateuserbyid',{
        userId,username,gender,email,phoneNo,address
    })
    .then(response => {
        console.log("user updated" ,response);
        clearFields()
        getUsers()
    })
    .catch(error => {
        console.log("unaple to update", error);
    })
}



  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: 10,
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
          marginBottom: "20px",
        }}
      >
        <Typography variant="h2" align="center" gutterBottom>
          Manage Users
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TextField
            label="User ID"
            variant="outlined"
            fullWidth
            value={userId}
            onChange={(e) => setUserId(e.target.value )}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Gender"
            variant="outlined"
            fullWidth
            value={gender}
            onChange={(e) => {setGender(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            value={phoneNo}
            onChange={(e) =>{setPhoneNo(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => {setAddress(e.target.value)}}            
            style={{ width: "200px", margin: "10px" }}
          />
          {/* <TextField
            label="Created At"
            type="date"
            variant="outlined"
            fullWidth
            value={newUser.createdAt}
            onChange={(e) =>
              setNewUser({ ...newUser, createdAt: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
            InputLabelProps={{ shrink: true }}
          /> */}
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateUser()}
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
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          User List
        </Typography>
        <div style={{ height: "300px", overflowY: "auto", width: "100%" }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Address</TableCell>
                  {/* <TableCell>Created At</TableCell> */}
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users .map((user) => (
                  <TableRow key={user.userId}>
                    <TableCell>{user.userId}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{user.phoneNo}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    {/* <TableCell>{user.createdAt}</TableCell> */}
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="secondary"
                        // onClick={() => handleDeleteUser(user.userId)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => selectUser(user.email)}
                      >
                        {" "}
                        {/* Update button */}
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

      </div>
      {/* <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
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

export default ManageUsers2;