// importera npm-paket
// konfigurera
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const PORT = 1340

// installera middleware
app.use( cors() )
app.use( express.json() )

// Egen middleware: logger
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.params)
	next()
})

app.use( express.static(path.join(__dirname, 'public')) )


// routes
app.get('/', (req, res) => {
	res.send('Welcome to exercise 4 server.')
})
// app.get('/index.html', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public/index.html'))
// })
// app.get('/style.css', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public/style.css'))
// })
// app.get('/script.js', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'public/script.js'))
// })


// starta webbservern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`);
})
