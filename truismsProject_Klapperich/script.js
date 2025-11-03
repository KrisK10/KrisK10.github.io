const video = document.getElementById('videoPlayer');
const textBox = document.getElementById('text-box');

let videoSources = ['videos/video01.mp4', 'videos/video02.mp4', 'videos/video03.mp4', 'videos/video04.mp4', 'videos/video05.mp4'];
let currentVideoIndex = 0;
let videoTimes = [0, 0, 0, 0, 0]; // Store current times for both videos
let firstClick = true;   // Track if it's the first click

textBox.addEventListener('click', () => {
    // On first click: unmute and play sound
    if (firstClick) {
        video.muted = false;
        firstClick = false;
    }
	
	function getRandomIndex() {
let newIndex;
do {
newIndex = Math.floor(Math.random() *
videoSources.length);
} while (newIndex === currentVideoIndex);
return newIndex;
}

    // Save current playback time
    videoTimes[currentVideoIndex] = video.currentTime;

    // Switch to the other video
   currentVideoIndex = getRandomIndex();

    // Update the video source
    video.src = videoSources[currentVideoIndex];

    // Wait for the new video to load before resuming at the saved time
    video.addEventListener('loadedmetadata', () => {
        video.currentTime = videoTimes[currentVideoIndex];
        video.muted = false; // Ensure sound stays on after first click
        video.play();
    }, { once: true });
});
