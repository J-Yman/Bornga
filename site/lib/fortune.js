const fortunes = ["a cookie", "b cookie", "c cookie"];

// getFortune 함수는 공개하지만 fortunes 는 공개하지 않았다. => 캡슐화
exports.getFortune = () => {
	const idx = Math.floor(Math.random() * fortunes.length);
	return fortunes[idx];
};
