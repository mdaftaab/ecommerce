import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    Stack,
    Col,
} from "react-bootstrap";

const Header = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                <Stack className="nav-menu">
                        <Col lg={2}>
                            <Navbar.Brand to="/">Logo</Navbar.Brand>
                        </Col>
                        <Col lg={5}>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Col>
                    <Col lg={5} className="ms-auto">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 gap-3 align-items-center"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link className="nav-link" to="/">Home</Link>

                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/register">Register</Link>

                            <Link className="nav-link" to="/profile">Profile</Link>

                            <button className="btn btn-danger">Logout</button>

                        </Nav>
                    </Navbar.Collapse>
                    </Col>
                    </Stack>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
