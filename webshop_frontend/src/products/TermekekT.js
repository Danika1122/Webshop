import { useEffect, useState } from "react";
import {Row, Col, Card, Container} from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function TermekekT(props) {
  const params = useParams();
  const tipus = params.tipus;
  const [instrument, setInstrument] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
      setPending(true);
      return axios
            .get(`http://localhost:3001/termekek/${tipus}`)
                .then(res => {
                  setInstrument(res.data)
                  setPending(true);
                })
                .catch(console.log)
                .finally(() => {
                    setPending(false);
                });
      }, [tipus]);

      return(
        <div className="p5 m-auto content bg-ivory">
          {isPending ? ( <div className="spinner-border"></div> ) : 
          (
            <Container>
                <Row className="d-flex md-2">
                {instrument.map((item) => (
                  <Col className="d-flex justify-content-center" key={item.id} style={{paddingTop:'20px'}}>
                  <Card key={item.id} onClick={() => window.location.assign(`/termek-${item.id}`)} bg="dark" border="dark" style={{width:'18rem', height:'21rem', margin:'5px', cursor:'pointer',}} >
                    <Card.Img variant="top" src={item.link_kep} style={{height:'12rem'}}/>
                    <Card.Body>
                      <Card.Title style={{color:'white'}}>{item.nev}</Card.Title>
                      <Card.Text><br></br>{item.ar} Ft</Card.Text>
                    </Card.Body>
                  </Card>
                  </Col>
              ))}
                </Row>
            </Container>
          )}
        </div>
      );
};

export default TermekekT;
