// Importation de Mongoose
const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');

// Methode Shema > créer un shema de données pour la base MongoDB.
const userSchema = mongoose.Schema({
    email: { type: String, required:true, unique:true },
    password:{ type: String, required: true }
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model ('User', userSchema);
// Méthode model > transforme ce modèle en un modèle utilisable.