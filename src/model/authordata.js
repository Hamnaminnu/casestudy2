const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hamna:hamna@hamna.mn0bf.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const authorSchema = new Schema({
    author: String,
    born: String,
    genre: String,
    more: String,
    img: String
});
var authordata = mongoose.model('authordata',authorSchema);
module.exports=authordata;