const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( {
    email: {type: String, require: true},
    pass: {type: String, require: true},

})

module.exports = mongoose.model("user", UserSchema);