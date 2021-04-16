// importera npm-paket
// konfigurera
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1340

// installera middleware
app.use( cors() )
app.use( express.json() )
// static
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.params)
	next()
})


// routes
app.get('/', (req, res) => {
	res.send('Welcome to exercise 4 server.')
})
app.get('/index.html', (req, res) => {
	res.sendFile('public/index.html')
})


// starta webbservern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`);
})
