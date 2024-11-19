const express = require("express");
const { login, protectedContent, BemGuarda, teste } = require("./controllers/authController");

const router = express.Router();

// Rota pública
router.get("/", (request, response) => {
  response.json({ message: "Endpoint que não exige autenticação!" });
});

// Rota de login
router.post("/login", login);

// Rota protegida
router.get("/protected", protectedContent);

router.get("/corinthians", BemGuarda);

router.get("/athletico", teste);



module.exports = router;