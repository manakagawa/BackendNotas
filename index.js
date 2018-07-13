const Note = require ('./models');
const app = require ('express')();
const bodyParser = require ('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/notes', (req, res) => {
    
    let {text, color} = req.body;
    let newNote = new Note({text, color});

    newNote.save().then(()=>{
        res.send(newNote);   
    
    });
});

app.get('/notes', (req, res) =>{
    
    Note.find({}, (err, notelist) => res.send(notelist));
});

app.delete('/notes', (req, res) =>{

    let id = req.body.id;
    
    Note.findByIdAndRemove(id, (err, deletedNote)=>{
        res.send(deletedNote);
    });
});


app.listen(3000, () =>{
    console.log("Ya me siento de universidad :)");
})