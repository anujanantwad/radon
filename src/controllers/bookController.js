const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
const createBook= async function (req, res) {
    let book = req.body
    let authorId=book.author_id
    let publisherId=book.publisher_id
// authorId validation===========================================================
    if(!authorId){return res.send("author id required")}
    
    let author= await authorModel.findById(authorId)
    if(!author) {return res.send("enter a valid author id")}
  

// publisherID validation==================================================
    if(!publisherId) {return res.send("publisher id required")}
    let publisher=await publisherModel.findById(publisherId)
    if(!publisher){return res.send("enter a valid publisher id")}


    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
// =============================================
const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author_id publisher_id')
    res.send({data: books})
}
// =================
const updatePublisher = async function (req, res) {
    let updated = await bookModel.updateMany({name:{$or:[Penguin,HarperCollins]}},{$set:{isHardOver} })
    res.send({data: specificBook})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
