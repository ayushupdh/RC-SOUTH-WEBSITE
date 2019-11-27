
    const images = document.getElementsByTagName('img');
    const library = images[0];
    const lab = images[1];
    const pingpong = images[2];
    const cafeteria = images[3];
    const gym = images[4];
    const kitchen = images[5];

    library.addEventListener('click', () => {
        if (library.getAttribute('src') == './img/library1.jpg') {
            library.setAttribute('src', './img/library.jpg');
        }
        else {
            library.setAttribute('src', './img/library1.jpg');

        }
    })
    lab.addEventListener('click', () => {
        if (lab.getAttribute('src') == './img/lab1.jpg') {
            lab.setAttribute('src', './img/lab.jpg');
        }
        else {
            lab.setAttribute('src', './img/lab1.jpg');

        }
    })
    pingpong.addEventListener('click', () => {
        if (pingpong.getAttribute('src') == './img/ping_pong1.jpg') {
            pingpong.setAttribute('src', './img/ping_pong.jpg');
        }
        else {
            pingpong.setAttribute('src', './img/ping_pong1.jpg');

        }
    })
    cafeteria.addEventListener('click', () => {
        if (cafeteria.getAttribute('src') == './img/cafeteria1.jpg') {
            cafeteria.setAttribute('src', './img/cafeteria.jpg');
        }
        else {
            cafeteria.setAttribute('src', './img/cafeteria1.jpg');

        }
    })
    gym.addEventListener('click', () => {
        if (gym.getAttribute('src') == './img/gym1.jpg') {
            gym.setAttribute('src', './img/gym.jpg');
        }
        else {
            gym.setAttribute('src', './img/gym1.jpg');

        }
    })
    kitchen.addEventListener('click', () => {
        if (kitchen.getAttribute('src') == './img/kitchen1.jpg') {
            kitchen.setAttribute('src', './img/kitchen.jpg');
        }
        else {
            kitchen.setAttribute('src', './img/kitchen1.jpg');

        }
    })