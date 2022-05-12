import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Bejelentkezes() {
    const navigate = useNavigate();

    function loginFormSubmit(e) {
        e.preventDefault();
        return axios
        .post("http://localhost:3001/login", { email:e.target.elements.email.value, jelszo:e.target.elements.password.value})
        .then(res => {
            if(res.data.length > 0) {
                res.data.forEach(element => {
                    if(element.admin === 1) {
                        localStorage.setItem('admin', element.nev);
                        navigate(`/webshop`);
                        window.location.reload();
                    }
                    else {
                        localStorage.setItem('user', element.nev);
                        navigate(`/webshop`);
                        window.location.reload();
                    }
                })
            }
            else {
                alert("Hibás bejelenetkezési adatok! Próbálja újra");
            }
        })
    }
    return (
        <Container className="d-flex justify-content-center">
        <Form className="justify-content-center form-label" onSubmit={loginFormSubmit}>
            <Form.Label column="lg" >Bejelentkezés</Form.Label>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email cím" name="email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Jelszó" name="password" />
            </Form.Group>
            <Button variant="success" type="submit" id="submitButton">
                Bejelentkezés
            </Button>
        </Form>
        </Container>
    );
};

export default Bejelentkezes;