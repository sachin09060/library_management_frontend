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
                  image={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/salman_khan_wedding.jpeg"}

                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={titleStyle}>
                  Salman Khan getting married
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={contentStyle}>
                  Salman Khan's decision to announce his wedding on June 4, coinciding with the day of Lok Sabha election results, could potentially generate significant media attention and public interest. The timing of such an announcement would strategically capitalize on the already heightened news coverage surrounding the election results, ensuring maximum visibility for his personal milestone.However, Salman Khan should carefully consider the implications of such a decision. While leveraging a momentous occasion like the Lok Sabha election results may amplify the reach of his announcement, it also runs the risk of overshadowing the political significance of the day. Additionally, tying his wedding announcement to a political event could potentially invite criticism or accusations of overshadowing important national affairs with personal news.Ultimately, Salman Khan should weigh the pros and cons of making such a public announcement on a day of national significance, considering both the potential benefits in terms of media coverage and public interest, as well as the potential drawbacks in terms of perception and reception. It's important for him to prioritize his personal wishes while also being mindful of broader social and political sensitivities.
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
