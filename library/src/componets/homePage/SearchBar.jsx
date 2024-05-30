import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <section className="search d-flex align-items-center">
      <Form inline>
        <FormControl type="text" placeholder="Search Books" aria-label="Search" />
        <Button variant="dark">Search</Button>
      </Form>
    </section>
  );
};

export default SearchBar;