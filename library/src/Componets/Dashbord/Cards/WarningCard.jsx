import Card from 'react-bootstrap/Card';
import EditNoteIcon from '@mui/icons-material/EditNote';

function WarningCard() {
  return (
    <>
      {[
        'Warning'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title><EditNoteIcon sx={{ fontSize: 50 }}/> 2860</Card.Title>
            <Card.Text>
              <h2>Total Number of Books</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default WarningCard;