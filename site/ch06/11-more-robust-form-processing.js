const app = require("../bornga");

// 빈틈없는 폼 처리

app.post("/process-contact", (req, res) => {
	try {
		// 여기서 연락처를 데이터베이스나 파일 등의 장소에 보관해야 하지만
		// 일단은 오류만 시뮬레이트 한다
		if (req.body.simulateError) throw new Error("error saving contact!");
		console.log(`contact from ${req.body.name} <${req.body.email}`);
		res.format({
			"text/html": () => res.redirect(303, "/thank-you"),
			"application/json": () => res.json({ success: true }),
		});
	} catch (err) {
		// 저장에 문제가 발생했을 경우 여기서 처리한다
		console.error(
			`error processing contact from ${req.body.name} ` + `<${req.body.email}>`
		);
		res.format({
			"text/html": () => res.redirect(303, "/contact-error"),
			"application/json": () =>
				res.status(500).json({
					error: "error saving contact information",
				}),
		});
	}
});
