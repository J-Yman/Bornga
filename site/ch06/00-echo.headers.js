const app = require("../bornga");

// 브라우저가 어떤 정보를 보내는지 확인
app.get("/headers", (req, res) => {
	res.type("text/plain");
	const headers = Object.entries(req.headers).map(
		([key, value]) => `${key} : ${value}`
	);
	res.send(headers.join("\n"));
});
