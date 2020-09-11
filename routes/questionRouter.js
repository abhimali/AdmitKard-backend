const express = require ('express');
const Questions = require('../models/questionModel');
const bodyParser = require('body-parser');
const questionValidator = require('../validation/insertValidater')

const questionRouter = express.Router();

questionRouter.use(bodyParser.json());

var questionController = require('../controllers/questionController');


questionRouter.get('/get',questionController.displayQuestions)
questionRouter.post('/search',questionValidator.validateSearchRequest, questionController.getUsers)
questionRouter.post('/insert',questionValidator.validateInsertRequest, questionController.insertQuestion)

module.exports=questionRouter;