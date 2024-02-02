document.addEventListener('DOMContentLoaded', function () {
    // Get the video element
    var video = document.querySelector('video');

    // Get the play/pause button
    var playPauseButton = document.getElementById('play-pause');

    // Add click event listener to the play/pause button
    playPauseButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseButton.innerText = 'Pause';
        } else {
            video.pause();
            playPauseButton.innerText = 'Play';
        }
    });

    // Add event listener to update play/pause button based on video state
    video.addEventListener('play', function () {
        playPauseButton.innerText = 'Pause';
    });

    video.addEventListener('pause', function () {
        playPauseButton.innerText = 'Play';
    });
});
