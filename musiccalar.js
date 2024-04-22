// Müzik listesi
const musicList = [
    { name: "Beneath the Stars - İndie-Pop", src: "music/Beneath_the_Stars.mp3" },
    { name: "Dreamer's Solace - indie-Pop", src: "music/Dreamers_Solace.mp3" },
    { name: "Room Of Dreams - indie-pop ", src: "music/Room_Of_Dreams.mp3" },
    { name: "Echoes of Solitude - İndie-Pop", src: "music/Echoes_of_Solitude.mp3" },
    { name: "Starlit Revire - İndie-Pop", src: "music/Starlit_Revire.mp3" }
];

// Müzik listesini oluşturma
const musicListContainer = document.getElementById("musicList");
musicList.forEach((music, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span class="music-name">${music.name}</span>
        <a href="${music.src}" download>
            <img src="images/download.png" alt="Download" class="download-icon">
        </a>
    `;
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
        listItem.innerHTML = `
            <span class="music-name">${music.name}</span>
            <a href="${music.src}" download>
                <img src="images/download.png" alt="Download" class="download-icon">
            </a>
        `;
        listItem.dataset.index = index;
        listItem.addEventListener("click", () => playMusic(index));
        musicListContainer.appendChild(listItem);
    });
}
