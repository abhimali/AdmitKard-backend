const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const Tags = Object.freeze({
    University :'stanford-university',
    Usa : 'usa',
    Admission:'admission',
    Engineering : 'engineering',
    Top_Colleges : 'top'
});
const Topic = Object.freeze({
    Top_Colleges : 'top-colleges',
    Qualifying_Criteria : 'qualifying-criteria'
});

const questioSchema = new Schema({
    query:{
        required : true,
        type : String
    },
    topic :{
        required : true,
        type : String,
        enum : Object.values(Topic)
    },
    tags :[{
        
        index:true,
        required:true,
        type:String,
        enum:Object.values(Tags)
    }] 
});
questioSchema.index({ query: 1});
var Questions = mongoose.model('Question',questioSchema);
module.exports=Questions;