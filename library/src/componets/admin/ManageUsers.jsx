import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper , Link} from '@mui/material';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', booksTaken: 3, dueAmount: 50 },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', booksTaken: 2, dueAmount: 30 },
  { id: 3, name: 'Alice Smith', email: 'alice@example.com', booksTaken: 1, dueAmount: 15 },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', email: '', booksTaken: 0, dueAmount: 0 });

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const updatedUsers = [...users, { id: users.length + 1, ...newUser }];
      setUsers(updatedUsers);
      setNewUser({ name: '', email: '', booksTaken: 0, dueAmount: 0 });
    }
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Manage Users
      </Typography>
      <div>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Add
        </Button>
      </div>
      <Typography variant="h4" style={{ marginTop: 20 }}>
        User List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: 10 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Books Taken</TableCell>
              <TableCell>Due Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.booksTaken}</TableCell>
                <TableCell>{user.dueAmount}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link href="/adminDash" underline="none" style={{ display: 'block', textAlign: 'center', marginTop: 20 }}>
        <Button variant="contained" color="primary" sx={{ '&:hover': { backgroundColor: '#303f9f' } }}>
          Go to Dashboard
        </Button>
      </Link>
    </Container>
  );
};

export default ManageUsers;
