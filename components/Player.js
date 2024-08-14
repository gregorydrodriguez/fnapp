// components/Player.js

import { Card, Col, Row } from 'react-bootstrap';
import Account from "./Account";
import Stats from "./Stats";

const Player = ({ data }) => (
    <div>
        <Row className="justify-content-center">
            <Col md={8}>
                <Card className="mb-3" style={{ backgroundColor: '#f8f9fa' }}>
                    <Card.Body>
                        <Account account={data.account} />
                        <Row className="mt-3">
                            <Col md={6}>
                                <Card className="mb-3" bg="light">
                                    <Card.Body>
                                        <Stats stats={data.stats.all.overall} type="Overall" />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="mb-3" bg="light">
                                    <Card.Body>
                                        <Stats stats={data.stats.all.solo} type="Solo" />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="mb-3" bg="light">
                                    <Card.Body>
                                        <Stats stats={data.stats.all.duo} type="Duo" />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="mb-3" bg="light">
                                    <Card.Body>
                                        <Stats stats={data.stats.all.squad} type="Squad" />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
);

export default Player;