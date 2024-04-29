
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function UserSignInBtn() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/UserSignIn');
  };

  return (
    
    <div className="d-grid gap-3">
      <Button variant="primary" size="mg" onClick={handleClick} style={{ marginRight: '20px' }}>
        SignIn
      </Button>
    </div>

  );
}

export default UserSignInBtn;
