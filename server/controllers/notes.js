var mongoose = require('mongoose');
var Note = mongoose.model('Note');
mongoose.Promise = global.Promise;

module.exports = {
    show: function(req,res){
        Note.find({}).sort('-createdAt').exec(function(err, notes){
            if(err){
                console.log('errors', err)
            } else {
                console.log('successfully retrieved');
                res.json(notes)
            }
        });
    },

    add: function(req, res, next){
        console.log(req.body);
        let newNote = new Note(req.body);
        console.log(newNote);
        newNote.save(function(err){
            if(err){
                console.log(err)
            } else {
                console.log('successfully saved')
            }
        });
        console.log(newNote);
        return res.json(true)
    }
}