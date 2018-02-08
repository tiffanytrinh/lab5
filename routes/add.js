var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log("addFriend called");
	var name = req.query.name;
	var description = req.query.description;

	var newFriend = {
		name: name,
		description: description,
		imageURL: "http://lorempixel.com/400/400/people"
	}

	data.friends.push(newFriend);

	console.log(name);
	console.log(description);
	res.redirect('/');
 }