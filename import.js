//var string ="Hello i am from Import";
var wish = function(name){
	return "Hello goodMorning "+name;
}

var displayMessage = function(){
	return "Thi is display Message funtion"
}

// module.exports = {
// 	wish : wish,
// 	display : displayMessage
// };

module.exports.display = function(){
	return "This is my  new function"
}