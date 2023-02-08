const express = require('express');
const { join } = require('path');
const app = express();
const path = require('path');
app.use(express.static('public'));
const port = 3100;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});



app.listen(port, () => {
    console.log('Server started on http://localhost:3100');
}); 
