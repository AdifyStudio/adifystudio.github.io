document.addEventListener("DOMContentLoaded", function() {
    // Burada müzik listesini dinamik olarak oluşturabilirsiniz
    // Örnek olarak:
    const musicList = document.getElementById("music-list");

    const musics = [
        { title: "Şarkı 1", artist: "Sanatçı 1", url: "muzik1.mp3" },
        { title: "Şarkı 2", artist: "Sanatçı 2", url: "muzik2.mp3" },
        { title: "Şarkı 3", artist: "Sanatçı 3", url: "muzik3.mp3" }
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
