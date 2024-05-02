import Card from 'react-bootstrap/Card';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function DangerCard() {
  return (
    <>
      {[
        'Danger',
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
            <Card.Title><CurrencyRupeeIcon sx={{ fontSize: 35 }}/> 34 </Card.Title>
            <Card.Text>
            <h2>Fine for overdues</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default DangerCard;