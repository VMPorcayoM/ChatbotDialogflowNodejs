const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatbotAppointmentSchema = new Schema({
    client: String,
    estudio: String,
    date: String,
    time: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Appointments", ChatbotAppointmentSchema);