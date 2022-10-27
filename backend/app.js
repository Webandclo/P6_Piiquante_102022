const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// Importation des routeurs (fichiers déportés)
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const path = require("path");
var cors = require ('cors');

const mongoose = require('mongoose');

// Connexion de l'API à MongoDB Atlas
mongoose.connect('mongodb+srv://claudie:OpenClassRooms@cluster0.bsal5sf.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !!!'))
    .catch(() => console.log('Connexion à MongoDB échouée :('));


const app = express();

// Donne accès au CORS de la requette
app.use(express.json());



// Configuration de l'entete de la requete
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

// Logique importé et appliqué à la même route 
// Routes attendus par le frontend
// On enregistre les routeurs dans l'API

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

app.use (cors());

module.exports = app