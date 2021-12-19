const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'karen.hirayama',
    host: 'localhost',
    password: 'password',
    database: 'crudImages'
});

app.post('/create', (req, res) => {
    const nameImage = req.body.nameImage
    const urlImage = req.body.urlImage
    const themeImage = req.body.themeImage

    db.query('INSERT INTO imagesTshirt (nameImage, urlImage, themeImage) VALUES (?,?,?)',
    [nameImage, urlImage, themeImage],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    } )
})

app.get('/images', (req, res) => {
    db.query('SELECT * FROM imagesTshirt', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.put('/update', (req, res) => {
    const id = req.body.id;
    const themeImage = req.body.themeImage;

    db.query('UPDATE imagesTshirt SET themeImage = ? WHERE id = ?', [themeImage, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    db.query('DELETE FROM imagesTshirt WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(3001, () => {
    console.log("Yey, server is running or port 3001")
})