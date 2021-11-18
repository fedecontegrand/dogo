const { Router } = require("express");
const { lostPets } = require("../Handlers/lostPets");
const router = Router();

router.post("/",lostPets)

module.exports = router;