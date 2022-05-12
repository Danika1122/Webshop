import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import kep from '../img/kep1.jpg'
import kep2 from '../img/kep2.jpg'
import kep3 from '../img/kep3.jpg'

import setup1 from '../img/setup1.jpg'
import setup2 from '../img/setup2.jpg'
import setup3 from '../img/setup3.jpg'

import { Card, Carousel, CarouselItem, Container, Row, Col } from 'react-bootstrap'

function AkciosC() {
    return (
        <Container >
            <Row> 
                <Col className="d-flex justify-content-center">
                    <Card bg="dark" border="dark" text="warning"
                    style={{
                        width: '30rem', height: '22rem',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', margin: 'auto'
                    }}>
                    <Card.Title style={{textAlign: 'center'}}>Akciós termékek</Card.Title>
                    <Carousel pause="false" interval="4000" indicators="false" controls="false">
                        <CarouselItem>
                            <Card.Link href="#">
                                Termek 1...
                                <Card.Img className="d-block w-100" alt="First slide" src={kep} style={{ height: '16rem' }} />
                            </Card.Link>
                        </CarouselItem>
                        <CarouselItem>
                            <Card.Link href="#">
                                Termek 2...
                                <Card.Img className="d-block w-100" alt="First slide" src={kep2} style={{ height: '16rem' }} />
                            </Card.Link>
                        </CarouselItem>
                        <CarouselItem>
                            <Card.Link href="#">
                                Termek 3...
                                <Card.Img className="d-block w-100" alt="First slide" src={kep3} style={{ height: '16rem' }} />
                            </Card.Link>
                        </CarouselItem>
                    </Carousel>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card bg="dark" border="dark" text="warning" style={{
                        width: '30rem', height: '22rem',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', margin: '10px'}}>
                        <Card.Title style={{textAlign: 'center'}}>Komplett setupok</Card.Title>
                        <Carousel pause="false" interval="4000" indicators="false" controls="false">
                            <CarouselItem>
                                <Card.Link href="#">
                                    Termek 1...
                                    <Card.Img className="d-block w-100" alt="First slide" src={setup1} style={{ height: '16rem' }} />
                                </Card.Link>
                            </CarouselItem>
                            <CarouselItem>
                                <Card.Link href="#">
                                    Termek 2...
                                    <Card.Img className="d-block w-100" alt="Second slide" src={setup2} style={{ height: '16rem' }} />
                                </Card.Link>
                            </CarouselItem>
                            <CarouselItem>
                                <Card.Link href="#">
                                    Termek 3...
                                    <Card.Img className="d-block w-100" alt="Third slide" src={setup3} style={{ height: '16rem' }} />
                                </Card.Link>
                            </CarouselItem>
                        </Carousel>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AkciosC;