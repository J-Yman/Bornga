const app = require("../bornga");

app.get("/about", (req, res) => {
	res.render("about");
});
