var EventEmitter = require("events").EventEmitter;

var emitter = new EventEmitter();

emitter.on("radiation", function(ray){
	console.log(ray);
})

setInterval(function(){
	emitter.emit("radiation", "GAMMA")
},1000)
