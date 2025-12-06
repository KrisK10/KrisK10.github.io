const intro = [
	{ src: "videos/wakingUp.mp4", caption: "Good morning!" }
];

const random1 = [
	{ src: "videos/brushingHair.mp4", caption: "Hygiene" },
	{ src: "videos/brushingTeeth.mp4", caption: "Hygiene" },
	{ src: "videos/deodorant.mp4", caption: "Hygiene" },
	{ src: "videos/washingFace.mp4", caption: "Hygiene" }
];

const random2 = [
	{ src: "videos/milk.mp4", caption: "Breakfast" },
	{ src: "videos/pringles.mp4", caption: "Breakfast" },
	{ src: "videos/mandms.mp4", caption: "Breakfast" },
	{ src: "videos/frostedFlakes.mp4", caption: "Breakfast" }
];

const random3 = [
	{ src: "videos/canvas.mp4", caption: "Work" },
	{ src: "videos/email.mp4", caption: "Work" },
	{ src: "videos/essay.mp4", caption: "Work" },
	{ src: "videos/sims.mp4", caption: "Work" }
];

const random4 = [
	{ src: "videos/goingOut.mp4", caption: "Out on the town" },
	{ src: "videos/stayingIn.mp4", caption: "Lazy day" }
];

const conclusion = [
	{ src: "videos/goingToSleep.mp4", caption: "Good night!" }
];

const musicTracks = [
	"sounds/music01.mp3",
	"sounds/music02.mp3",
	"sounds/music03.mp3"
];

const generateBtn = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText");
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random video:", array[randomIndex]);
	return array[randomIndex];
}

let playlist = [];
let currentIndex = 0;
	
function buildVideo() {
	titleOverlay.classList.add("playing");
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";
	
	if (bgMusic) {
		bgMusic.src = picker(musicTracks); // random music pick
		bgMusic.currentTime = 0;
		bgMusic.volume = 1;
		bgMusic.play().catch(err => {
			console.warn("Music play interrupted:", err);
		});
	}
	
	playlist = [
		picker(intro),
		picker(random1),
		picker(random2),
		picker(random3),
		picker(random4),
		picker(conclusion)
		];
	
	currentIndex = 0;
	
	playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
	});
}

function fadeOutMusic() {
	if (!bgMusic) return;
	const fadeDuration = 3000; // total fade time in ms
	const steps = 30; // number of volume steps
	const stepTime = fadeDuration / steps;
	const volumeStep = bgMusic.volume / steps;
	const fadeInterval = setInterval(() => {
		// Reduce volume but never go below 0
		bgMusic.volume = Math.max(0, bgMusic.volume - volumeStep);
		if (bgMusic.volume <= 0.01) {
			bgMusic.volume = 0;
			bgMusic.pause();
			clearInterval(fadeInterval);
		}
	}, stepTime);
}

player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
		console.log("All three parts finished.");
		fadeOutMusic();
		replayBtn.style.display = "block";
	}
});

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);