import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  FormControl,
  InputGroup,
  Table,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";

const ManageUsers = () => {
  // const [newUser, setNewUser] = useState({
  //   name: "",
  //   gender: "",
  //   phone: "",
  //   email: "",
  //   address: "",
  //   password: "",
  //   confirmPassword: "",
  //   createdAt: "",
  // });

  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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

  // const handleAddUser = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8055/api/user/add",
  //       newUser
  //     );

  //     console.log("User added:", response.data);

  //     if (response.data.error) {
  //       setSnackbarSeverity("error");
  //       setSnackbarMessage(response.data.message);
  //       setShowSnackbar(true);
  //     } else {
  //       fetchUsers();
  //       setNewUser({
  //         name: "",
  //         gender: "",
  //         phone: "",
  //         email: "",
  //         address: "",
  //         password: "",
  //         confirmPassword: "",
  //         createdAt: "",
  //       });
  //       setSnackbarSeverity("success");
  //       setSnackbarMessage(response.data.message);
  //       setShowSnackbar(true);
  //     }
  //   } catch (error) {
  //     console.error("Error adding user:", error);
  //     setSnackbarSeverity("error");
  //     setSnackbarMessage("Failed to add user. Please try again later.");
  //     setShowSnackbar(true);
  //   }
  // };

  const handleDeleteUser = async (email) => {
    try {
      await axios.delete("http://localhost:8055/api/user/delete", {
        data: {
          email: email,
        },
      });
      fetchUsers();
      setSnackbarSeverity("success");
      setSnackbarMessage("User deleted successfully!");
      setShowSnackbar(true);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const handleSubmitUpdate = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8055/api/user/update",
        selectedUser
      );
      console.log("User updated:", response.data);
      fetchUsers();
      setSnackbarSeverity("success");
      setSnackbarMessage(response.data.message);
      setShowSnackbar(true);
    } catch (error) {
      console.error("Error updating user:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to update user. Please try again later.");
      setShowSnackbar(true);
    }
    handleCloseModal();
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <h4>User List</h4>
        <InputGroup className="mb-3" style={{ width: "80%" }}>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchQuery}
            onChange={handleSearch}
          />
        </InputGroup>
        <div style={{ height: "300px", overflowY: "scroll", width: "100%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteUser(user.email)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleUpdateUser(user)}
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Alert
        show={showSnackbar}
        variant={snackbarSeverity}
        onClose={handleSnackbarClose}
        dismissible
      >
        {snackbarMessage}
      </Alert>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={selectedUser ? selectedUser.name : ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={selectedUser ? selectedUser.gender : ""}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                value={selectedUser ? selectedUser.phone : ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                disabled
                value={selectedUser ? selectedUser.email : ""}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={selectedUser ? selectedUser.address : ""}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ManageUsers;
