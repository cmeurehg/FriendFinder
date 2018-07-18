var path = require("path");

module.exports = function(routeapp) {
   
  
    routeapp.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    
    routeapp.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };

  //Look into express routers!  To export routers instead of functions.