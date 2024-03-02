const  mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({

    thumnail:String,
    title: String,
    description: String,
    authImage : String,
    authName : String,
    content: [{
        Text : String,
        Image: String
    }] 
});

module.exports = mongoose.model('blogP', BlogSchema);

