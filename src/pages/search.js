// pages/search.js

import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Player from '../../components/Player';
import CenteredContainer from '../../components/CenteredContainer';

const Search = () => {
    const [username, setUsername] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/search?username=${username}`);
            if (response.ok) {
                const data = await response.json();
                setResult(data);
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Error fetching data');
            }
        } catch (err) {
            setError('Error fetching data');
        }
    };

    return (
        <CenteredContainer>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h1 className="text-center">Search Fortnite Stats</h1>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter Username"
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={handleSearch} className="w-100">Search</Button>
                        </Form>
                        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                        {result && (
                            <div className="mt-4">
                                <h2 className="text-center">Results:</h2>
                                <Player data={result.data} />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </CenteredContainer>
    );
};

export default Search;