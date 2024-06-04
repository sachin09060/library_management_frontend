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

const ManageUsers = () => {
  const [newUser, setNewUser] = useState({
    userId: "",
    username: "",
    gender: "",
    phoneNo: "",
    email: "",
    address: ""
  });

  const [users, setUsers] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/library/alluser");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUserToDatabase = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/library/auser",
        newUser
      );
      console.log("User added:"+ response.data);
  
      if (response.data) {
        fetchUsers();
        setNewUser({
          userId: "",
          username: "",
          gender: "",
          phoneNo: "",
          email: "",
          address: ""
        });
        setSnackbarSeverity("success");
        setSnackbarMessage(response.data.message);
        setSnackbarOpen(true);
      }
      if(response.data.error){
        setSnackbarSeverity("error");
        setSnackbarMessage(response.data.message);
        setSnackbarOpen(true);
      }
    } catch (error) {
      if (error.response) {
      } else {
        console.error("Error adding user:", error.message);
      }
    }
  };
  

  const handleAddUser = () => {
    addUserToDatabase();
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete("http://localhost:8080/api/v1/library/deleteuserbyid", {
        data: {
          userId: userId,
        },
      });
      fetchUsers();
      setSnackbarSeverity("success");
      setSnackbarMessage("User deleted successfully!");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateUser = async (userId) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/library/updateuserbyid`,
        newUser
      );
      console.log("User updated:", response.data);

      fetchUsers();

      setNewUser({
        userId: "",
        username: "",
        gender: "",
        phoneNo: "",
        email: "",
        address: ""
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const snackbarStyle = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#008DDA",
    color: "#FFFFFF",
    borderRadius: "12px",
    padding: "24px",
    fontSize: "1.6rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

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
            value={newUser.userId}
            onChange={(e) => setNewUser({ ...newUser, userId: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Gender"
            variant="outlined"
            fullWidth
            value={newUser.gender}
            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            value={newUser.phoneNo}
            onChange={(e) => setNewUser({ ...newUser, phoneNo: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={newUser.address}
            onChange={(e) =>
              setNewUser({ ...newUser, address: e.target.value })
            }
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
          onClick={handleAddUser}
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
                {users.map((user) => (
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
                        onClick={() => handleDeleteUser(user.userId)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleUpdateUser(user.userId)}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={handleSnackbarClose}
        style={snackbarStyle}
      >
        <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default ManageUsers;