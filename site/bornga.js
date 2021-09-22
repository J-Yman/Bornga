const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;
const handlers = require("./lib/handlers");

app.engine(
	"handlebars",
	expressHandlebars({
		defaultLayout: "main",
	})
);

app.set("view engine", "handlebars");
app.set("view cache", true);

app.get("/", handlers.home);

app.get("/section-test", handlers.sectionTest);

app.get("/about", handlers.about);

app.get("/headers", (req, res) => {
	res.type("text/plain");
	const headers = Object.entries(req.headers).map(
		([key, value]) => `${key} : ${value}`
	);
	res.send(headers.join("\n"));
});

// custom 404 page
app.use(handlers.notFound);

//custome 500 page
app.use(handlers.serverError);

if (require.main === module) {
	app.listen(port, () =>
		console.log(
			`Express started on http://localhost:${port} ;` +
				"press Ctrl-C to terminate"
		)
	);
} else {
	module.exports = app;
}
