const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 1338
const staticFolder = path.join(__dirname, 'public')


// Middleware
// Logger - skriv ut info om inkommande request
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.params);
	next()
})

app.use( express.json() )
app.use( cors() )
app.use( express.static(staticFolder) )



// Routes
app.get('/', (req, res) => {
	res.send('Welcome to the exercies project')
})

app.get('/simulate-error', (req, res) => {
	let x
	try {
		x.name = 'Hanna'
		res.send(x.name)
	} catch(error) {
		console.log('Ett fel inträffade!' + error.message);
		res.status(500).send(error.message)
	}
})
// En route för varje fil - fungerar, men opraktiskt!
// app.get('/index.html', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public/index.html'))
// })
// app.get('/style.css', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public/style.css'))
// })
// app.get('/script.js', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public/script.js'))
// })



// Starta servern
app.listen(PORT, () => {
	console.log('Server listening on port ' + PORT);
})
