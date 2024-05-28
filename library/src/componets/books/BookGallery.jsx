import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BookGallery = ({ books }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left", gap: "20px" }}>
      {books.map((book) => (
        <Card key={book.bookId} style={{ width: "calc(25% - 20px)" }}>
          <CardMedia
            component="img"
            image={book.bookImgUrl}
            alt={book.bookName}
            sx={{ width: "225px", height: "268px", objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.bookName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              By: {book.author}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Genre: {book.genre}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                maxHeight: "3em",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Description: {book.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BookGallery;
