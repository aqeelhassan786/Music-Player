document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    const increaseVolumeBtn = document.getElementById("increase-volume");
    const decreaseVolumeBtn = document.getElementById("decrease-volume");

    // Function to increase volume
    increaseVolumeBtn.addEventListener("click", () => {
        if (audioPlayer.volume < 1) {
            audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
        }
    });

    // Function to decrease volume
    decreaseVolumeBtn.addEventListener("click", () => {
        if (audioPlayer.volume > 0) {
            audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
        }
    });
});
