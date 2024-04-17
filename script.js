document.addEventListener("DOMContentLoaded", function() {
    const musicList = document.getElementById("music-list");

    const musics = [
        { title: "Midnight Escape", artist: "0001", url: "musics/0001.mp3" },
        // İsteğe bağlı olarak daha fazla müzik ekleyebilirsiniz
    ];

    musics.forEach(function(music) {
        // Aynı URL'ye sahip müziğin zaten eklenip eklenmediğini kontrol et
        if (!musicList.querySelector(`li audio source[src="${music.url}"]`)) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${music.title}</strong> - ${music.artist}`;
            const audio = document.createElement("audio");
            audio.controls = true;
            audio.innerHTML = `<source src="${music.url}" type="audio/mpeg">Tarayıcınız bu sesi desteklemiyor.`;
            li.appendChild(audio);
            musicList.appendChild(li);
        }
    });
});
