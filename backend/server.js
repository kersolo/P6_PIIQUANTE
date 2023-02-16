require('dotenv').config({ path: './config/.env' }); // import et configuration de dotenv
require('./config/db'); // import du fichier db.js pour la connexion a la la base de données
const express = require('express'); // import du framework express
const helmet = require('helmet'); // import helmet
const port = process.env.PORT; // création de la constante port
const app = express(); // on appel la méthode express
const path = require('path'); //import du module path
//Import des routes user et sauce
const userRoute = require('./routes/userRoute');
const sauceRoute = require('./routes/sauceRoute');

////

//En-têtes pour éviter les erreurs CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

////

//middleware
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(express.json());

//routes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoute);
app.use('/api/sauces', sauceRoute);

//server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
