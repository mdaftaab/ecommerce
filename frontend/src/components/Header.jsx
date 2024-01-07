import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
} from "react-bootstrap";

const Header = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };


    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand to="/">Navbar scroll</Navbar.Brand>
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

                            <button onClick={handleLogout}>Logout</button>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
