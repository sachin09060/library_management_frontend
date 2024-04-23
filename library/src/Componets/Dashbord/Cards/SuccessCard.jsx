import Card from 'react-bootstrap/Card';
import MenuBookIcon from '@mui/icons-material/MenuBook';
function SuccessCard() {
  return (
    <>
      {[
        'Success'
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
            <Card.Title><MenuBookIcon sx={{ fontSize: 40 }}/> 67 </Card.Title>
            <Card.Text>
              <h2>Issued Books For Users</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default SuccessCard;