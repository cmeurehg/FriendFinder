var friendsArray = require("../data/friends.json");


module.exports = function(expressapp) {
  
    expressapp.get("/api/friends", function(req, res) {
      res.json(friendsArray);
      
    });

    expressapp.post("/api/friends", function(req, res) {
        
      
          friendsArray.push(req.body);
          res.json(true);
       

        console.log(friendsArray);
    });
      

};