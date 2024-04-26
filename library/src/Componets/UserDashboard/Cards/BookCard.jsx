import Card from 'react-bootstrap/Card';

function Books() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Book Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">Available</Card.Link>
        <Card.Link href="#">Request</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Books;