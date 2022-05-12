import { useState, useEffect } from "react";
import {Card, Row, Col} from "react-bootstrap";
import axios from "axios";


function Termekek() {
  const[instruments, setInstruments] = useState([]);
  const[isFetchPending, setFetchPending] = useState(false);

  useEffect(() => {
      setFetchPending(true);
      return axios
      .get("http://localhost:3001/termekek")
          .then(res => {
            setInstruments(res.data)
          })
          .catch(console.log)
          .finally(() => {
              setFetchPending(false);
          });
  }, []);

  return(
      <div className="p5 m-auto content bg-ivory">
        {isFetchPending ? ( <div className="spinner-border"></div> ) : 
        (
          <Row>
            {instruments.map((item) => (
                <Col className="d-flex justify-content-center" key={item.id}>
                <Card onClick={() => window.location.assign(`/termek-${item.id}`)} bg="dark" border="dark" style={{height:'21rem', width:'18rem', margin:'5px', cursor:'pointer',}} >
                  <Card.Img variant="top" src={item.link_kep} style={{height:'11rem'}}/>
                  <Card.Body>
                    <Card.Title style={{color:'white'}}>{item.nev}</Card.Title>
                    <Card.Text><br></br>{item.ar} Ft</Card.Text>
                  </Card.Body>
                </Card>
                </Col>
            ))}
          </Row>
        )}
      </div>
    );
}

export default Termekek;
