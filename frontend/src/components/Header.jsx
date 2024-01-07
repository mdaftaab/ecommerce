import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
} from "react-bootstrap";

const Header = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand to="/">Logo</Navbar.Brand>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 gap-3"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Link to="/">Home</Link>

                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>

                            <Link to="/profile">Profile</Link>

                            <button className="btn btn-danger">Logout</button>

                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
