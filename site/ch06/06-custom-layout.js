const app = require("../bornga");

// 레이아웃 파일 views/layouts/custom.handlebars 를 사용한다.
app.get("/custom-layout", (req, res) => {
	res.render("custom-layout", { layout: "custom" });
});
