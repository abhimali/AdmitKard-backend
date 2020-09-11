var Questions = require('../models/questionModel')

const getQuestions = async function (body) {

    try {
        //const res = await Questions.find({})
        
        const res= await Questions.aggregate(
            [
              { $match: { $text: { $search: body.pattern } } },
              { $sort: { score: { $meta: "textScore" } } },
              { $project: { query: 1, _id: 0 } }
            ]
         )
        console.log(res);
         var arr = []
         res.forEach(itr=>{
            arr.push(itr.query);
         })
        return res;
    
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error('Error while Paginating Users')
    }
}
const insertQuestion = async function (body) {
    try {
        console.log(body);
        const res = await  Questions.create(body)
        console.log(res);
        return res;
    
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}
const displayQuestions = async function (body) {
    try {
        console.log(body);
        const res = await Questions.find({})
        console.log(res);
        return res;
    
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}
module.exports = {getQuestions,insertQuestion,displayQuestions};