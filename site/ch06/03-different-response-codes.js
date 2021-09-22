const app = require("../bornga");

app.get("/error", (req, res) => {
	res.status(500).render("error");
});
