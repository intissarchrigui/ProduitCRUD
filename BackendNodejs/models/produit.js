/* var mongoose = require('mongoose');

var userSchema =mongoose.Schema({
    Name:{type:String,required:true},
   Prix:{type:Number,required:true},
   Quantité:{type:Number,required:true}
})

var Produit =module.exports=mongoose.model('Produit',userSchema); */
const mongoose = require('mongoose');

var Produit = mongoose.model('Produit', {
    name: { type: String },
    Prix: { type: String },
    Quantite: { type: Number }
});

module.exports = { Produit };