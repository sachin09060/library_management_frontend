import React from 'react';
import { Grid } from '@mui/material';
import Book from './Book';

const BookGallery = ({ books }) => {
  return (
    <Grid container spacing={1} style={{ justifyContent: 'center' }}> {/* Center the cards */}
      {books.map((book) => (
        <Grid item xs={4} key={book.title}>
          <Book {...book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookGallery;
