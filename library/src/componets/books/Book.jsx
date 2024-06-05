import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Book = ({ title, subtitle, image, author }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia component="img" height="345" image={image} alt={title} />
      <CardContent style={{ height: "150px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By: {author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Book;
