import snake_face_URIs from './snake_face_URIs.js';
import snake_press_start_URIs from './snake_press_start_URIs.js';

const pause = (delay) => new Promise(resolve => setTimeout(resolve, delay));

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

function game_waiting_animation_loop() {
    while (true) {
        await pause(1000);
        await snake_blink();
        await pause(1000);
        await snake_press_start();
    }
}

function game_set_favicon(favicon_uri) {
    console.log("Set icon.");
    let favicon = document.querySelector('#favicon');
    favicon.setAttribute("href", favicon_uri);
	history.replaceState(null, null, window.location.hash == "#1" ? "#0" : "#1");
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
    for (let i = 0; i < snake_face_URIs.length; i++) {
        const URI = snake_face_URIs[i].URI;
        game_set_favicon(URI);
        await pause(200);
    }
    return;
}
