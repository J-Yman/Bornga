const fortune = require("./lib/fortune");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;
const handlers = requuire("./lib/handlers");

app.engine(
	"handlebars",
	expressHandlebars({
		defaultLayout: "main",
	})
);
app.set("view engine", "handlebars");

app.get("/", handlers.home);

app.get("/about", handlers.about);

// custom 404 page
app.use((req, res) => handlers.notFound);

//custome 500 page
app.use(handlers.serverError);

app.listen(port, () =>
	console.log(
		`Express started on http://localhost:${port} ;` +
			"press Ctrl-C to terminate"
	)
);
