var friendsArray = require("../data/friends");


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsArray);
    

    app.post("/api/friends", function(req, res) {
        
        if (friendsArray.length < 2) {
          friendsArray.push(req.body);
          res.json(true);
        }
        
        else {
          friendsArray.push(req.body);
          res.json(false);
        }

      });
    })
};