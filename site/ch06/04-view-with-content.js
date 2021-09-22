const app = require("../bornga");

// 뷰에 쿼리스트링, 쿠키, 세션 값 등의 콘텍스트 전달
app.get("/gretting", (req, res) => {
	res.render("greeting", {
		message: "Hello esteemed programmer!",
		style: req.query.style,
		userid: req.cookies.userid,
		username: req.session.username,
	});
});
