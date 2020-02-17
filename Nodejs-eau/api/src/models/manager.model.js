const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const managerSchema = new Schema({
Nom:{
    type:String,
},
Prenom:{
    type:String,
  
},

Mail:{
    type:String,
  
},

Tel:{
    type:String,
  
},},{

timestamps:true
});

module.exports=mongoose.model('Manager',managerSchema);