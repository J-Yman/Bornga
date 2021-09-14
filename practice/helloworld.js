const http = require("http");
const port = process.env.PORT || 3000;

// http.createServer 메서드는 HTTP 요청 (이벤트) 이 일어날 때마다 콜백함수를 호출한다.
const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello world");
});

// 
server.listen(port, () =>
	console.log(
		`server started on port ${port}; ` + "press Ctrl-C to teminate..."
	)
);
