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
                  image={"https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-04/RON_3732.JPG?itok=lc_ZSsJn"}

                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" style={titleStyle}>
                  Royal Challengers Bengaluru claimed their first title in their sixteenth season with a superb performance
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={contentStyle}>
                    In the annals of cricketing history, certain victories stand out as defining moments, not just for the team that claims the trophy but for the sport itself. Such was the case with the Royal Challengers Bengaluru in their sixteenth season of the Indian Premier League (IPL). After years of near misses and dashed hopes, the Royal Challengers Bengaluru finally etched their name in the record books, claiming their maiden IPL title with a performance that will be remembered for generations to come. The journey began humbly in the inaugural season of the IPL, where despite boasting a star-studded lineup featuring the likes of Virat Kohli and AB de Villiers, success eluded them year after year. Season after season, they came tantalizingly close to glory, only to falter at the final hurdle. But with each setback came a renewed determination to succeed, a steely resolve to overcome the odds and emerge victorious. As the years rolled by, the Royal Challengers Bengaluru underwent a transformation, both on and off the field. Under the astute leadership of Virat Kohli, they evolved into a formidable unit, capable of taking on any opposition. Their batting line-up, once their Achilles' heel, became their greatest strength, with the likes of Kohli, de Villiers, and Devdutt Padikkal forming a formidable trio that struck fear into the hearts of bowlers around the league. Meanwhile, their bowling attack, led by the fiery duo of Yuzvendra Chahal and Mohammed Siraj, grew in stature, becoming one of the most potent in the tournament. Success, however, did not come easy for the Royal Challengers Bengaluru. Along the way, they encountered numerous obstacles and setbacks that threatened to derail their quest for glory. From injuries to key players to agonizing defeats in crucial matches, they faced it all with characteristic resilience and fortitude. Each setback served only to strengthen their resolve, fueling their determination to prove their critics wrong and fulfill their long-cherished dream of lifting the IPL trophy. The sixteenth season of the IPL dawned with renewed hope and optimism for the Royal Challengers Bengaluru. Buoyed by their impressive performances in the lead-up to the tournament, they entered the fray with a quiet confidence, determined to make their mark on cricket's grandest stage. As the tournament progressed, they grew from strength to strength, stringing together a series of impressive victories that saw them storm into the playoffs as one of the top-ranked teams. As the dust settled and the stage was set for the final showdown, the Royal Challengers Bengaluru found themselves facing off against their perennial rivals in a high-stakes encounter that would determine the destiny of the IPL trophy. In front of a packed stadium pulsating with energy and excitement, they rose to the occasion, delivering a masterclass in cricketing excellence that left their opponents reeling. From the blistering stroke play of Kohli and de Villiers to the lethal bowling of Chahal and Siraj, every member of the team played their part to perfection, showcasing the depth and talent that had propelled them to the summit of the IPL. And as the final ball was bowled and the celebrations erupted in a sea of red and gold, the Royal Challengers Bengaluru stood tall as champions, their long and arduous journey finally culminating in the ultimate triumph. But beyond the glitz and glamour of the victory lies a story of perseverance, determination, and unwavering belief, a story that serves as a testament to the indomitable spirit of the human will. And as the confetti rained down and the fireworks lit up the night sky, one thing was abundantly clear: the Royal Challengers Bengaluru had etched their name in the annals of cricketing history, not just as champions, but as legends.
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
