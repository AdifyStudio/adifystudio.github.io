// Müzik listesi
const musicList = [
    { name: "Before_Death.mp3", src: "music/Before_Death.mp3" },
    { name: "Dance_of_Birds.mp3", src: "music/Dance_of_Birds.mp3" },
    { name: "Faith_March.mp3", src: "music/Faith_March.mp3" },
    { name: "Joyful Acoustics.mp3", src: "music/Joyful Acoustics.mp3" },
    { name: "Laughing_Guitar.mp3", src: "music/Laughing_Guitar.mp3" },
    { name: "March_of_Honor.mp3", src: "music/March_of_Honor.mp3" },
    { name: "Noble_Stance.mp3", src: "music/Noble_Stance.mp3" },
  { name: "Noble_Stance.mp3", src: "music/Noble_Stance.mp3" },
    { name: "Celestial_Grace.mp3", src: "music/Silence.mp3" },
    { name: "Smoky_Mountain.mp3", src: "music/Smoky_Mountain.mp3" },
    { name: "The_Morning_Sun.mp3", src: "music/The_Morning_Sun.mp3" },
    { name: "Quivering_Radiance.mp3", src: "music/Quivering_Radiance.mp3" }
];

// Müzik listesini oluşturma
const musicListContainer = document.getElementById("musicList");
let selectedListItem = null; // Seçili liste elemanını saklamak için değişken
let audioPlayer = null; // Oynatıcı nesnesini saklamak için değişken

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

function toggleMusic(item) {
    if (selectedListItem !== item) {
        // Yeni bir liste elemanına tıklandığında

        // Eğer önceki seçim varsa kaldır
        if (selectedListItem !== null) {
            selectedListItem.classList.remove("selected");
            // Müziği durdur
            stopMusic();
        }

        // Yeni elemanı seç ve stilini ayarla
        selectedListItem = item;
        selectedListItem.classList.add("selected");

        // Müziği çal
        playMusic(selectedListItem.dataset.index);
    } else {
        // Aynı liste elemanına tekrar tıklandığında

        // Seçimi kaldır
        selectedListItem.classList.remove("selected");
        selectedListItem = null;

        // Müziği durdur
        stopMusic();
    }
}

function playMusic(index) {
    // Eğer oynatıcı nesnesi yoksa oluştur
    if (audioPlayer === null) {
        audioPlayer = new Audio();
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    const selectedMusic = musicList[index];
    audioPlayer.src = selectedMusic.src;
    audioPlayer.play();
}

function stopMusic() {
    if (audioPlayer !== null) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
}

// Arama işlevselliği
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMusic = musicList.filter(music => music.name.toLowerCase().includes(searchTerm));
    renderMusicList(filteredMusic);
});

function renderMusicList(musicArray) {
    musicListContainer.innerHTML = "";
    musicArray.forEach((music, index) => {
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
}
