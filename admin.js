// Admin paneli başlangıcında müzik listesini görüntüle
function renderMusicList(musicArray) {
    const musicListContainer = document.getElementById("musicListContainer");
    musicListContainer.innerHTML = ""; // Önceki içeriği temizle

    musicArray.forEach((music, index) => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `
            <p>${music.name}</p>
        `;
        musicListContainer.appendChild(listItem);
    });
}

renderMusicList(musicList); // Başlangıçta tüm müzikleri görüntüle

// Müzik arama işlevi
document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase(); // Girilen metni küçük harfe dönüştür
    const filteredMusic = musicList.filter(function(music) {
        return music.name.toLowerCase().includes(searchTerm); // Aranan metni içeren müzikleri filtrele
    });
    renderMusicList(filteredMusic); // Filtrelenmiş müzik listesini görüntüle
});
