import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios";
import {Modal, Button, Form } from 'react-bootstrap';


function UjTermek() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    function HozzaAdTermek(Nev, Ar, Tulajdonsag, Leiras, Linkkep) {
      if(Nev === "" || Ar === "" || Tulajdonsag === "" || Leiras === "" || Linkkep === "") {
        alert("Töltse ki az összes mezőt!");
      }
      else if(Ar < 1 || !parseInt(Ar)) {
        alert("Valós árat adjon meg!")
      }
      else {
        axios
          .put(`http://localhost:3001/ujTermek`, {nev:Nev, ar:Ar})
          .then(res => {
            console.log(res.data);
          });
        axios
          .put(`http://localhost:3001/ujTermekTulajdonsag`, {tulajdonsag:Tulajdonsag, leiras:Leiras, linkkep:Linkkep})
          .then(res => {
              alert("Termék hozzáadva.")
              window.location.reload();
          });
      }
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Új termék
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Új termék felvétele</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Név"
                  id="nev"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Ár"
                    id="ar"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Tulajdonság"
                    id="tulajdonsag"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Leírás"
                    id="leiras"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Kép linkje"
                    id="linkkep"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Bezárás
            </Button>
            <Button variant="primary" onClick={() => HozzaAdTermek(document.getElementById('nev').value, document.getElementById('ar').value, document.getElementById('tulajdonsag').value, document.getElementById('leiras').value, document.getElementById('linkkep').value)}>
              Mentés
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default UjTermek;
