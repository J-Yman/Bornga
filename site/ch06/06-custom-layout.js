const app = require("../bornga");

// 커스텀 레이아웃을 사용한 뷰 렌더링

// 레이아웃 파일 views/layouts/custom.handlebars 를 사용한다.
app.get("/custom-layout", (req, res) => {
	res.render("custom-layout", { layout: "custom" });
});
