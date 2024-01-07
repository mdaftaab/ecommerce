import {
    Row,
    Container,
} from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <section>
                <Container>
                    <Row className="align-items-center justify-content-between flex-nowrap">
                        <div className="col-md-4 col-12 order-md-1">
                            <p className="mb-md-0 text-muted ">© 2024 All Copy Right Reserve</p>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer;