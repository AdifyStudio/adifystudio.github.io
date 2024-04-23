// Müzik listesi
const musicList = [
   
 
 

     { name: "Before_Death - Neo-Classical Orchestra", src: "music/Before_Death.mp3" },
      { name: "Quivering_Radiance - Neo-Classical Orchestra", src: "music/Quivering_Radiance.mp3" },
      { name: "Silence - Neo-Classical Orchestra", src: "music/Silence.mp3" },
        { name: "Smoky_Mountain - Neo-Classical Orchestra", src: "music/Smoky_Mountain.mp3" },
 
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
