import { useState, useEffect } from "react";
import { Container, Button, Table} from "react-bootstrap";
import axios from "axios";

function TermekekAdmin(props) {
  const[instruments, setInstruments] = useState([]);
  const[isFetchPending, setFetchPending] = useState(false);

  function Delete(id) {
    return axios
      .delete(`http://localhost:3001/delete-termek-${id}`)
      .then(res => {
        window.location.reload();
            });
  }
  
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
          <Container className="text-center">
            <Table style={{border:'1px solid black'}}>
              <thead>
                <tr style={{border:'1px solid black'}}>
                  <th style={{border:'1px solid black'}}>Id</th>
                  <th style={{border:'1px solid black'}}>Név</th>
                  <th style={{border:'1px solid black'}}>Ár</th>
                </tr>
              </thead>
              <tbody>
              {instruments.map((item) => (
                <tr style={{border:'1px solid black'}}>
                  <td style={{border:'1px solid black'}}>{item.id}</td>
                  <td style={{border:'1px solid black'}}>{item.nev}</td>
                  <td style={{border:'1px solid black'}}>{item.ar} Ft</td>
                  <td style={{border:'1px solid black'}}><Button>Módosít</Button></td>
                  <td style={{border:'1px solid black'}}><Button onClick={() => Delete(item.id)} variant="danger">Töröl</Button></td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Container>
        )}
      </div>
    );
}

export default TermekekAdmin;