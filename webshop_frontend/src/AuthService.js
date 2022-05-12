import axios from "axios";

function login(email, password) {
    return axios
    .post("http://localhost:3001/bejelentkezes", { email:email, jelszo:password})
    .then(res => {
        console.log(res.data);
      })
};

function regisztracio(nev, email, jelszo) {
    return axios
    .post("http://localhost:3001/regisztracio"), { nev:nev, email:email, jelszo:jelszo}
}

export default {login, regisztracio};