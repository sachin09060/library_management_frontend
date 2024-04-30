import React, { useState } from "react";
import BookGallery from "./BookGallery";
import { Typography , Pagination} from "@mui/material";

const books = [

  {
    title: "The Bhagwat Gita",
    subtitle:"The Bhagwat Gita is the main sourcebook on yoga and is a concise summary of India's Vedic wisdom. ",
    image: "https://m.media-amazon.com/images/I/81qwP0egX4L._SY466_.jpg",
    author: "R.R. Varma ",
  },
  {
    title: "IKIGAI",
    subtitle:"The Japanese secret to a long and happy life",
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjL6Cffw_aQEwbnLMpmI5mssa2xQpIIEroDU1xpxCNLIVniCG2N8PTwsXVq03i1X0nJRKs3A24_9ncNgkVnDeZdZae2e6f6my9zTlzaZ3NIdxDAf0lsUDi&usqp=CAE",
    author: "J.R.R. Tolkien",
  },
  {
    title: "THE PSYCHOLOGY OF MONEY",
    subtitle:"Timeless lessons on wealth, greed, and happiness ",
    image: "https://bookbins.in/wp-content/uploads/2021/05/The-Psychology-Of-Money-Morgan-Housel-Buy-Online-Bookbins-1.png",
    author: " Héctor García and Francesc Miralles",
  },
  {
    title: "BUILD DON'T TALK",
    subtitle:"THINGS YOU WISH YOU WERE TAUGHT IN SCHOOL",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQoMg81EoMBNVxRctF1puEf_Jn6LIoxBBmedpcCkCS3P5nXRRJmSRUuj2zD0fZq8L0zGADISHi1Q7GBwfoKuDeNY1DtQtjjdAuR23yrmFhXN5aRzGiIdYBC2A&usqp=CAE",
    author: "Raj Shamani",
  },
  {
    title: "ATOMIC HABITS",
    subtitle:"World-renowned habits expert James Clear has discovered a simpler system for transforming your life. ",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/10/GB/ES/KH/162021231/atomic-habits-business-book.jpg",
    author: "James Clear",
  },
  {
    title: "DOPAMINE DETOX",
    subtitle:"Dopamine is being hijacked through various triggers - social media notifications",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHeMFNVobntu1nUaSQ0TwmFTfOle8zlPBZxWD2CnoblfMVYiAudL9GdhjlDkSzzw90WlLdYf3qs2FcnOVF_9SJA0cB2yPHMIfnxp4vtuZ54nfMXQ6Tq3F6Bg&usqp=CAE",
    author: "THIBAUT MEURISSE",
  },
  {
    title: "A Man Called Ove",
    subtitle:"The million-copy bestselling phenomenon,",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzOViPgKawfZV44V2f1htmZxN3O8FzDqHmF7Gb5T4DxUIkRsmqGRsHoQfFKxaM4C74sdPeV2YwXvCc8zAHj4olzR87-8LVQT00fNw3GbKBpsvM8ZQ7lhnc&usqp=CAE",
    author: "Fredrik Backman",
  },
  {
    title: "An Uncommon Love",
    subtitle:"The Early Life of Sudha and Narayana Murthy",
    image: "https://m.media-amazon.com/images/I/71v9iNrb-vL._SY466_.jpg",
    author: "Banerjee Divakaruni, Chitra",
  },
  {
    title: "Penguin Destinations Of A Lifetime",
    subtitle:"National Geographic takes you on a photographic tour of our world...",
    image: "https://m.media-amazon.com/images/I/91vMxtTtWaL._SY342_.jpg",
    
  },
  {
    title: "Maximum City",
    subtitle:"Bombay Lost and Found",
    image: "https://m.media-amazon.com/images/I/81Gwsv8bRdL._SY466_.jpg",
    author: "Suketu Mehta",
  },
  {
    title: "On The Kebab Trail",
    subtitle:"A Moti Mahal Cookbook",
    image: "https://m.media-amazon.com/images/I/81vEXSX-NPL._SY466_.jpg",
    author: "Monish Gujral",
  },
  {
    title: "You Can",
    subtitle:"Do you often wonder whether you really have it in you to accomplish your goals",
    image: "https://m.media-amazon.com/images/I/61aJc8wQX4L._SY466_.jpg",
    author: "George Matthew Adams ",
  },
  {
    title: "JavaScript from Beginner to Professional",
    subtitle:"Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages",
    image: "https://m.media-amazon.com/images/I/71oZ45OrLjL._SY466_.jpg",
    author: "Luciano Mammino",
  },
  {
    title: "Building Web Apps with Python and Flask",
    subtitle:"A practical guide for the rapid web application development with FlaskKey Features",
    image: "https://m.media-amazon.com/images/I/616ZlpDW6eL._SY466_.jpg",
    author: "Malhar Lathkar ",
  },
  {
    title: "Data Structures and Algorithms in Python",
    subtitle:"Data structures and algorithms in Python offers a comprehensive",
    image: "https://m.media-amazon.com/images/I/51A2iElWfZL._SY466_.jpg",
    author: "Michael T. Goodrich ",
  },
];

const BooksGalleryLayout = () => {
  const [page, setPage] = useState(1);
  const booksPerPage = 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = page * booksPerPage;
  const paginatedBooks = books.slice(startIndex, endIndex);

  return (
    <div
      className="App"
      style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Our Book Gallery</h1>
        {paginatedBooks.length > 0 ? (
          <>
            <BookGallery books={paginatedBooks} />
            {books.length > booksPerPage && (
              <div style={{ marginTop: 20, textAlign: "center" }}>
                <Pagination
                  count={Math.ceil(books.length / booksPerPage)}
                  page={page}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                />
              </div>
            )}
          </>
        ) : (
          <Typography variant="body1">Loading books...</Typography>
        )}
      </div>
    </div>
  );
};

export default BooksGalleryLayout;