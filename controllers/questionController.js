var UserService = require('../services/questionServices') 



const getUsers = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    
    try {
        console.log("abv");
        var users = await UserService.getQuestions(req.body)
        return res.status(200).json({ status: 200, Result: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
const insertQuestion = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    
    try {
        console.log("abv");
        var users = await UserService.insertQuestion(req.body)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const displayQuestions = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    
    try {
        console.log("abv");
        var users = await UserService.displayQuestions(req.body)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


module.exports = {getUsers,insertQuestion,displayQuestions};
