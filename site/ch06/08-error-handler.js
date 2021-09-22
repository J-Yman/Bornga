const app = require("../bornga");

// 이 핸들러는 반드시 라우터 마지막에 있어야 한다
// next 함수를 사용하지 않더라도 매개변수로 써야만
// 익스프레스가 이 핸들러를 오류 핸들러로 인식한다.

app.use((err, req, res, next) => {
	console.error("** SERVER ERROR: " + err.message);
	res
		.status(500)
		.render("08-error", { message: "You shouldn't have clicked that!" });
});
