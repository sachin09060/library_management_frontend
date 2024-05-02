import Card from 'react-bootstrap/Card';
import Diversity1Icon from '@mui/icons-material/Diversity1';

function InfoCard() {
  return (
    <>
      {[
        'Info'
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
            <Card.Title><Diversity1Icon sx={{ fontSize: 40 }}/> <h1> 50</h1></Card.Title>
            <Card.Text>
              <h2>Total Members</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default InfoCard;