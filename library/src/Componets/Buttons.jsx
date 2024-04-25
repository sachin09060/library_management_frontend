// Button.jsx

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ButtonEx() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/userProfile');
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/admin');
  };

  return (
    <div className="d-grid gap-3">
      <Button variant="primary" size="lg" onClick={handleClick}>
        Click Here To See Admin Dashboard
      </Button>
    </div>
  );
}}

export default ButtonEx;
