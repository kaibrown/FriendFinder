var path = require("path");

module.exports = function (app){
// deliver this file when user hits the survey route
    app.get("/survey", function(req, res){
 
        res.sendFile(path.join(__dirname + "/../public/survey.html"))

    })
// will use this file by default anytime that some is using app
    app.use(function(req, res){

        res.sendFile(path.join(__dirname + "/../public/home.html" ))
    })

}
// must require this file in server.js