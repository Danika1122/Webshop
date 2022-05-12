import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import {Offcanvas, Button } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";

function Kosar({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button id="kosar" variant="ligth" placement="bottom" onClick={handleShow} className="me-2">
          <BsFillCartFill/>
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Kosár</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default Kosar;