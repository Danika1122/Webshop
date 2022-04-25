import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Elements.css';
import { Container, Card, Row, Col } from "react-bootstrap";

function Content() {
    return (
        <Container>
            <Row className="d-flex justify-content-between">
                <Col className="d-flex justify-content-center">
                <Card bg="dark" text="warning" className="text-center" style={{ marginTop:'10px', width:'20rem'}}>
                    <Card.Header>Rólunk</Card.Header>
                    <Card.Body>
                        <p>2022-ben egy iskolai projekt keretein belül készítettük el a BDK nevű weboldalunkat ami gép alkatrészekkel, és külső perifériák eladásával foglalkozik. A weboldal látogatói itt sok mindent megtalálhatnak ami egy esetleges gép összerakáshoz kell, vagy esetleg már teljesen összerakott gépekkel iis találkozhatnak, és azokhoz való különböző külső perifériákkal amik közül szintén nagy a választék.</p>
                        <p><b>A weboldalt készítette:</b> </p>
                        <p>Gáll Kristóf, Melegh Bence, Nagy Dániel</p>
                    </Card.Body>
                </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                <Card bg="dark" text="warning" style={{ marginTop:'10px', width:'21rem'}}>
                    <Card.Header>Elérhetőség</Card.Header>
                    <Card.Body>
                        <iframe title="Google Maps térkép" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.249440896518!2d20.777774115647812!3d48.105423679220884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47409fe48c01588b%3A0xdc6303e601794631!2sMiskolci%20SZC%20Kand%C3%B3%20K%C3%A1lm%C3%A1n%20Informatikai%20Technikum!5e0!3m2!1shu!2shu!4v1627978384738!5m2!1shu!2shu"></iframe><br></br><br></br>
                        <Card.Text>+36702028818</Card.Text>
                        <Card.Text>bdk@kkszki.hu</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <p style={{textAlign:'center', borderTop:'2px solid black', padding:'5px', margin:'10px', color:'black'}}>
                © 2022 BDK Webáruház --- bdk@kkszki.hu
                </p>
            </Row>
        </Container>
    );
}

export default Content;