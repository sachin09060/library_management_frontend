// Button.jsx

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ButtonEx() {
  const navigate = useNavigate(); // Import useNavigate hook

  const handleClick = () => {
    navigate('/admin'); // Navigate to the '/admin' route when button is clicked
  };

  return (
    <div className="d-grid gap-3">
      <Button variant="primary" size="lg" onClick={handleClick}> {/* Call handleClick function when button is clicked */}
        Click Here To See Admin Dashboard
      </Button>
    </div>
  );
}

export default ButtonEx;
