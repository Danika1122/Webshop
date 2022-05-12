import { useEffect, useState } from "react";
import {Row, Col, Card, Container, Button} from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function Termek(props) {
  const params = useParams();
  const id = params.termekId;
  const [instrument, setInstrument] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
      setPending(true);
      return axios
            .get(`http://localhost:3001/termek-${id}`)
                .then(res => {
                  setInstrument(res.data)
                  setPending(true);
                })
                .catch(console.log)
                .finally(() => {
                    setPending(false);
                });
      }, [id]);

    return (
      <div className="p5 m-auto content bg-lavender">
        {isPending ? (<div className="spinner-border"></div>) : 
        (
          <Container style={{marginTop:'40px', marginBottom:'40px'}}>
            {instrument.map((item) => (
              <Row>
                <Col>
                  <Card.Img src={item.link_kep} style={{ border:'1px solid black', height:'25rem'}}></Card.Img>
                </Col>
                <Col>
                    <h1 style={{color:'black'}}>{item.nev}</h1>
                    <ul>
                    {item.leiras.split(';').map((adat) => (
                      <li style={{listStyleType:'none'}}>
                        {adat}
                      </li>
                    ))}
                    </ul>
                    <br></br>
                    <Button key={item.id} variant="success" type="submit" >
                      Kosárba
                    </Button>
                </Col>
              </Row>
            ))}
          </Container>
        )}
      </div>
    );
};

export default Termek;
