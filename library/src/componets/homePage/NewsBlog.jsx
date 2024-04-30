import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Pagination } from "@mui/material";

// Import the header and footer components
import Footer from "./Footer";
import Header2 from "./Header2";

const NewsBlog = () => {
  const news = [
    {
      id: 1,
      title: "NElection Results 2024: PM Narendra Modi storms to victory in Varanasi",
      content:
        "Pime Minister Narendra Modi has swept all opponents away in his Lok Sabha constituency Varanasi. PM Narendra Modi won the Varanasi Lok Sabha seat in Uttar Pradesh by a margin of 4,79,505 votes.",
      date: "April 25, 2024",
      imageUrl: "https://sc0.blr1.digitaloceanspaces.com/large/757893-article-pkxmpajysk-1443170829.jpeg",
    },
    {
      id: 2,
      title: "Royal Challengers Bengaluru claimed their first title in their sixteenth season with a superb performance",
      content:
        "Royal Challengers Bengaluru beat Sunrisers Hyderabad by 35 runs.",
      date: "April 24, 2024",
      imageUrl: "https://img.jagranjosh.com/images/2023/April/142023/ipl-rcb-list.webp",
    },
    {
        id: 3,
        title: "Salman Khan getting married",
        content:
          "Salman Khan thinks that he should announce his wedding on June 04, the day of Lok Sabha election results.",
        date: "April 25, 2024",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OcGX-f2SSFdRSiw3BI89WkipS-AxPomY4-VOyqVKWw&s",
      },
      {
        id: 4,
        title: "CSK suspended from IPL for 2 years; Meiyappan, Kundra banned for life",
        content:
          "Royal Challengers Bengaluru beat Sunrisers Hyderabad by 35 runs.",
        date: "April 24, 2024",
        imageUrl: "https://wordpresscdn.winzogames.com/prod/blog/wp-content/uploads/2023/03/06123446/why-were-csk-banned-from-the-ipl.png",
      },
      {
        id: 5,
        title: "Vijay Mallya Is Back",
        content:
          "Rs 18,000 crore returned to banks from Vijay Mallya",
        date: "April 25, 2024",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHvHOjnUa7bC0-GzUgrhWqG1D4nc216MC5RZZ8MTvClYQev4IlCfbPPrK8lJfIX7vBP0&usqp=CAU",
      },

  ];

  const titleStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 600,
  };

  const contentStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
  };

  return (
    <>
      <Header2 />

      <Container maxWidth="lg" align="center">
        <Typography variant="h2" align="center" gutterBottom style={titleStyle}>
          Latest News
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {news.map((article) => (
            <Grid item xs={12} key={article.id}>
              <Card style={{ width: "80%" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={article.imageUrl}
                  alt={article.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={titleStyle}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={contentStyle}>
                    {article.content}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ marginTop: 10 }}>
                    {article.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Pagination count={Math.ceil(news.length / 2)} variant="outlined" shape="rounded" color="primary" style={{ marginTop: 20 }} />
      </Container>
      <Footer />
    </>
  );
};

export default NewsBlog;