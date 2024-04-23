import Card from 'react-bootstrap/Card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function PrimaryCard() {
  return (
    <>
      {[
        'Primary'
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
            <Card.Title><AccountCircleIcon sx={{ fontSize: 40 }}/></Card.Title>
            <Card.Text>
            <h2>Manage Members</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default PrimaryCard;