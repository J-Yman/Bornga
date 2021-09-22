const app = require("../bornga");

// 콘텐츠 렌더링 기본 사용법
app.get("/about", (req, res) => {
	res.render("about");
});
