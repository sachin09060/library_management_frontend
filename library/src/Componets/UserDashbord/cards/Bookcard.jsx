import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 330, border:2}}>
      <CardMedia
        sx={{ height: 280 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          book discription
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Available</Button>
        <Button size="small">Request</Button>
      </CardActions>
    </Card>
  );
}
