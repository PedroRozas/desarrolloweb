const { Router } = require("express");
const express = require("express");
const router = express.Router();
const user  = require("../model/user");


router.get("/", async (req, res) => {
    const Users = await user.find();
    console.log(Users);
    res.json({
        Users : Users
    })
});
router.get("/:id", async (req, res) => {
    const Users = await user.findById(req.params.id);
    res.json({
        Users : Users
    })
})
router.post("/", async (req, res) => {
    const {email, pass} = req.body;
    const users = new user({
        email: email,
        pass: pass
    });
    await users.save();
    res.json({
        status: "enviado correctamente"
    })
});

router.put("/:id", async (req, res) =>{
    const {email, pass} = req.body;
    const newuser = {
        email: email,
        pass: pass
    };
    await user.findByIdAndUpdate(req.params.id, newuser, {useFindAndModify : false});
    res.json({
        status: "Cliente actualizado"
    })
});

router.delete("/:id", async (req,res ) =>{
    await user.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: "Cliente eliminado"
    })
});
module.exports = router;