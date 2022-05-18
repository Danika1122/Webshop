import React, { useState, useEffect } from "react";
import { Container, Button, Table, InputGroup, FormControl} from "react-bootstrap";
import axios from "axios";

import UjTermek from "../components/ujTermek";

function TermekekAdmin(props) {
  const[instruments, setInstruments] = useState([]);
  const[isFetchPending, setFetchPending] = useState(false);

  function Delete(id) {
    return axios
      .delete(`http://localhost:3001/delete-termek-${id}`)
      .then(res => {
        console.log(res.data);
        window.location.reload();
        });
  }

  function Update(id, Nev, Ar) {
    if(Nev === "" || Nev === "" || Ar === "") {
      alert("Töltse ki az összes mezőt!")
    }
    else axios
      .post(`http://localhost:3001/update-termek-${id}`, {nev:Nev, ar:Ar})
      .then(res => {
        console.log(res.data)
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
            <UjTermek/>
            <Table style={{border:'1px solid black'}}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Név</th>
                  <th>Ár</th>
                  <th>Típus</th>
                </tr>
              </thead>
              <tbody>
              {instruments.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <InputGroup>
                      <FormControl
                        as="textarea"
                        rows={1}
                        id={item.nev}
                        defaultValue={item.nev}
                        style={{textAlign:'center'}}
                      >
                      </FormControl>
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <FormControl
                        id={item.id}
                        defaultValue={item.ar}
                        style={{textAlign:'center'}}
                      >
                      </FormControl>
                    </InputGroup>
                  </td>
                  <td>{item.tulajdonsag}</td>
                  <td>
                    <Button
                      variant="outline-success"
                      onClick={() => Update(item.id, document.getElementById(item.nev).value, document.getElementById(item.id).value)}
                      >Módosít
                    </Button>
                  </td>
                  <td style={{border:'1px solid black'}}>
                    <Button 
                      variant="outline-danger"
                      onClick={() => Delete(item.id)}
                      >Töröl
                    </Button>
                  </td>
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
