const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midW=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", midW.mid1,userController.getUserData)

router.put("/updateUsers/:userId",midW.mid1,midW.authorize,userController.updateUser)
router.delete("/delete/:userId",midW.mid1,midW.authorize,userController.deletedUser)
router.post("/posts/:userId/post",midW.mid1,midW.authorize,userController.postMessage)
module.exports = router;