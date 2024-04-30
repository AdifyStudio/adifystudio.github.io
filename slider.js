const sliderContent = document.querySelector('.slider-content');
const sliderItems = document.querySelectorAll('.slider-item');

let currentIndex = 0;
const intervalTime = 5000; // Slayt geçiş aralığı (ms)
let sliderInterval;

// Slayt geçişini başlatan fonksiyon
function startSlider() {
    sliderInterval = setInterval(() => {
        moveToNextSlide();
    }, intervalTime);
}

// Bir sonraki slayta geçiş yapan fonksiyon
function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= sliderItems.length) {
        currentIndex = 0; // Son slayta ulaşıldığında ilk slayta geri dön
    }
    updateSlider();
}

// Önceki slayta geçiş yapan fonksiyon
function moveToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliderItems.length - 1; // İlk slayta ulaşıldığında son slayta git
    }
    updateSlider();
}

// Slider'ı güncelleyen fonksiyon
function updateSlider() {
    sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Otomatik geçiş için slider'ı başlat
startSlider();
