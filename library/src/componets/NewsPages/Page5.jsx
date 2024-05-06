import React from 'react'
import Header2 from '../HomePage/Header2'
import Footer from '../HomePage/Footer'
import { Container, Grid, Card, CardContent, CardMedia, Typography} from "@mui/material";




export default function Page1() {


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
    <Header2/>
    <Container maxWidth="lg" align="center">
        <Typography variant="h2" align="center" gutterBottom style={titleStyle}>
          Latest News
        </Typography>
        <Grid container spacing={3} justifyContent="center">

            <Grid item xs={12} >
              <Card style={{ width: "80%" }}>
                <CardMedia
                  component="img"
                  height="600"
                  image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHvHOjnUa7bC0-GzUgrhWqG1D4nc216MC5RZZ8MTvClYQev4IlCfbPPrK8lJfIX7vBP0&usqp=CAU"}

                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={titleStyle}>
                  Vijay Mallya Is Back
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={contentStyle}>
                  The return of Vijay Mallya to the public eye has sparked widespread attention and speculation. Once a prominent figure in the Indian business world, Mallya's resurgence after a period of relative obscurity has reignited interest in his affairs and raised questions about his future endeavors.Mallya's name became synonymous with controversy following the collapse of his Kingfisher Airlines and subsequent allegations of financial impropriety. His extradition from the United Kingdom to India to face charges related to unpaid loans and alleged financial irregularities further thrust him into the spotlight.Now, with his reappearance in public life, observers are closely monitoring Mallya's activities and statements for any indications of his plans and intentions. Some view his return with skepticism, questioning his motives and the potential implications for ongoing legal proceedings. Others see it as an opportunity for Mallya to address the issues surrounding him and seek resolution.
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
        </Grid>
      </Container>
    
    <Footer/>
    </>
  )
}
