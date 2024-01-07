import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Login = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={8} className='mx-auto pt-3'><h2>Login Form</h2></Col>
                </Row>
                <Row>
                    <Col lg={8} className='mx-auto pt-3'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;