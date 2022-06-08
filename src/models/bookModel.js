const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: { type:String,
                required:true
},
     
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{type:String,default:2021},
    tags: [String],
    authorName: String,
    totalPages:String,
   stockAvailable:Boolean
}, { timestamps: true });


module.exports = mongoose.model('bookModel', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
