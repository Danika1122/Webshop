import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Regisztracio() {
    const navigate = useNavigate();
        
    function signUpFormSubmit(e) {
        var tartalmaz = false;
        e.preventDefault();
        axios
        .get("http://localhost:3001/felhasznalok")
        .then(res => { 
        res.data.forEach(felhasznalo => {
            if(felhasznalo.email === e.target.elements.email.value) {
                tartalmaz = true;
            }
        })
        if(e.target.elements.password.value === e.target.elements.password2.value) {
            if(e.target.elements.vezeteknev.value !== "" && e.target.elements.keresztnev.value !== "") {
                if(!tartalmaz) {
                    return axios
                    .put("http://localhost:3001/regisztracio", {nev:(e.target.elements.vezeteknev.value + " " + e.target.elements.keresztnev.value), email:e.target.elements.email.value, jelszo:e.target.elements.password.value})
                    .then(() => {
                        localStorage.setItem('user', e.target.elements.vezeteknev.value + " " + e.target.elements.keresztnev.value);
                        navigate(`/webshop`);
                        window.location.reload();
                    })
                }
                else {
                    alert("Az email cím már használatban van.");
                }
            }
            else {
                alert("Töltse ki az összes mezőt!");
            }
        }
        else {
            alert("A jelszavak nem egyeznek.");
        }
    })
    }

    return (
        <Container className="d-flex justify-content-center">
            <Form className="justify-content-center form-label" onSubmit={signUpFormSubmit}>
                <Form.Label column="lg" >Regisztráció</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Control name="vezeteknev" placeholder="Vezetéknév" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="keresztnev" placeholder="Keresztnév" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="email" placeholder="Email cím" type="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="password" placeholder="Jelszó" type="password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="password2" placeholder="Jelszó újra" type="password" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Regisztráció
                </Button>
            </Form>
        </Container>
    );
}

export default Regisztracio;