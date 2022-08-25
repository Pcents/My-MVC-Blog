const router = require("express").Router();
const blogRoute = require("./blogRoute");
const userRoute = require("./userRoute");

router.use("/blogs", blogRoute);
router.use("/users", userRoute);

module.exports = router;
