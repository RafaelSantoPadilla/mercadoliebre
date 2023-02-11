const express = require('express');
const { join } = require('path');
const app = express();
const path = require('path');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.post('/register', (req, res) => {
    console.log(req.body);
    // Redireccionamos a la pagina
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
app.post('/login', (req, res) => {
    console.log(req.body);
    // Redireccionamos a la pagina
    res.redirect('/');
});



const port = process.env.PORT || 3100;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
}); 
