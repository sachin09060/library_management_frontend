import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import Footer from "./Footer";
import Header2 from "./Header2";

const AboutUs2 = () => {
  return (
    <>
      <Header2 />
      <Card>
        <CardContent>
          <Container maxWidth="lg" style={{ marginTop: 40 }}>
            <Typography variant="h2" align="center" gutterBottom>
              About Us
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Container style={{ textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.squarespace-cdn.com/content/v1/60b0041628b78c4ae026eda8/1624049800223-6KIHAGTTILUW6RZKJFE6/Screen+Shot+2021-06-18+at+4.52.21+PM.png"
                    alt="Our Mission"
                  />
                  <Typography variant="h5" component="h2" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography variant="body1">
                    At Book Haven, our mission is to promote literacy and a love for reading in our community. We strive to provide access to a diverse range of books and resources to inspire and educate readers of all ages.
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={12} md={4}>
                <Container style={{ textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://www.newtonfalls.org/sites/default/files/migrated/slide11.jpg"
                    alt="Our Vision"
                  />
                  <Typography variant="h5" component="h2" gutterBottom>
                    Our Vision
                  </Typography>
                  <Typography variant="body1">
                    Our vision is to create a welcoming and inclusive space where people can discover new stories, expand their knowledge, and connect with others who share their passion for books. We aim to be a hub for cultural and intellectual exchange within our community.
                  </Typography>
                </Container>
              </Grid>
              <Grid item xs={12} md={4}>
                <Container style={{ textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kVGp-YmljSQFVcjqCbrPdjTPPEm6-L-6m4LFgWfYHRA7NBrIO4Xn2e1Wysi4DFeugXc&usqp=CAU"
                    alt="Library History"
                  />
                  <Typography variant="h5" component="h2" gutterBottom>
                    Library History
                  </Typography>
                  <Typography variant="body1">
                    Book Haven has been serving readers since 1985. Over the years, we have grown from a small bookstore to a thriving community library. Our commitment to providing quality literature and fostering a love for reading remains as strong as ever.
                  </Typography>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
      <Footer />
    </>
  );
};

export default AboutUs2;
