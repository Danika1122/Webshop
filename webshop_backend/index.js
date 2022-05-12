const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(cors({
    origin: "*"
}));

//USERS
app.get("/felhasznalok", function(req, res) {
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});
    
    con.query("SELECT * FROM felhasznalok;", function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
    con.end();
});

//RESULTS
app.get("/termekek", function(req, res) {
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});
    
    con.query("SELECT * FROM tulajdonsagok, termekek WHERE termekek.id = tulajdonsagok.termekId;", function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
    con.end();
});
//RESULTS BY TYPE
app.get("/termekek/:tipus", function(req, res) {
    const tipus = req.params.tipus;
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});

    con.query(`SELECT * FROM tulajdonsagok, termekek WHERE termekek.id = tulajdonsagok.termekId && tulajdonsagok.tulajdonsag = "${tipus}";`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
    con.end();
});
//RESULTS BY ID
app.get("/termek-:id", function(req, res) {
    const id = req.params.id;
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});

    con.query(`SELECT * FROM tulajdonsagok, termekek WHERE termekek.id = tulajdonsagok.termekId && termekek.id = "${id}";`, function (error, results, fields) {
        res.send(results);
    });
    con.end();
});

//UPDATE PRODUCT
app.put("/update-termek-:id"), function(req, res) {
    const id = req.params.id;
    const ar = req.body.ar;
    console.log(id);
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});
    con.query(`UPDATE TERMEKEK SET ar=${ar} WHERE id = ${id};`, function (error, results, fields) {
        res.send(results);
    });
    con.end();
}

//DELETE PRODUCT
app.delete("/delete-termek-:id", function(req, res) {
    const id = req.params.id;
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});
    con.query(`DELETE FROM termekek WHERE id = ${id};`, function (error, results, fields) {
        res.send(results);
    });
    con.end();

});

//DELETE USER
app.delete("/delete-user-:id", function(req, res) {
    const id = req.params.id;
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});
    con.query(`DELETE FROM felhasznalok WHERE id = ${id};`, function (error, results, fields) {
        res.send(results);
    });
    con.end();

});


//REGIST
app.put('/regisztracio', bodyParser.json(), (req, res) => {
    var nev = req.body.nev;
    var email = req.body.email;
    var jelszo = req.body.jelszo;
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});
    con.query(`INSERT INTO felhasznalok (nev, email, jelszo) VALUES ("${nev}", "${email}", "${jelszo}");`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
    con.end();
});

//LOGIN
app.post('/login', bodyParser.json(), (req, res) => {
    var email = JSON.stringify(req.body.email);
    var jelszo = JSON.stringify(req.body.jelszo);
    var con = mysql.createConnection({host: "localhost",user: "root",password: "",database: "webshop"});
    con.query(`SELECT * FROM felhasznalok WHERE email = ${email} && jelszo = ${jelszo};`, function (error, results, fields) {
        if(error) throw error;
        res.send(results);
    });
    con.end();
});

app.listen(3001);