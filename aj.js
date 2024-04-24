// aj.js

// Müzik silme işlevi
function deleteMusic(index) {
    // Seçili müziği al
    const selectedMusic = musicList[index];
    
    // Dosyayı sil
    fetch(selectedMusic.src, { method: 'DELETE' })
        .then(response => {
            // Silme işlemi başarılıysa listeden de kaldır
            if (response.ok) {
                musicList.splice(index, 1); // Listeden kaldır
                renderMusicList(musicList); // Yeniden listeyi render et
                alert("Müzik başarıyla silindi.");
            } else {
                // Hata durumunda bildir
                alert("Müzik silinirken bir hata oluştu.");
            }
        })
        .catch(error => {
            // Hata durumunda bildir
            alert("Müzik silinirken bir hata oluştu.");
            console.error('Error deleting music:', error);
        });
}
