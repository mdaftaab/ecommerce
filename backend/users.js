const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mdyash99:9871096533@ecom.n7uhp2e.mongodb.net/")
.then(() => console.log('Connected To Database'));

const userSchema = new mongoose.Schema({
    name:{type : String, required : true},
    email:{ type : String ,required :true },
    password:{type :String, required : true}
});

module.exports = mongoose.model("User", userSchema);