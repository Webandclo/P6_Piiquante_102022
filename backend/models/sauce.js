// Importation de Mongoose
const mongoose = require('mongoose');

// Methode Shema > créer un shema de données pour la base MongoDB.
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true},
    description: { type: String, required: true },
    mainPepper: { type: String, required: true},
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true},
    likes: { type: Number, required: true , default: 0},
    dislikes: { type: Number, required: true, default: 0 },
    usersLiked: { type: [String], required: true, default: [ ] },
    usersDisliked: { type: [String], required: true, default: [ ] },
});

module.exports = mongoose.model('Sauce', sauceSchema);

// Méthode model > transforme ce modèle en un modèle utilisable.