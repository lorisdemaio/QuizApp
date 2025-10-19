require('dotenv').config();

const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(cors());

// Database
const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quizapp'
});

// Endpoint

// Register
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const password_hash = await bcrypt.hash(password, 10);
    const ql = "INSERT INTO utenti(username, email, password) VALUES(?, ?, ?)";

    db.query(ql, [username, email, password_hash], (err, ris) => {
        if(err) return res.status(500).json({ mex: "Errore: " + err });
        else return res.status(200).json({ mex: "Registrato con successo." });
    });
});

// Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const ql = "SELECT * FROM utenti WHERE email = ?";
    
    db.query(ql, [email], (err, ris) => {
        if(err) return res.status(500).json({ mex: "Errore: " + err });
        if(ris.length === 0) return res.status(401).json({ mex: "Credenziali non valide." });

        const password_hash = ris[0].password;
        const check = bcrypt.compare(password, password_hash);

        if(check)
        {   
            const payload = { id: ris[0].id, username: ris[0].username, email: ris[0].email };
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            return res.status(200).json({ status: "success", mex: "Accesso eseguito con successo.", token });
        }
        else return res.status(401).json({ mex: "Credenziali non valide." });
    });
});


// Get quiz
app.get('/quiz', (req, res) => {
    const ql = "SELECT * from quiz";

    db.query(ql, (err, ris) => {
        if(err) return res.status(500).json({ mex: "Errore: " + err });
        else return res.status(200).json(ris);
    });
});

// Get domande
app.get('/domande/:id', (req, res) => {
    const id = req.params.id;
    const ql = "SELECT * FROM domande WHERE id_quiz = ?";

    db.query(ql, [id], (err, ris) => {
        if(err) return res.status(500).json({ mex: "Errore: " + err });
        else return res.status(200).json(ris);
    });
});

// Add risultato
app.post('/add-risultato', (req, res) => {
    const { quiz, punteggio, id_utente } = req.body;
    const ql = "INSERT INTO risultati(quiz, risultato, id_utente) VALUES(?, ?, ?)";
    const qlNomeQuiz = "SELECT titolo FROM quiz WHERE id = ?";    

    let titolo_quiz = "";

    db.query(qlNomeQuiz, [quiz], (err, ris) => {
        if(err) return res.status(500).json({ mex: "Errore: " + err });
        else titolo_quiz = ris[0].titolo;
    
        db.query(ql, [titolo_quiz, punteggio, id_utente], (err, ris) => {
            if(err) return res.status(500).json({ mex: "Errore: " + err });
            else return res.status(200).json({ mex: "Risultato aggiunto con successo." });
        });
    });
});

// Get risultati
app.get('/risultati/:id', (req, res) => {
    const id = req.params.id;
    const ql = "SELECT * FROM risultati WHERE id_utente = ?";

    db.query(ql, [id], (err, ris) => {
        if(err) return res.status(500).json({ mex: "Errore: " + err });
        else return res.status(200).json(ris);
    });
});

// Elimina account
app.delete('/elimina-account/:id', (req, res) => {
    const id = req.params.id;
    const ql = "DELETE FROM utenti WHERE id = ?";

    db.query(ql, [id], (err, ris) => {
        if(err) return res.status(500).json({ mex: "Errore: " + err });
        else return res.status(200).json({ mex: "Account eliminato con successo." });
    });
})

app.listen(3030, '0.0.0.0', () => {
    console.log("Server on.");
});