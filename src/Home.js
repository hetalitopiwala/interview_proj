import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Shoes from './images/Col.png'
import Rectangle from './images/Rectangle.png'
import Rectangle25 from './images/Rectangle_25.png'
import Rectangle26 from './images/Rectangle_26.png'
import Rectangle27 from './images/Rectangle_27.png'
const Home = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary header">
                <Container>
                    <Navbar.Brand href="#home" className="nav-item">Collers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="nav-item-sub">Products</Nav.Link>
                            <Nav.Link href="#link" className="nav-item-sub">Solutions</Nav.Link>
                            <Nav.Link href="#link" className="nav-item-sub">Pricing</Nav.Link>
                            <Nav.Link href="#link" className="nav-item-sub">Resource</Nav.Link>
                            <Nav.Link href="#link" className="nav-item-sub">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="home-img">
                <Container className="home-collectible">

                    <Row>

                        <Col md={8} xs={12}>
                            <div>
                                <div className="home-coll-heading">
                                    Collectible Sneakers
                                </div>
                                <div className="home-coll-sub-heading left-align" >
                                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                                </div>
                                <div className="left-align">
                                    <Button variant="outline-primary" className="home-btn-color">Primary</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <img src={Shoes} className="image-shoes" />
                        </Col>
                    </Row>
                    <Row className="card-container">
                        <Col md={4} xs={12}>
                            <Card style={{ width: '264px' }} className="card-de">
                                <div className="mb-2">
                                    <i className="bi bi-trophy home-icon"></i>
                                    <img src={Rectangle25} className="home-icon-img" />

                                </div>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title className="card-title">Nibh viverra</Card.Title>
                                    <Card.Text className="card-body">
                                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card style={{ width: '264px' }} className="card-de">
                                <div className="mb-2">
                                    <i className="bi bi-door-open home-icon"></i>
                                    <img src={Rectangle26} className="home-icon-img" />
                                </div>

                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title className="card-title">Cursus amet</Card.Title>
                                    <Card.Text className="card-body">
                                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card style={{ width: '264px' }} className="card-de">
                                <div className="mb-2">
                                    <i className="bi bi-tv home-icon"></i>
                                    <img src={Rectangle27} className="home-icon-img" />
                                </div>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title className="card-title"> Ipsum fermentum</Card.Title>
                                    <Card.Text className="card-body">
                                        Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className="section-2">
                <Container>
                    <Row className=" align-content-center align-items-center">
                        <Col md={8}><div className="section-2-title">The best of the best</div></Col>
                        <Col md={4}><Button variant="outline-light">Primary</Button></Col>
                    </Row>
                    <Row className="mt-5" className="backlights">
                        <Col md={4} xs={12}>
                            <Card className="section-2-card">
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-light">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card className="section-2-card">
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-light">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card className="section-2-card">
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="outline-light">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>

        </>
    )
}
export default Home;