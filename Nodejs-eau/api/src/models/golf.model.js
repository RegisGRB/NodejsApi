const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const golfSchema = new Schema({
Title:{
    type:String,
    required: true,
    unique:true,
    uppercase:true,
},
Latitude:{
    type:Number,
  
},

Longitude:{
    type:Number,
  
},

Description:{
    type:String,
  
},
id_Manager:{
    type:String,
},},{

timestamps:true
});

module.exports=mongoose.model('Golf',golfSchema);