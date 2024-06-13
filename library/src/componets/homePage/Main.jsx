import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <main style={styles.container}>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },

  "@media only screen and (max-width: 768px)": {
    container: {
      padding: "10px",
    },
  },

  "@media only screen and (max-width: 480px)": {
    container: {
      padding: "5px",
    },
  },
};

export default Main;
