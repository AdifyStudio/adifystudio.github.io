// JavaScript dosyası burada

// İlgili tüm paragrafları seç
const paragraphs = document.querySelectorAll('#footer p');

// Her paragraf için olay dinleyicilerini ekle
paragraphs.forEach(paragraph => {
    // Fare üzerine geldiğinde
    paragraph.addEventListener('mouseenter', () => {
        // Boyutu büyüt
        paragraph.style.transform = 'scale(1.1)';
        // Neon ışığı efektini beyazdan mora döndür
        paragraph.style.textShadow = '0 0 5px #ffffff';
        paragraph.style.color = '#ffffff';
        // Geçiş efekti ekle
        paragraph.style.transition = 'transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease';
    });

    // Fare ayrıldığında
    paragraph.addEventListener('mouseleave', () => {
        // Boyutu normale döndür
        paragraph.style.transform = 'scale(1)';
        // Neon ışığı efektini mor'dan beyaza döndür
        paragraph.style.textShadow = '0 0 5px #9400D3';
        paragraph.style.color = '#ccc';
    });
});
