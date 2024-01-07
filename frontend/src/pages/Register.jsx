import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();

    // handling the input values
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    // handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const response = await fetch(`http://localhost:5000/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log(response);

        if (response.ok) {
            // stored the token in localhost

            setUser({ username: "", email: "", phone: "", password: "" });
            navigate("/");
        } else (e)(
            console.log(e.error)
        )
    };


    return (
        <div className="main">
            <Container>
                <Row>
                    <Col lg={8} className='mx-auto pt-3'><h2>Register Form</h2></Col>
                </Row>
                <Row>
                    <Col lg={8} className='mx-auto pt-3'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupUser">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name='username' value={user.username}
                                    onChange={handleInput} placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" name='email' value={user.email}
                                    onChange={handleInput} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPhone">
                                <Form.Label>Your Phone</Form.Label>
                                <Form.Control type="text" name='phone' alue={user.phone}
                                    onChange={handleInput} placeholder="Enter phone" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Create Password</Form.Label>
                                <Form.Control type="password" name='password' value={user.password}
                                    onChange={handleInput} placeholder="Password" />
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