function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

const playAudio = (path = 'audio.mp3') => new Audio(path).play()
playAudio('path')


function groove() {
	console.log("fuck");
	window.moveTo(randomRange(0, screen.width), randomRange(0, screen.height));
}

window.onload = () => {
	setInterval(groove, 500);
	return true;
}
