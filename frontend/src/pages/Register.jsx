import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {

    


    return (
        <div className="main">
            <Container>
                <Row>
                    <Col lg={8} className='mx-auto pt-3'><h2>Register Form</h2></Col>
                </Row>
                <Row>
                    <Col lg={8} className='mx-auto pt-3'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Your Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Create Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register;