const app = require("../bornga");

// 업데이트에 사용하는 PUT 엔드포인트

app.put("/api/tour/:id", (req, res) => {
	const p = tours.find(p => p.id === parseInt(req.params.id));
	if (!p) return res.status(404).json({ error: "No such tour exists" });
	if (req.body.name) p.name = req.body.name;
	if (req.body.price) p.price = req.body.price;
	req.json({ success: true });
});
