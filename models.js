const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://mnakagawa:N4k4g4w4Taco.@mnakagawa-bsceb.mongodb.net/devf?retryWrites=true', {
    userNewUrlParser:true
});

const Note = mongoose.model('Note',{
    text: String,
    color:String
});

module.exports = Note;


