const app = require("../bornga");

// 이 핸들러는 반드시 라우트 마지막에 있어야 한다
app.use((req, res) => res.status(404).render("404"));
