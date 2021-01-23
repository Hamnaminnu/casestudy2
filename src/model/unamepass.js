const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://hamna:hamna@hamna.mn0bf.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const detSchema = new Schema({
    name: String,
    psw: String
});
var detdata = mongoose.model('detdata',detSchema);
module.exports=detdata;