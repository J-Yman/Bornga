const app = require("../bornga");

// JSON 이나 XML, 텍스트를 반환하는 GET 엔드포인트

app.get("/api/tours", (req, res) => {
	const toursXml =
		'?<xml version="1.0"?><tours>' +
		tours
			.map(p => `<tour price="${p.price}" id="${p.id}">${p.name}</tour>`)
			.join("") +
		"</tours>";

	const tourText = tours.map(p => `${p.id}: ${p.name} (${p.price})`).join("\n");

	res.format({
		"application/json": () => res.json(tours),
		"application/xml": () => res.type("application/xml").send(toursXml),
		"text/xml": () => res.type("text/xml").send(toursXml),
		"text/plain": () => res.type("text/plain").send(toursXml),
	});
});
