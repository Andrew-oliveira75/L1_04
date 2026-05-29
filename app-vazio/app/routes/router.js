const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.render("pages/index", {resultado: null})
})

router.post("/resultado", (req, res) => {
    let nota1 = Number(req.body.nota1)
    let nota2 = Number(req.body.nota2)
    let media = (nota1 + nota2)/2
    if(media > 9 && media == 10) {
        var conceito = "A"
    } else if (media > 7.5 && media <= 9){
        var conceito = "B"
    } else if ( media > 6 && media <= 7.5){
        var conceito = "C"
    }else if (media > 4 && media <= 6){
        var conceito = "D"
    }else if (media <= 4){
        var conceito = "E"
    } 
    let json = {Media: media, Conceito: conceito}
    res.render("pages/index", {resultado: json})
})

module.exports = router;