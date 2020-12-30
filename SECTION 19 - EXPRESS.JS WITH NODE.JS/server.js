/**jshint esversion: 6 */

//require express first.
const express = require("express");
const app = express();

/**get(location, function) 
 * / -> root of the project. Especify the Route.
 * parameters (request, response)*/
app.get("/", function(req, res){
    res.send("<h2>Hello World!</h2>");
})
//Listen in a specific port.
app.listen(3000, function(){
    console.log("Server Started on Port 3000")
});