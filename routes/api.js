const express = require("express");
const router = express.Router();
const Appointment = require("../Models/Appointments");
const Estudio = require("../Models/Estudios");


router.get("/chatbot", (req, res) => {
    res.json({
        ok: true,
        msg: "Esto esta funcionando bien"
    });
});

//POST para agregar un nuevo estudio
router.post("/newEstudio", (req, res) => {
    let body = req.body;
    let estudio = new Estudio({
        name: body.name,
        description: body.description,
        price: body.price
    });
    estudio.save((err, estudioDB) => {
        if (err) return res.json({
            ok: false,
            msg: "Hubo un error: " + err
        });
        res.json({
            ok: true,
            msg: "Estudio created",
            estudio: estudioDB
        });
    });

});

//POST para agregar una nueva cita
router.post("/newAppointment", (req, res) => {
    let body = req.body;
    let appintment = new Appointment({
        client: body.client,
        estudio: body.estudio,
        date: body.date,
        time: body.time
    });
    appintment.save((err, appointmentDB) => {
        if (err) return res.json({
            ok: false,
            msg: "Hubo un error: " + err
        });
        res.json({
            ok: true,
            msg: "Appointment created",
            appointment: appointmentDB
        });
    });

});
module.exports = router;