particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 4000,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#ffffff", "#ff0000"] // İki farklı renk
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 2,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 2, // Hareket hızını düşürdük
            "direction": "none", // Yönü yok
            "random": true,
            "straight": false,
            "out_mode": "bounce" // Kenarlarda yansıma
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false,
            }
        }
    },
    "retina_detect": true
});
