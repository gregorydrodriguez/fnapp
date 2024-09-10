// src/pages/index.js

import { Container, Row, Col } from 'react-bootstrap';
import CenteredContainer from '../../components/CenteredContainer';

export default function Home() {
  return (
    <CenteredContainer>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h1>FN App</h1>
          </Col>
        </Row>
      </Container>
    </CenteredContainer>
  );
}