const app = require("../bornga");

// 200 이외의 응답 코드
app.get("/error", (req, res) => {
	res.status(500).render("error");
});
