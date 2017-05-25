var express =require("express");
var app = express();
var router= express.Router();
var importData = require("./import.js")

console.log(importData)

router.get("/", function(request, response){
	response.json({message: "Hello Bengaluru !!"})
})

router.get("/user", function(request, response){
	response.json({message : "This is user endpoint"})
})

app.use("/api", router)

var PORT = process.env.PORT || 1337;

app.listen(PORT, function(){
	console.log("Server Listening at PORT !!" + PORT)
})