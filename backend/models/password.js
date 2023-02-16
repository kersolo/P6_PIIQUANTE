const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .symbols()
  .has()
  .not()
  .spaces();

module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    res.status(400).json({
      error:
        "Le mot de passe n'est pas assez fort : au moins 8 cractères, une majuscule, une minuscule, un chiffre, un symbole, pas d'espace",
    });
  } else {
    next();
  }
};
