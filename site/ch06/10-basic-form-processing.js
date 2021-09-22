const app = require("../bornga");

// 기본적인 폼 처리

app.post("/process-contact", (req, res) => {
	console.log(`received contact from ${req.body.name} <$${req.body.email}`);
	res.redirect(303, "10-thank-you");
});
