const jwt = require("jsonwebtoken");

const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      uid,
      process.env.SECRET,
      {
        expiresIn: 60 * 60 *24,
      },
      (err, token) => {
        if (err) {
            console.log(err)
          reject("no se pudo generar el token");
        }
        resolve(token);
      }
    );
  });
};
module.exports = generateJWT;
