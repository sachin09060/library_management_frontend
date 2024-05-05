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
                  image={"https://sc0.blr1.digitaloceanspaces.com/large/757893-article-pkxmpajysk-1443170829.jpeg"}

                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={titleStyle}>
                     NElection Results 2024: PM Narendra Modi storms to victory in Varanasi
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={contentStyle}>
                      In the pulsating electoral battleground of Varanasi, Prime Minister Narendra Modi emerged victorious with an emphatic mandate, solidifying his grip on the spiritual heart of India. Against the backdrop of spirited campaigning and heightened political fervor, Modi's resounding win underscored his unwavering resonance with the electorate and his indomitable presence in Indian politics. Employing a multifaceted campaign strategy that encompassed traditional outreach and innovative digital initiatives, Modi connected deeply with Varanasi's residents, addressing their concerns and articulating a compelling vision for the region's development. Central to his appeal were transformative infrastructure projects like the Kashi Vishwanath Corridor and the Ganga rejuvenation efforts, which symbolized his commitment to economic progress and cultural preservation. The overwhelming support garnered by Modi reflected not only admiration for his leadership but also confidence in his ability to steer India towards a brighter future. His victory in Varanasi carries profound implications for Indian politics, serving as a potent symbol of his enduring dominance and setting the stage for a renewed mandate to fulfill the aspirations of the people. As Modi embarks on a new term representing Varanasi, his resolve to deliver on promises and address the nation's challenges remains steadfast, promising a transformative era of progress and prosperity for all.
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
