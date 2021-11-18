const { Router } = require("express");
const { getUser } = require("../Handlers/getUser");
const router = Router();

router.post("/:sub",getUser)

module.exports = router;