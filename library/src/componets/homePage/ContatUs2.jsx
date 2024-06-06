import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Footer from "./Footer";
import Header2 from "./Header2";
import axios from "axios";

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/library/postfeedback",
        formData
      );
      console.log(response.data);
      setAlertMessage(response.data.message);
      setOpenSuccessAlert(true);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  const handleCloseSuccessAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessAlert(false);
  };

  return (
    <>
      <Header2 />
      <Container maxWidth="md" style={{ marginTop: 40 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          style={{ fontFamily: "Arial, sans-serif" }}
        >
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
                    style={{
                      fontFamily: "Arial, sans-serif",
                      marginBottom: 20,
                    }}
                    required
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
                    style={{
                      fontFamily: "Arial, sans-serif",
                      marginBottom: 20,
                    }}
                    required
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
                    style={{
                      fontFamily: "Arial, sans-serif",
                      marginBottom: 20,
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        backgroundColor: "#212121",
                      }}
                    >
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
      <Snackbar
        open={openSuccessAlert}
        autoHideDuration={6000}
        onClose={handleCloseSuccessAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleCloseSuccessAlert}
          severity="success"
          sx={{
            width: "100%",
            fontSize: "24px",
            backgroundColor: "#006400",
            color: "#FFFFFF",
          }}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ContactForm2;