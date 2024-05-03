window.onload = function() {
    var slider = document.getElementById("slider");
    var images = slider.querySelectorAll("img");
    var dots = document.querySelectorAll(".slider-dot"); // Yeni eklendi

    var index = 0;
    var interval = setInterval(function() {
        images[index].classList.remove("active");
        dots[index].classList.remove("active"); // Yeni eklendi
        index = (index + 1) % images.length;
        images[index].classList.add("active");
        dots[index].classList.add("active"); // Yeni eklendi
    }, 4000);

    slider.addEventListener("mouseover", function() {
        clearInterval(interval);
    });

    slider.addEventListener("mouseleave", function() {
        interval = setInterval(function() {
            images[index].classList.remove("active");
            dots[index].classList.remove("active"); // Yeni eklendi
            index = (index + 1) % images.length;
            images[index].classList.add("active");
            dots[index].classList.add("active"); // Yeni eklendi
        }, 4000);
    });

    // İleri buton işlevselliği
    var nextBtn = slider.querySelector(".next-btn");
    nextBtn.addEventListener("click", function() {
        images[index].classList.remove("active");
        dots[index].classList.remove("active"); // Yeni eklendi
        index = (index + 1) % images.length;
        images[index].classList.add("active");
        dots[index].classList.add("active"); // Yeni eklendi
    });

    // Geri buton işlevselliği
    var prevBtn = slider.querySelector(".prev-btn");
    prevBtn.addEventListener("click", function() {
        images[index].classList.remove("active");
        dots[index].classList.remove("active"); // Yeni eklendi
        index = (index - 1 + images.length) % images.length;
        images[index].classList.add("active");
        dots[index].classList.add("active"); // Yeni eklendi
    });

    // Nokta işlevselliği
    dots.forEach(function(dot, dotIndex) {
        dot.addEventListener("click", function() {
            images[index].classList.remove("active");
            dots[index].classList.remove("active");
            index = dotIndex;
            images[index].classList.add("active");
            dots[index].classList.add("active");
        });
    });
};
