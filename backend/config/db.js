const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// connexion mongodb
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER_PASS}@piiquante.1inzptg.mongodb.net/piiquante`
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));
