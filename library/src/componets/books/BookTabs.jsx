import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BooksGalleryLayout from './BooksGalleryLayout';
import BooksGalleryLayout2 from './BooksGalleryLayout2';
import Footer from '../homePage/Footer';
import Header2 from '../homePage/Header2';

function BookTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header2 />
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="Horizontal tabs example"
        sx={{ backgroundColor: '#f5f5f5' }}
      >
        <Tab label="All Available Books" value={0} />
        <Tab label="Recently Added Book" value={1} />
      </Tabs>
      {value === 0 && <BooksGalleryLayout />}
      {value === 1 && <BooksGalleryLayout2 />}
      <Footer/>
    </div>
  );
}

export default BookTabs;