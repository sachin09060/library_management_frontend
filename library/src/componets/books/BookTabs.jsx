import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import BooksGalleryLayout from "./BooksGalleryLayout";
import BooksGalleryLayout2 from "./BooksGalleryLayout2";
import Footer from "../homePage/Footer";
import Header1 from "../homePage/Header";

function BookTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={styles.container}>
      <Header1 />
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="Horizontal tabs example"
        sx={{
          backgroundColor: "#f5f5f5",
          "@media only screen and (max-width: 480px)": {
            "& .MuiTab-label": {
              fontSize: "0.8rem",
            },
          },
        }}
      >
        <Tab label="All Available Books" value={0} />
        <Tab label="Recently Added Book" value={1} />
      </Tabs>
      <div style={styles.content}>
        {value === 0 && <BooksGalleryLayout />}
        {value === 1 && <BooksGalleryLayout2 />}
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  content: {
    padding: "20px 0",
  },
};

export default BookTabs;
