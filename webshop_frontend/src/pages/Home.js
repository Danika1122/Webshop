import { Container } from "react-bootstrap";

import Card from '../components/Cards';
import Termekek from "../products/Termekek";

export function Main() {
    return (
        <Container>
            <br></br>
            <Card />
            <br></br>
            <Termekek />
        </Container>
    );
}

export default Main;