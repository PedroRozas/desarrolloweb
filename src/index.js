const express = require("express");
const morgan = require("morgan");
const path = require("path");
const {mongoose} = require("./database");

const app = express();

//Config
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());


//Routes
app.use("/api", require("./routes/routes"));

//Static files
app.use(express.static(path.join(__dirname, "public")));


app.listen(app.get("port"), function(){
    console.log("Servidor iniciado en el puerto "+ app.get("port"));
});