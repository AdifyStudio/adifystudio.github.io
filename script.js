document.addEventListener("DOMContentLoaded", function() {
    // Burada müzik listesini dinamik olarak oluşturabilirsiniz
    // Örnek olarak:
    const musicList = document.getElementById("music-list");

    const musics = [
        { title: "Midnight Escape", artist: "Code = 0001", url: "0001.mp3" },
   
    ];

    musics.forEach(function(music) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${music.title}</strong> - ${music.artist}`;
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.innerHTML = `<source src="${music.url}" type="audio/mpeg">Tarayıcınız bu sesi desteklemiyor.`;
        li.appendChild(audio);
        musicList.appendChild(li);
    });
});
