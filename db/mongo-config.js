var mongoose = require('mongoose')
const {MONGODB_URI} = require('../config/keys')
mongoose.Promise= global.Promise;

console.log(MONGODB_URI)
mongoose.connect(MONGODB_URI)
		.then((response)=> {
				console.log("Successfully connected to DB")})
		.catch((error) => {
			console.log("Cannot connect to the database with error: ",error)
		});
		
module.exports={
	mongoose
}