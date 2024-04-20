// Yönlendirme işlemini gerçekleştirecek olan fonksiyon
function mobileRedirect() {
    // Kullanıcının ekran genişliğini kontrol ediyoruz
    if (window.innerWidth <= 768) { // Mobil cihaz ekran genişliği genellikle 768 pikselden küçüktür
        // Mobil cihazdan girildiğinde kullanıcıyı yönlendir
        window.location.href = "mobil.html"; // Yönlendirilecek sayfanın adı
    }
}

// Sayfa yüklendiğinde kontrol fonksiyonunu çağırıyoruz
window.onload = mobileRedirect;
