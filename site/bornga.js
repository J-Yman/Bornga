const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

const fortunes = ["a cookie", "b cookie", "c cookie"];

app.engine(
	"handlebars",
	expressHandlebars({
		defaultLayout: "main",
	})
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("home"));

app.get("/about", (req, res) => {
	const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render("about", { fortune: randomFortune });
});

// custom 404 page
app.use((req, res) => {
	res.status(404);
	res.render("404");
});

//custome 500 page
app.use((err, req, rest, next) => {
	console.error(err);
	res.status(500);
	res.render("500");
});

app.listen(port, () =>
	console.log(
		`Express started on http://localhost:${port} ;` +
			"press Ctrl-C to terminate"
	)
);
