var friends = require ("../data/friends.js");

module.exports = function (app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    })
}

// returns our exisitng friends dataset into json object that 
// we can then manipulate