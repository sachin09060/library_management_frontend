import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, justifyContent:'center',border:'2px solid black', marginLeft:'35%',marginTop:'2%'}}>
      <CardMedia
        sx={{ height: 190 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          user name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Email</Button>
        {/* <Button size="small">Phone no</Button> */}
      </CardActions>
    </Card>
  );
}