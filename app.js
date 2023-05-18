const express = require('express');
const session = require('express-session')
const path = require('path')
// express app
const app = express();
app.use(session({ secret: 'Your_Secret_Key' }));
// listen for requests
app.listen(8080);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
const employees = [
    { "id": "1", "name": "Essam Eliwa", "position": "Doctor" },
    { "id": "2", "name": "Nada Ayman", "position": "Assistant" },
    { "id": "3", "name": "XYZ", "position": "ABC" },
    { "id": "4", "name": "Zein", "position": "ABC" }
];
app.get('/', (req, res) => {
    res.render('index', { employees, userName: (req.session.userName === undefined ? "" : req.session.userName) });
});
app.get('/emp/:id', (req, res) => {
    let id = req.params.id;
    let emp = employees.find((val, idx, arr) => { 
        return val.id == id });
    res.render('emp', { emp, userName: (req.session.userName === undefined ? "" : req.session.userName) });
});
app.get('/profile', (req, res) => {
    req.session.userName = req.query.un;
    req.session.pw = req.query.pw;
    req.session.x = 'x';
    res.redirect('/');
});
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});
app.get('/about', (req, res) => {
    res.render('about', { userName: (req.session.userName === undefined ? "" : req.session.userName) });
});

app.get('/slide', (req, res) => {
    res.render('slide', { userName: (req.session.userName === undefined ? "" : req.session.userName) });
});
app.get('/login', (req, res) => {
    res.render('login', { userName: (req.session.userName === undefined ? "" : req.session.userName) });
});


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { userName: (req.session.userName === undefined ? "" : req.session.userName) });
});

