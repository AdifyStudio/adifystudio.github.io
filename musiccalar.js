// Müzik listesi
const musicList = [
    { name: "Before_Death", src: "music/Before_Death.mp3" },
    { name: "Dance_of_Birds", src: "music/Dance_of_Birds.mp3" },
    { name: "Faith_March", src: "music/Faith_March.mp3" },
    { name: "Joyful Acoustics", src: "music/Joyful Acoustics.mp3" },
     { name: "Laughing_Guitar", src: "music/Laughing_Guitar.mp3" },
      { name: "March_of_Honor", src: "music/March_of_Honor.mp3" },
      { name: "Noble_Stance", src: "music/Noble_Stance.mp3" },
        { name: "Optimistic_Melody", src: "music/Optimistic_Melody.mp3" },
	  { name: "Silence", src: "music/Silence.mp3" },
 { name: "Smoky_Mountain", src: "music/Smoky_Mountain.mp3" },
	 { name: "The_Morning_Sun", src: "music/The_Morning_Sun.mp3" },
    { name: "Quivering_Radiance", src: "music/Quivering_Radiance.mp3" }
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
