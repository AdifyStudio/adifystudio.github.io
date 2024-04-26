const musicList = [
    { name: "Silence.mp3", src: "music/Silence.mp3", youtubeLink: "https://www.youtube.com/watch?v=gFouYIoKceA" },
    { name: "Long_Johns.mp3", src: "music/Long_Johns.mp3", youtubeLink: "https://www.youtube.com/watch?v=C9pqe-PD-A0" },
   
    { name: "Before_Death.mp3", src: "music/Before_Death.mp3", youtubeLink: "https://www.youtube.com/watch?v=cVcwG6Lekf8" },
    { name: "Smoky_Mountain.mp3", src: "music/Smoky_Mountain.mp3", youtubeLink: "https://www.youtube.com/watch?v=Jws_ucXYuJ4" },
    { name: "Quivering_Radiance.mp3", src: "music/Quivering_Radiance.mp3", youtubeLink: "https://www.youtube.com/watch?v=7M2OXShodwg" },
    { name: "March_of_Honor.mp3", src: "music/March_of_Honor.mp3", youtubeLink: "https://www.youtube.com/watch?v=eHt9E98yrMk" },
    { name: "Resurgence_March.mp3", src: "music/Resurgence_March.mp3", youtubeLink: "https://www.youtube.com/watch?v=yFFggf9yCoE" },
    { name: "Faith_March.mp3", src: "music/Faith_March.mp3", youtubeLink: "https://www.youtube.com/watch?v=tV7x4EzCkmM" },
    { name: "Noble_Stance.mp3", src: "music/Noble_Stance.mp3", youtubeLink: "https://www.youtube.com/watch?v=XaDfpiFsmiI" },
    { name: "Laughing_Guitar.mp3", src: "music/Laughing_Guitar.mp3", youtubeLink: "https://www.youtube.com/watch?v=p95t_TfCmbU" },
    { name: "Dance_of_Birds.mp3", src: "music/Dance_of_Birds.mp3", youtubeLink: "https://www.youtube.com/watch?v=NyfN6SpdciI" },
    { name: "Joyful Acoustics.mp3", src: "music/Joyful Acoustics.mp3", youtubeLink: "https://www.youtube.com/watch?v=eztHUFzlY8c" },
    { name: "The_Morning_Sun.mp3", src: "music/The_Morning_Sun.mp3", youtubeLink: "https://www.youtube.com/watch?v=5SBS49I-AAc" },
    { name: "Celestial_Grace.mp3", src: "music/Celestial_Grace.mp3", youtubeLink: "https://www.youtube.com/watch?v=BHydwOlVFII" },
    { name: "Deep_breath.mp3", src: "music/Deep_breath.mp3", youtubeLink: "https://www.youtube.com/watch?v=evSbqxxbgUc" },
    { name: "Cartoon1.mp3", src: "music/Cartoon1.mp3", youtubeLink: "https://www.youtube.com/watch?v=csDCoC484H4" },
    { name: "Cartoon2.mp3", src: "music/Cartoon2.mp3", youtubeLink: "https://www.youtube.com/watch?v=RoR88KQvgLU" },
    { name: "Cartoon3.mp3", src: "music/Cartoon3.mp3", youtubeLink: "https://www.youtube.com/watch?v=-2hxztIcI1o" },
    { name: "Money_On_The_Ground.mp3", src: "music/Money_On_The_Ground.mp3", youtubeLink: "https://www.youtube.com/watch?v=V5dunYXFJv0" },
    { name: "Escape_From_The Airport.mp3", src: "music/Escape_From_The Airport.mp3", youtubeLink: "https://www.youtube.com/watch?v=B-dk1JCrJJo" }
];

const musicListContainer = document.getElementById("musicList");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const currentMusicName = document.getElementById("currentMusicName");
const searchInput = document.getElementById("searchInput");

let selectedListItem = null;
let audioPlayer = null;
let currentMusicIndex = 0;

function initializeMusicList() {
    musicList.forEach((music, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="youtube-icon">
                <a href="${music.youtubeLink}" target="_blank">
                    <img src="images/youtube.png" alt="YouTube" class="download-icon">
                </a>
            </span>
            <a href="${music.src}" download>
                <img src="images/download.png" alt="Download" class="download-icon">
            </a>
            <span class="music-name">${music.name}</span>
        `;
        listItem.dataset.index = index;
        listItem.addEventListener("click", () => toggleMusic(listItem));
        musicListContainer.appendChild(listItem);
    });
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

function updateSelectedListItem() {
    const allListItems = document.querySelectorAll("#musicList li");
    allListItems.forEach(item => item.classList.remove("selected"));
    const selectedListItem = document.querySelector(`#musicList li[data-index="${currentMusicIndex}"]`);
    selectedListItem.classList.add("selected");
}

function searchMusic() {
    const input = searchInput.value.toLowerCase();
    const filteredMusicList = musicList.filter(music => music.name.toLowerCase().includes(input));
    displayFilteredMusicList(filteredMusicList);
}

function displayFilteredMusicList(filteredMusicList) {
    musicListContainer.innerHTML = "";
    filteredMusicList.forEach((music, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="youtube-icon">
                <a href="${music.youtubeLink}" target="_blank">
                    <img src="images/youtube.png" alt="YouTube" class="download-icon">
                </a>
            </span>
            <a href="${music.src}" download>
                <img src="images/download.png" alt="Download" class="download-icon">
            </a>
            <span class="music-name">${music.name}</span>
        `;
        listItem.dataset.index = index;
        listItem.addEventListener("click", () => toggleMusic(listItem));
        musicListContainer.appendChild(listItem);
    });
}

initializeMusicList(); // İlk başta müzik listesini oluştur

searchInput.addEventListener("input", searchMusic);
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
