var tableData = require("../data/friends");


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        
        if (friends.length < 2) {
          friendsArray.push(req.body);
          res.json(true);
        }
        else {
          friendsArray.push(req.body);
          res.json(false);
        }
      });