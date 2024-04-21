// Müzik listesi
const musicList = [
    { name: "Song 1", src: "music/song1.mp3" },
    { name: "Song 2", src: "music/song2.mp3" },
    { name: "Song 3", src: "music/song3.mp3" },
    { name: "Song 4", src: "music/song4.mp3" },
    { name: "Song 5", src: "music/song5.mp3" }
];

// Müzik listesini oluşturma
const musicListContainer = document.getElementById("musicList");
musicList.forEach((music, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = music.name;
    listItem.dataset.index = index;
    listItem.addEventListener("click", () => playMusic(index));
    musicListContainer.appendChild(listItem);
});

// Müzik çalar
const musicPlayer = document.getElementById("musicPlayer");

function playMusic(index) {
    const selectedMusic = musicList[index];
    musicPlayer.src = selectedMusic.src;
    musicPlayer.play();
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
        listItem.textContent = music.name;
        listItem.dataset.index = index;
        listItem.addEventListener("click", () => playMusic(index));
        musicListContainer.appendChild(listItem);
    });
}
