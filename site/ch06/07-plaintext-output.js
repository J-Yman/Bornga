const app = require("../bornga");

// 평문 렌더링

app.get("/text", (req, res) => {
	res.type("text/plain");
	res.send("this is a test");
});
