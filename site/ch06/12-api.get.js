const app = require("../bornga");

// JSON 만 반환하는 단순한 GET 엔드포인트

/* eslint-disable no-undef */
app.get("/api/tours", (req, res) => res.json(tours));
/* eslint-enable no-undef */
