// src/pages/login.js

import { useForm } from 'react-hook-form';
import { useAuth } from '../useAuth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CenteredContainer from '../../components/CenteredContainer';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useAuth();
    const router = useRouter();
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        try {
            await login(data);
            router.push('/');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <CenteredContainer>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <h1 className="text-center">Login</h1>
                        {error && <p className="text-danger">{error}</p>}
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Control {...register('username')} type="text" placeholder="Username" required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control {...register('password')} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </CenteredContainer>
    );
};

export default Login;