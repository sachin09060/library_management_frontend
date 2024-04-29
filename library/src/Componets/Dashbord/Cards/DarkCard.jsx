import Card from 'react-bootstrap/Card';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

function DarkCard() {
  return (
    <>
      {[
        'Dark'
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
            <Card.Title><BookmarkAddIcon sx={{ fontSize: 40 }}/> 46</Card.Title>
            <Card.Text>
              <h2>Requested Books</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default DarkCard;