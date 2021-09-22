const app = require("../bornga");

app.get("/text", (req, res) => {
	res.type("text/plain");
	res.send("this is a test");
});
