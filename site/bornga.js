const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.type("text/plain");
	res.send("welcome to bornga");
});

app.get("/about", (req, res) => {
	res.type("text/plain");
	res.send("about bornga");
});

// custom 404 page
app.use((req, res) => {
	res.type("text/plain");
	res.status(404);
	res.send("404 - Not Found");
});

//custome 500 page
app.use((err, req, rest, next) => {
	console.error(err);
	res.type("text/plain");
	res.status(500);
	res.send("500 - Server Eror");
});

app.listen(port, () =>
	console.log(
		`Express started on http://localhost:${port} ;` +
			"press Ctrl-C to terminate"
	)
);
