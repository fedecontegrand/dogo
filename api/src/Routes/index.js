const { Router } = require("express");
const router = Router();
const getUser=require("./getUser")

router.use("/getUser",getUser)

module.exports = router;