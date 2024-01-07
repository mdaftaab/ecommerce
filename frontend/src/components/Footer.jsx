import {
    Row,
    Container,
} from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <section className="bg-body-tertiary p-3">
                <Container>
                    <Row className="align-items-center justify-content-between flex-nowrap">
                        <div className="col-md-12 col-12 order-md-1">
                            <p className="mb-md-0 text-muted text-center">© 2024 All Copy Right Reserve</p>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer;