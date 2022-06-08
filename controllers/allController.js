const authorModel = require('../models/authorModel');

const bookModel = require('../models/bookModel');

// problem1====================create two apis one for books and other for authors=================================

const createNewAuthor = async function (req, res) {
    let data = req.body
    let savedData = await authorModel.create(data);
    res.send({ msg: savedData })
}
// ===============================================
const createNewBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data);
    res.send({ msg: savedData })
}



// probelm2=========================================================================================================
const getCbBooks = async function (req, res) {
    
    let author = await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0});
let authorId=author[0]
console.log(authorId)
    let savedData=await bookModel.find(authorId).select({name:1,_id:0})
    res.send({ msg: savedData })
}





// problem3=========================================================================================================

const authorBookUpdate = async function (req, res) {
    
        let updateBook = await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
        let price=updateBook.price
      let ab=updateBook.author_id
        let authorName=await authorModel.find({author_id:updateBook.author_id}).select({author_name:1,_id:0})
        let name=authorName[0]
        res.send({ msg: name,price})


}



// probllem4========================================================================================================

// const findBooksbetween = async function (req, res) {
//     let data = await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
//     const bookData = data.map(inp=> inp.author_id)

//     let abc = []
//     for(let i=0; i<bookData.length; i++) {
//         let x = bookData [i]
//         const author = await AuthorModel.find({author_id:x}).select({author_name:1, _id:0})
//         abc.push(author)
//     }
//     const findBooksbetween = abc.flat()
    
//     res.send({ msg: findBooksbetween })
// }



module.exports.createNewBook = createNewBook;
module.exports.createNewAuthor = createNewAuthor;
module.exports.getCbBooks = getCbBooks;
module.exports.authorBookUpdate = authorBookUpdate;

// module.exports.findBooksbetween = findBooksbetween;

































