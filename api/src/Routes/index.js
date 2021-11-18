const { Router } = require("express");
const router = Router();
const getUser=require("./getUser")
const getLostsPets=require("./getLostPets")

router.use("/getUser",getUser)
router.use("/getAllMisingPets",getLostsPets)

module.exports = router;