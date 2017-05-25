var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();
var fs = require("fs");
var path = require("path");

var filePath  = path.join(__dirname, "sample23.txt")
//var filePath = __dirname + "/sample.txt"


emitter.on("start_reading", function(filePath){
	console.log("Start Reading the file ..!!")

	fs.readFile(filePath, "utf-8",function(err, data){
		if(err){
			emitter.emit("error", err)
			
		}else
		{
			emitter.emit("print_content", data)
		}
	})
})

emitter.on("print_content", function(data){
	console.log(data)
	emitter.emit("done", "Successfully done reading the file !!")
})

emitter.on("error", function(message){
	console.log("There is an error !!!")
	console.log(" Error Details : " +message);
	console.log("Couldn't read file succesfully")
})

emitter.on("done", function(message){
	console.log(message)
})

emitter.emit("start_reading", filePath);
