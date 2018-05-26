const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const userRoutes = require('./routes/userRoutes')
const {mongoose} = require('./db/mongo-config.js')
const app = express();
const cors = require('cors')

app.use(cors());

app.use(morgan('combined'))
app.use(bodyParser.json({type:'*/*'}))

app.use('/',userRoutes)

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req,res) => {
		res.sendFile(path.resolve(__dirname, 'client' , 'build','index.html'));
	})
}

const port = process.env.PORT || 5000
const server = http.createServer(app)

server.listen(5000,() => {
	console.log("Server listening on port 5000")
});