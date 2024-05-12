const playlist = document.getElementById('playlist');
const audioPlayer = document.getElementById('audio-player');
const currentSongText = document.getElementById('current-song');
const currentSongImageContainer = document.getElementById('current-song-image');
const currentSongImageContainer2 = document.getElementById('current-song-image2');
const currentSongImageContainer3 = document.getElementById('current-song-image3');
const text2 = document.getElementById('text2');
const dateText = document.getElementById('date-text');

const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeBtn = document.getElementById('volume-btn');

let currentSongIndex = 0;
const songs = [
    { 
        src: '/music/lofi/Blue_Dream.mp3', 
        name: 'Blue Dream - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/01.jfif', 
        largeImage: '/images/kategori/500/01.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/Vz5NksR891E', ]  
    },
    { 
        src: '/music/lofi/Endless_Stars.mp3', 
        name: 'Endless Stars - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/02.jpg', 
        largeImage: '/images/kategori/500/02.jpg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText:'/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/8NRJtSDmSqo', ]  
    },
    { 
        src: '/music/lofi/Fairytale.mp3', 
        name: 'Fairytale - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/03.jpg', 
        largeImage: '/images/kategori/500/03.jpg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/h0ewS2hj3ZQ', ]  
    },
    { 
        src: '/music/lofi/Forgotten.mp3', 
        name: 'Forgotten - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/04.jpg', 
        largeImage: '/images/kategori/500/04.jpg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/yVLeMC6jOXA', ]  
    },
    { 
        src: '/music/lofi/Invisible.mp3', 
        name: 'Invisible - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/05.jpg', 
        largeImage: '/images/kategori/500/05.jpg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/RjEPhef3QJA', ]   
    },
    { 
        src: '/music/lofi/Memories.mp3', 
        name: 'Memories - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/06.jpg', 
        largeImage: '/images/kategori/500/06.jpg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/CPKIJLZkiQY', ]  
    },
    { 
        src: '/music/lofi/Shadow.mp3', 
        name: 'Shadow - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/07.jpg', 
        largeImage: '/images/kategori/500/07.jpg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/HcqNijeA5-Y', ]  
    },
    { 
        src: '/music/lofi/Silence.mp3', 
        name: 'Silence - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/08.jpg', 
        largeImage: '/images/kategori/500/08.jpg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/VxErNOzbwhY', ]  
    },
    { 
        src: '/music/lofi/Sky_Tale.mp3', 
        name: 'Sky Tale - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/09.jpeg', 
        largeImage: '/images/kategori/500/09.jpeg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/MLOMtXomsD4', ]  
    },
    { 
        src: '/music/lofi/Smoke_Motion.mp3', 
        name: 'Smoke Motion - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/10.jpg', 
        largeImage: '/images/kategori/500/10.jpg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText:'/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/YL9q4NOvatY', ]  
    },
    { 
        src: '/music/lofi/Aurora.mp3', 
        name: 'Aurora - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/11.jpeg', 
        largeImage: '/images/kategori/500/11.jpeg', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/othVUcskqwE', ]  
    },
    { 
        src: '/music/lofi/Journey.mp3', 
        name: 'Journey - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/12.jfif', 
        largeImage: '/images/kategori/500/12.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText:'/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/Ldpv0Kv0Nkc', ]  
    },
    { 
        src: '/music/lofi/Lost_Years.mp3', 
        name: 'Lost_Years - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/13.jfif', 
        largeImage: '/images/kategori/500/13.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/L-oKCaTbORs', ]  
    },
    { 
        src: '/music/lofi/Meadow.mp3', 
        name: 'Meadow - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/14.jfif', 
        largeImage: '/images/kategori/500/14.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/_tfEryNrb3w', ]  
    },
    { 
        src: '/music/lofi/Night_Stars.mp3', 
        name: 'Night_Stars - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/15.jfif', 
        largeImage: '/images/kategori/500/15.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/FujI3v8P-to', ]  
    },
    { 
        src: '/music/lofi/Shore_Song.mp3', 
        name: 'Shore Song - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/16.jfif', 
        largeImage: '/images/kategori/500/16.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/gaScXvD-RBE', ]  
    },
    { 
        src: '/music/lofi/Summer.mp3', 
        name: 'Summer - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/17.jfif', 
        largeImage: '/images/kategori/500/17.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/hmQ8m4iVQ8s', ]  
    },

    { 
        src: '/music/lofi/Sunset_Dream.mp3', 
        name: 'Sunset Dream - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/18.jfif', 
        largeImage: '/images/kategori/500/18.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/wI2HRF46Y4U', ]  
    },
    { 
        src: '/music/lofi/Trace-of_Innocence.mp3', 
        name: 'Trace of Innocence - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/19.jfif', 
        largeImage: '/images/kategori/500/19.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/_hGpFMRI-H8', ]  
    },
    { 
        src: '/music/lofi/Unexpected_Moments.mp3', 
        name: 'Unexpected Moments - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/20.jfif', 
        largeImage: '/images/kategori/500/20.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/AmZ9QlqHY6s', ]  
    },
    { 
        src: '/music/lofi/Yellow_Rose.mp3', 
        name: 'Yellow Rose - Lo-fi Chilled Beats', 
        smallImage: '/images/kategori/x50/21.jfif', 
        largeImage: '/images/kategori/500/21.jfif', 
        largeImage2: '/images/download3.png', 
        largeImage3: '/images/youtube.png', 
        additionalText: '/ Lo-fi Chilled Beats', 
        date: '2024-05-06', 
        largeImage2Links: ['https://example.com/link1', ], 
        largeImage3Links: ['https://youtu.be/m_qTNkbscM8', ]  
    },
    
    
];

function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[index].src;
    currentSongText.innerText = `MUSIC: ${songs[index].name}`;
    text2.innerText = `Category: ${songs[index].additionalText}`;
    dateText.innerText = `Publication Date: ${songs[index].date}`;

    currentSongImageContainer.innerHTML = '';
    currentSongImageContainer2.innerHTML = '';
    currentSongImageContainer3.innerHTML = '';

    const currentSongImage = document.createElement('img');
    currentSongImage.src = songs[index].largeImage;
    currentSongImage.alt = songs[index].name;
    currentSongImageContainer.appendChild(currentSongImage);

    const currentSongImage2 = document.createElement('img');
    currentSongImage2.src = songs[index].largeImage2;
    currentSongImage2.alt = songs[index].name;
    songs[index].largeImage2Links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = "_blank";
        const imageElement = document.createElement('img');
        imageElement.src = songs[index].largeImage2;
        imageElement.alt = songs[index].name;
        linkElement.appendChild(imageElement);
        currentSongImageContainer2.appendChild(linkElement);
    });

    const currentSongImage3 = document.createElement('img');
    currentSongImage3.src = songs[index].largeImage3;
    currentSongImage3.alt = songs[index].name;
    songs[index].largeImage3Links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = "_blank";
        const imageElement = document.createElement('img');
        imageElement.src = songs[index].largeImage3;
        imageElement.alt = songs[index].name;
        linkElement.appendChild(imageElement);
        currentSongImageContainer3.appendChild(linkElement);
    });

    audioPlayer.play();
}

function createPlaylistItem(song, index) {
    const listItem = document.createElement('div');
    listItem.classList.add('playlist-item');

    const image = document.createElement('img');
    image.src = song.smallImage;
    listItem.appendChild(image);

    const songName = document.createElement('span');
    songName.innerText = song.name;
    listItem.appendChild(songName);

    listItem.addEventListener('click', () => playSong(index));

    return listItem;
}

function createPlaylist() {
    playlist.innerHTML = '';

    songs.forEach((song, index) => {
        const listItem = createPlaylistItem(song, index);
        playlist.appendChild(listItem);
    });

    playBtn.removeEventListener('click', togglePlay);
    playBtn.addEventListener('click', togglePlay);
    pauseBtn.removeEventListener('click', togglePause);
    pauseBtn.addEventListener('click', togglePause);
    stopBtn.removeEventListener('click', stopSong);
    stopBtn.addEventListener('click', stopSong);
    prevBtn.removeEventListener('click', playPrevious);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.removeEventListener('click', playNext);
    nextBtn.addEventListener('click', playNext);
    volumeBtn.removeEventListener('click', toggleMute);
    volumeBtn.addEventListener('click', toggleMute);
}

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    } else {
        audioPlayer.pause();
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    }
}

function togglePause() {
    audioPlayer.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

function toggleMute() {
    if (audioPlayer.muted) {
        audioPlayer.muted = false;
        volumeBtn.classList.remove('fa-volume-off');
        volumeBtn.classList.add('fa-volume-up');
    } else {
        audioPlayer.muted = true;
        volumeBtn.classList.remove('fa-volume-up');
        volumeBtn.classList.add('fa-volume-off');
    }
}

document.getElementById('search-music').addEventListener('input', function() {
    const filter = this.value.toUpperCase();
    const playlistItems = playlist.getElementsByClassName('playlist-item');
    
    for (let i = 0; i < playlistItems.length; i++) {
        const txtValue = playlistItems[i].innerText.toUpperCase();
        if (txtValue.indexOf(filter) > -1) {
            playlistItems[i].style.display = '';
        } else {
            playlistItems[i].style.display = 'none';
        }
    }
});

createPlaylist();


window.addEventListener('DOMContentLoaded', function() {
    const currentSongImage = document.createElement('img');
    currentSongImage.src = songs[currentSongIndex].largeImage;
    currentSongImage.alt = songs[currentSongIndex].name;
    currentSongImageContainer.appendChild(currentSongImage);

    const currentSongImage2 = document.createElement('img');
    currentSongImage2.src = songs[currentSongIndex].largeImage2;
    currentSongImage2.alt = songs[currentSongIndex].name;
    songs[currentSongIndex].largeImage2Links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = "_blank";
        const imageElement = document.createElement('img');
        imageElement.src = songs[currentSongIndex].largeImage2;
        imageElement.alt = songs[currentSongIndex].name;
        linkElement.appendChild(imageElement);
        currentSongImageContainer2.appendChild(linkElement);
    });

    const currentSongImage3 = document.createElement('img');
    currentSongImage3.src = songs[currentSongIndex].largeImage3;
    currentSongImage3.alt = songs[currentSongIndex].name;
    songs[currentSongIndex].largeImage3Links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = "_blank";
        const imageElement = document.createElement('img');
        imageElement.src = songs[currentSongIndex].largeImage3;
        imageElement.alt = songs[currentSongIndex].name;
        linkElement.appendChild(imageElement);
        currentSongImageContainer3.appendChild(linkElement);
    });

    currentSongText.innerText = `MUSIC: ${songs[currentSongIndex].name}`;
    text2.innerText = `Category: ${songs[currentSongIndex].additionalText}`;
    dateText.innerText = `Publication Date: ${songs[currentSongIndex].date}`;
});

const playbackStatusDiv = document.getElementById('playback-status');

function updatePlaybackStatus() {
    if (!audioPlayer.paused) {
        playbackStatusDiv.innerText = 'Playing...';
    } else {
        playbackStatusDiv.innerText = 'Paused...';
    }
}

// Çalma durumunu güncellemek için event listener ekleyelim
audioPlayer.addEventListener('play', updatePlaybackStatus);
audioPlayer.addEventListener('pause', updatePlaybackStatus);

// Sayfa yüklendiğinde durumu güncelleyelim
window.addEventListener('DOMContentLoaded', updatePlaybackStatus);



