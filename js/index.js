import snake_face_URIs from './snake_face_URIs.js';
import snake_press_start_URIs from './snake_press_start_URIs.js';

const pause = (delay) => new Promise(resolve => setTimeout(resolve, delay));

const canvas = document.createElement('canvas');
canvas.height = 16;
canvas.width = 16;
const context = canvas.getContext('2d');

document.body.appendChild(canvas);

// --------------------------------------------------------------
//    ______       _       ____    ____  ________  
//  .' ___  |     / \     |_   \  /   _||_   __  | 
// / .'   \_|    / _ \      |   \/   |    | |_ \_| 
// | |   ____   / ___ \     | |\  /| |    |  _| _  
// \ `.___]  |_/ /   \ \_  _| |_\/_| |_  _| |__/ | 
//  `._____.'|____| |____||_____||_____||________|
// --------------------------------------------------------------

async function game_init() {
    game_waiting_animation_loop();
}

async function game_waiting_animation_loop() {
    while (true) {
        await pause(1000);
        await snake_blink();
        await pause(1000);
        await snake_blink();
        await pause(1000);
        await snake_press_start();
    }
}

function game_set_favicon(favicon_uri) {
    console.log("Set icon.");
    let favicon = document.querySelector('#favicon');
    let newIcon = favicon.cloneNode(true);
    newIcon.setAttribute("href", favicon_uri);
    favicon.parentNode.replaceChild(newIcon, favicon);
    //favicon.setAttribute("href", favicon_uri);
	//history.replaceState(null, null, window.location.hash == "#1" ? "#0" : "#1");
}

game_init();

// --------------------------------------------------------------
//   ______   ____  _____       _       ___  ____   ________  
// .' ____ \ |_   \|_   _|     / \     |_  ||_  _| |_   __  | 
// | (___ \_|  |   \ | |      / _ \      | |_/ /     | |_ \_| 
//  _.____`.   | |\ \| |     / ___ \     |  __'.     |  _| _  
// | \____) | _| |_\   |_  _/ /   \ \_  _| |  \ \_  _| |__/ | 
//  \______.'|_____|\____||____| |____||____||____||________| 
// --------------------------------------------------------------

async function snake_blink() {
    for (let i = 0; i < snake_face_URIs.length; i++) {
        const URI = snake_face_URIs[i].URI;
        game_set_favicon(URI);
        await pause(200);
    }
    return;
}

async function snake_press_start() {
    let URI = snake_press_start_URIs[0].URI;
    let img = new Image();
    let img_width = 360;

    img.src = URI;

    for (let i = 0; i < img_width; i++) {
        let URI = canvas_draw_snake_press_start(img, i);
        game_set_favicon(URI);
        await pause(30);
    }
    
    return;
}

function canvas_draw_snake_press_start(img, i) {
    context.drawImage(img, i * -1, 0);
    return canvas.toDataURL();
}