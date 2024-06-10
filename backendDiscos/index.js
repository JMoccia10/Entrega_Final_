const express = require('express');
const session = require ('express-session');
const cors = require ('cors');
const mongoose = require('mongoose');
// const Disco = require('./models/discos.model');
const discoRoute = require('./routes/disco.route');
const app = express();

app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/discos", discoRoute);

app.get('/', (req, res) => {
    res.send("Hello from Discos API")
});

app.use(session({
    secret: 'tu_clave_aqui',
    resave: false,
    cookie: {expires: new Date (Date.now() +7 * 60 * 60 *1000)},
    saveUninitialized: false,    
    }));


    mongoose.connect('mongodb+srv://joanavillaperalta:MJN0Kg1XpppfMm1P@backenddb.mwswxka.mongodb.net/discos?retryWrites=true&w=majority&appName=backendDb')
    .then(() => {
        console.log('Connected to db!');
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch(() => 
        console.log('Connection failed!'));

module.exports = app 
