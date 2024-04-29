import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, Card, CardContent, Box } from "@mui/material";
import Footer from "./Footer";
import Header2 from "./Header2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to backend or displaying a success message
    console.log(formData);
  };

  return (
    <>
    <Header2 />
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Typography variant="h2" align="center" gutterBottom style={{ fontFamily: 'Arial, sans-serif' }}>
        Contact Us
      </Typography>
      <Card elevation={3} style={{ padding: 20 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ fontFamily: 'Arial, sans-serif', marginBottom: 20 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ fontFamily: 'Arial, sans-serif', marginBottom: 20 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ fontFamily: 'Arial, sans-serif', marginBottom: 20 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Button variant="contained" color="primary" type="submit" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#212121' }}>
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
    <Footer />
    </>
  );
};

export default ContactForm;
