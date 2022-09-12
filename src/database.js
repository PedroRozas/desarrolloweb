const mongoose = require("mongoose");

const URL = "mongodb+srv://kryssldea:Josyypedro1609@cluster0.wxrsttc.mongodb.net/test";

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("Conectado correctamente"))
    .catch(err => console.log(err));

module.exports = mongoose;