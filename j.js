const musicList = [
    { name: "Silence.mp3", src: "music/Silence.mp3" },
    { name: "Before_Death.mp3", src: "music/Before_Death.mp3" },
    { name: "Smoky_Mountain.mp3", src: "music/Smoky_Mountain.mp3" },
    { name: "Quivering_Radiance.mp3", src: "music/Quivering_Radiance.mp3" },
    { name: "March_of_Honor.mp3", src: "music/March_of_Honor.mp3" },
    { name: "Resurgence_March.mp3", src: "music/Resurgence_March.mp3" },
    { name: "Faith_March.mp3", src: "music/Faith_March.mp3" },
    { name: "Noble_Stance.mp3", src: "music/Noble_Stance.mp3" },
    { name: "Laughing_Guitar.mp3", src: "Laughing_Guitar.mp3" },
    { name: "Dance_of_Birds.mp3", src: "music/Dance_of_Birds.mp3" },
    { name: "Joyful Acoustics.mp3", src: "music/Joyful Acoustics.mp3" },
    { name: "The_Morning_Sun.mp3", src: "music/The_Morning_Sun.mp3" },
    { name: "Celestial_Grace.mp3", src: "music/Celestial_Grace.mp3" },
    { name: "Deep_breath.mp3", src: "music/Deep_breath.mp3" },
    { name: "Cartoon1.mp3", src: "music/Cartoon1.mp3" },
    { name: "Cartoon2.mp3", src: "music/Cartoon2.mp3" },
    { name: "Cartoon3.mp3", src: "music/Cartoon3.mp3" },
    { name: "Escape_From_The Airport.mp3", src: "music/Escape_From_The Airport.mp3" }
];

const musicListContainer = document.getElementById("musicList");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const currentMusicName = document.getElementById("currentMusicName");

let selectedListItem = null;
let audioPlayer = null;
let currentMusicIndex = 0;

musicList.forEach((music, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span class="music-name">${music.name}</span>
        <a href="${music.src}" download>
            <img src="images/download.png" alt="Download" class="download-icon">
        </a>
    `;
    listItem.dataset.index = index;
    listItem.addEventListener("click", () => toggleMusic(listItem));
    musicListContainer.appendChild(listItem);
});

playButton.addEventListener("click", () => {
    if (audioPlayer !== null) {
        audioPlayer.play();
        selectedListItem.classList.add("selected");
    }
});

pauseButton.addEventListener("click", () => {
    if (audioPlayer !== null) {
        audioPlayer.pause();
    }
});

stopButton.addEventListener("click", () => {
    if (audioPlayer !== null) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        selectedListItem.classList.remove("selected");
    }
});

nextButton.addEventListener("click", () => {
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
    playSelectedMusic(currentMusicIndex);
    updateSelectedListItem();
});

prevButton.addEventListener("click", () => {
    currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
    playSelectedMusic(currentMusicIndex);
    updateSelectedListItem();
});

function toggleMusic(item) {
    const index = parseInt(item.dataset.index);
    if (selectedListItem !== item) {
        if (selectedListItem !== null) {
            selectedListItem.classList.remove("selected");
            stopMusic();
        }
        selectedListItem = item;
        selectedListItem.classList.add("selected");
        playSelectedMusic(index);
    } else {
        selectedListItem.classList.remove("selected");
        selectedListItem = null;
        stopMusic();
    }
}

function playSelectedMusic(index) {
    currentMusicIndex = index;
    const selectedMusic = musicList[index];
    if (audioPlayer === null) {
        audioPlayer = new Audio(selectedMusic.src);
        audioPlayer.play();
        currentMusicName.textContent = selectedMusic.name;
        selectedListItem.classList.add("selected");
    } else {
        audioPlayer.pause();
        audioPlayer = new Audio(selectedMusic.src);
        audioPlayer.play();
        currentMusicName.textContent = selectedMusic.name;
        selectedListItem.classList.add("selected");
    }
}

function stopMusic() {
    if (audioPlayer !== null) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
}

function updateSelectedListItem() {
    const allListItems = document.querySelectorAll("#musicList li");
    allListItems.forEach(item => item.classList.remove("selected"));
    const selectedListItem = document.querySelector(`#musicList li[data-index="${currentMusicIndex}"]`);
    selectedListItem.classList.add("selected");
}

pauseButton.addEventListener("click", () => { // Duraklatma butonu işlevi
    if (audioPlayer !== null) {
        audioPlayer.pause();
    }
});
