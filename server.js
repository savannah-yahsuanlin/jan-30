const http = require('http')

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.write(`
			<html>
				<body>
					<h1>Home</h1>
				</body>
			</html>
		`)
	}
	if(req.url === '/about') {
		res.write(`
			<html>
				<body>
					<h1>About</h1>
				</body>
			</html>
		`)
	} 
	if(req.url === '/contact') {
		res.write(`
			<html>
				<body>
					<h1>Contact</h1>
				</body>
			</html>
		`)
	}

	res.end()
})

const port = process.env.Port || 3000


server.listen(port, ()=> console.log(`listening on Port ${port}`))