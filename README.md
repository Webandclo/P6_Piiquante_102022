# PROJET P6 - PIIQUANTE



6ème projet de la <a href= 'https://openclassrooms.com/fr/paths/185/projects/676/assignment'>formation de développeur web de OpenClassrooms</a>


<h2> 🔨 Scénario :</h2>

Développement d'une application web nommée "Piquante" dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres utilisateurs.
Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni.

<h2> 💻 Objectifs :</h2>

Développement Backend en Javascript

- Serveur Node.js
- Framework Express
- Base de données MongoDB
    - Hébergement sur MongoDB Atlas
    - Opérations relatives à la BDD réalisées avec mongoose
- API REST
- Sécurité OWASP et RGPD

<h2> 🗝 Mesures de sécurité mises en place :</h2>

- Hashage du mot de passe utilisateur avec bcrypt
- Manupulation sécurisée de la base de donnée avec mongoose
- Vérification que l'email utilisateur soit unique dans la base de données avec mongoose-unique-validator
- Utilisation de variables d'environnement pour les données sensibles avec dotenv
- Authentification de l'utilisateur par token avec jsonwebtoken
- Protection des headers avec helmet

<h2> 🧮 Test de l'application :</h2>

- Cloner Front

1. Cloner le <a href='https://github.com/Webandclo/P6_Piiquante_102022/tree/master/frontend'>frontend</a> de l'application.
2. Installer les dépendances : npm install
3. Lancer : npm start

- Cloner Back

1. Cloner le <a href='https://github.com/Webandclo/P6_Piiquante_102022/tree/master/backend'>backend</a> de l'application.
2. Pour le projet le fichier .env n'est pas ignoré dans gitignore.
3. installer les dépendances : npm install
4. lancer : nodemon server

- Front : http://localhost:4200
- Backend : http://localhost:3000
