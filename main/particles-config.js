particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 270,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#ffffff", "#ff0000"]
        },
        "shape": {
            "type": "image",
            "image": {
                "src": "nota.png",
                "width": 398,
                "height": 854
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 5,
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "top", // Hareket yönü: aşağıdan yukarıya
            "random": true,
            "straight": false,
            "out_mode": "out" // Kenarlarda kaybolma
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false
            }
        }
    },
    "retina_detect": true
});