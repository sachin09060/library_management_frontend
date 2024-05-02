import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DangerCard from '../DangerCard';
import WarningCard from '../WarningCard';
import SuccessCard from '../SuccessCard';
import DarkCard from '../DarkCard';
import PrimaryCard from '../PrimaryCard';
import InfoCard from '../InfoCard';

function Grid1() {
  return (
    <Container>
      <Row xs="auto">
        <Col><InfoCard /></Col>
        <Col><WarningCard /></Col>
        <Col><SuccessCard /></Col>
        <Col><DarkCard /></Col>
        <Col><PrimaryCard /></Col>
        <Col><DangerCard /></Col>
      </Row>
    </Container>
    
  );
}

export default Grid1;