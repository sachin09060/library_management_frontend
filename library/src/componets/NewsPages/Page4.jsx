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
                  image={"https://funfacts.picescorp.in/images/BlogPics/IPL-Verdict-CSK-RR.jpg"}

                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={titleStyle}>
                  CSK suspended from IPL for 2 years; Meiyappan, Kundra banned for life
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={contentStyle}>
                  The suspension of the Chennai Super Kings (CSK) from the Indian Premier League (IPL) for two years and the subsequent lifetime bans imposed on Gurunath Meiyappan and Raj Kundra marked a significant moment in the history of the IPL and Indian cricket. The verdict, handed down by the Supreme Court-appointed Justice Lodha Committee in 2015, came as a stern response to the involvement of Meiyappan and Kundra in betting activities during the IPL seasons.The Chennai Super Kings, one of the most successful franchises in the IPL, faced a severe blow with their suspension, leaving fans and stakeholders stunned. The decision not only impacted the team's future in the league but also raised questions about the integrity of the tournament and the steps needed to uphold fair play and transparency in cricket.Gurunath Meiyappan, a former team official of the Chennai Super Kings, and Raj Kundra, co-owner of the Rajasthan Royals, were banned for life from any cricketing activities related to the IPL. The bans underscored the IPL's commitment to maintaining ethical standards and combating corruption within the league. The severity of the penalties sent a strong message that no individual or entity, regardless of their stature or affiliation, is above the law.
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
