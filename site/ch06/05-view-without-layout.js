const app = require("../bornga");

// 레이아웃을 사용하지 않는 뷰 렌더링

// 다음 레이아웃은 해당하는 레이아웃 파일이 없으므로
// view/no-layout.handlebars에 필요한 HTML이 모두 있어야 한다.
app.get("no-layout", (req, res) => res.render("no-layout", { layout: null }));
