
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function AdminSignInBtn() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/adminSignIn');
  };

  return (
    
    <div className="d-grid gap-3">
      <Button variant="light" size="mg" onClick={handleClick} style={{ marginRight: '20px' }}>
        Admin SignIn
      </Button>
    </div>

  );
}

export default AdminSignInBtn;