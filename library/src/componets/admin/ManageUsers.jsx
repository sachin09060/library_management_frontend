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
    name: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    isLibrarian: false,
    isUser: true,
    createdAt: "",
  });

  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8055/api/user");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUserToDatabase = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8055/api/user/add",
        newUser
      );
      console.log("User added:" + response.data);

      if (response.data) {
        fetchUsers();
        setNewUser({
          userId: "",
          name: "",
          gender: "",
          phone: "",
          email: "",
          address: "",
          isLibrarian: false,
          isUser: true,
          createdAt: "",
        });
        setSnackbarSeverity("success");
        setSnackbarMessage(response.data.message);
        setSnackbarOpen(true);
      }
      if (response.data.error) {
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
      await axios.delete("http://localhost:8055/api/user/delete", {
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
        `http://localhost:8055/api/user/update`,
        newUser
      );
      console.log("User updated:", response.data);

      fetchUsers();

      setNewUser({
        userId: "",
        name: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        isLibrarian: false,
        isUser: true,
        createdAt: "",
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.userId.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const allGenders = ["MALE", "FEMALE", "OTHER"];

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
          marginBottom: "10px",
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
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
          />
          <TextField
            select
            label=""
            variant="outlined"
            fullWidth
            value={newUser.gender}
            onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
            style={{ width: "200px", margin: "10px" }}
            SelectProps={{ native: true }}
          >
            <option value="">Select Gender</option>
            {allGenders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </TextField>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
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
          <TextField
            label="Created At"
            type="datetime-local"
            variant="outlined"
            fullWidth
            value={newUser.createdAt}
            onChange={(e) =>
              setNewUser({ ...newUser, createdAt: e.target.value })
            }
            style={{ width: "200px", margin: "10px" }}
            InputLabelProps={{ shrink: true }}
          />
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
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearch}
          style={{ width: "80%", margin: "10px 0" }}
        />
        <div style={{ height: "300px", overflowY: "scroll", width: "100%" }}>
          <TableContainer component={Paper}>
            <div style={{ maxWidth: "100%", overflowX: "auto", height: "300px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.userId}>
                      <TableCell>{user.userId}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.gender}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.address}</TableCell>
                      <TableCell>{user.createdAt}</TableCell>
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
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={500}
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
