var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerText = `${Math.round(video.volume * 100)}%`;
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("log the new speed");
	video.playbackRate = 0.5;
});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("log the new speed");
	video.playbackRate = 2.0;
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("current location of the video");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
});

document.querySelector("#mute").addEventListener("click", function () {
	video.muted = !video.muted;
	this.innerText = video.muted ? "Unmute" : "Mute";
	console.log("Muted: " + video.muted);
});

document.querySelector("#slider").addEventListener("input", function () {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
});


document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});

