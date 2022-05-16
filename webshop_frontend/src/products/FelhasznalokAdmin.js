import { useState, useEffect } from "react";
import { Container, Button, Table, InputGroup, FormControl} from "react-bootstrap";
import axios from "axios";

function FelhasznalokAdmin(props) {
  const[instruments, setInstruments] = useState([]);
  const[isFetchPending, setFetchPending] = useState(false);

  function Delete(id) {
    return axios
      .delete(`http://localhost:3001/delete-user-${id}`)
      .then(res => {
        console.log(res.data);
        window.location.reload();
        });
  }

  function Update(id, Nev, Jelszo, Admin) {
    if(Nev === "" || Jelszo === "" || Admin === "") {
      alert("Töltse ki az összes mezőt!")
    }
    else
    axios
      .post(`http://localhost:3001/update-user-${id}`, {nev:Nev, jelszo:Jelszo, admin:Admin})
      .then(res => {
        console.log(res.data);
        window.location.reload();
        });
  }
  
  useEffect(() => {
      setFetchPending(true);
      return axios
      .get("http://localhost:3001/felhasznalok")
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
                    <th>Id</th>
                    <th>Név</th>
                    <th>Email cím</th>
                    <th>Jelszó</th>
                    <th>Jogosultság</th>
                </tr>
              </thead>
              <tbody>
              {instruments.map((item) => (
                <tr key={item.id}>
                  <td>{item.id} </td>
                  <td>
                    <InputGroup>
                      <FormControl
                        id={item.nev}
                        defaultValue={item.nev}
                        style={{textAlign:'center'}}
                      >
                      </FormControl>
                    </InputGroup>
                  </td>
                  <td>{item.email} </td>
                  <td>
                    <InputGroup>
                      <FormControl
                        id={item.jelszo}
                        defaultValue={item.jelszo}
                        style={{textAlign:'center'}}
                      >
                      </FormControl>
                    </InputGroup>
                  </td>
                  <td>
                    <InputGroup>
                      <FormControl
                        id={item.id}
                        defaultValue={item.admin}
                        style={{textAlign:'center'}}
                      >
                      </FormControl>
                    </InputGroup>
                  </td>
                  <td>
                    <Button
                      variant="outline-success"
                      onClick={() => Update(item.id, document.getElementById(item.nev).value, document.getElementById(item.jelszo).value, document.getElementById(item.id).value)}
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

export default FelhasznalokAdmin;
