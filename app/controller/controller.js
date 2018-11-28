var express = require("express");

var router = express.Router();

var burger = require("../model/burger.js");

router.get("/", (req,res) =>{
    burger.all((data)=>{
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject)
        res.render('index', hbsObject);
    })
});

router.post("/api/burgers", (req,res)=>{
    burger.create([
        "burger_name", "devoured"
    ],
    [
        req.body.burger_name, false
    ], (result) => {
        res.json({ id: result.insertId});
    })
})

router.put("/api/burgers/:id", (req,res) => {
    console.log(req.params)
    var condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, (result) =>{
        if (result.changedRows ==0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;