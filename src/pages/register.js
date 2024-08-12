// pages/register.js

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CenteredContainer from '../../components/CenteredContainer';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            router.push('/login');
        } else {
            const result = await response.json();
            setError(result.error || 'Error (Register, onSubmit)');
        }
    };

    return (
        <CenteredContainer>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <h1 className="text-center">Register</h1>
                        {error && <p className="text-danger">{error}</p>}
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Control {...register('username')} type="text" placeholder="Username" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control {...register('password')} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control {...register('password2')} type="password" placeholder="Confirm Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">Register</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </CenteredContainer>
    );
};

export default Register;