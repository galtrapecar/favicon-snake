import snake_face_URIs from './snake_face_URIs.js';
import snake_press_start_URIs from './snake_press_start_URIs.js';
import snake_sink_URIs from './snake_sink_URIs.js';
import snake_die_URIs from './snake_die_URIs.js';

const pause = (delay) => new Promise(resolve => setTimeout(resolve, delay));

const canvas = document.createElement('canvas');
canvas.height = 16;
canvas.width = 16;
const context = canvas.getContext('2d');

document.getElementById('canvas-wrapper').appendChild(canvas);

let waiting_flag = true;
let snake_dying_flag = false;
let first_key_press_flag = false;

let game_interval;

// --------------------------------------------------------------
//    ______       _       ____    ____  ________  
//  .' ___  |     / \     |_   \  /   _||_   __  | 
// / .'   \_|    / _ \      |   \/   |    | |_ \_| 
// | |   ____   / ___ \     | |\  /| |    |  _| _  
// \ `.___]  |_/ /   \ \_  _| |_\/_| |_  _| |__/ | 
//  `._____.'|____| |____||_____||_____||________|
// --------------------------------------------------------------

let px = 8, py = 8;
let tc = 16;
let ax = 12, ay = 12;
let vx = 0, vy = 0;
let snake = [];
let tail = 5;

let snake_color = "#FFA8CA";

async function game_init() {
    console.log("Game initialized.");
    snake_dying_flag = false;
    game_waiting_animation_loop();
    document.addEventListener('keyup', game_handle_space_pressed);
}

async function game_waiting_animation_loop() {

    while (waiting_flag) {
        await snake_sink_reverse();
        await pause(1000);
        await snake_blink();
        await pause(1000);
        await snake_blink();
        await pause(1000);
        await snake_sink();
        await snake_press_start();
    }

    return;
}

function game_set_favicon(favicon_uri) {
    let favicon = document.querySelector('#favicon');
    let newIcon = favicon.cloneNode(true);
    newIcon.setAttribute("href", favicon_uri);
    favicon.parentNode.replaceChild(newIcon, favicon);
    //favicon.setAttribute("href", favicon_uri);
	//history.replaceState(null, null, window.location.hash == "#1" ? "#0" : "#1");
}

function game_handle_space_pressed(event) {
    if (event.keyCode == 32) {
        document.removeEventListener('keyup', game_handle_space_pressed);
        game_start();
    }
}

function game_start() {
    waiting_flag = false;
    document.addEventListener('keydown', game_handle_key_pressed);
    game_interval = setInterval(game_loop, 130);
}

function game_loop() {
    px += vx;
    py += vy;

    if (px < 0) {
        px = tc - 1;
    }

    if (px > tc - 1) {
        px = 0;
    }

    if (py < 0) {
        py = tc - 1;
    }

    if (py > tc - 1) {
        py = 0;
    }

    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = snake_color;
    for (let i = 0; i < snake.length; i++) {
        context.fillRect(snake[i].x, snake[i].y, 1, 1);
        if (snake[i].x == px && snake[i].y == py) {
            tail = 5;
            console.log(first_key_press_flag);
            if (first_key_press_flag && !snake_dying_flag) {
                game_over();
                return;
            }
        }
    }

    snake.push({x: px, y: py});
    while (snake.length > tail)  { 
        snake.shift();
    }

    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }

    context.fillStyle = "red";
    context.fillRect(ax, ay, 1, 1);

    game_set_favicon(canvas.toDataURL());
}

function game_handle_key_pressed(event) {
    switch (event.keyCode) {
        case 65:
            first_key_press_flag = true;
            vx = -1; vy = 0;
            break;

        case 87:
            first_key_press_flag = true;
            vx = 0; vy = -1;
            break;

        case 68:
            first_key_press_flag = true;
            vx = 1; vy = 0;
            break;

        case 83:
            first_key_press_flag = true;
            vx = 0; vy = 1;
            break;
    }
}

function game_over() {
    snake_dying_flag = true;
    clearInterval(game_interval);
    snake_die();
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
    if (!waiting_flag) throw 400;
    for (let i = 0; i < snake_face_URIs.length; i++) {
        const URI = snake_face_URIs[i].URI;
        if (!waiting_flag) throw 400;
        game_set_favicon(URI);
        canvas_draw_image(URI);  
        await pause(200);
    }
    return;
}

async function snake_sink() {
    if (!waiting_flag) throw 400;
    for (let i = 0; i < snake_sink_URIs.length; i++) {
        const URI = snake_sink_URIs[i].URI;
        if (!waiting_flag) throw 400;
        game_set_favicon(URI);
        canvas_draw_image(URI);  
        await pause(100);
    }
    return;
}

async function snake_sink_reverse() {
    if (!waiting_flag) throw 400;
    for (let i = snake_sink_URIs.length - 1; i >= 0; i--) {
        const URI = snake_sink_URIs[i].URI;
        if (!waiting_flag) throw 400;
        game_set_favicon(URI);
        canvas_draw_image(URI);  
        await pause(100);
    }
    return;
}

async function snake_die_sink() {
    for (let i = 0; i < snake_die_URIs.length; i++) {
        const URI = snake_die_URIs[i].URI;
        game_set_favicon(URI);
        canvas_draw_image(URI);
        console.log("Snake die step" + (i + 1));
        await pause(100);
    }
    return;
}

async function snake_die() {
    const URI = snake_die_URIs[0].URI;
    game_set_favicon(URI);
    canvas_draw_image(URI);
    await pause(2000);
    await snake_die_sink();
    await pause(5000);
    waiting_flag = true;
    game_init();
    return;
}

async function snake_press_start() {
    if (!waiting_flag) return;
    let URI = snake_press_start_URIs[0].URI;
    let img = new Image();
    let img_width = 360;

    img.src = URI;

    for (let i = 0; i < img_width; i++) {
        if (!waiting_flag) return;
        let URI = canvas_draw_snake_press_start(img, i);
        game_set_favicon(URI);
        await pause(30);
    }
    
    return;
}

function canvas_draw_snake_press_start(img, i) {
    if (!waiting_flag) return;
    context.drawImage(img, i * -1, 0);
    return canvas.toDataURL();
}

function canvas_draw_image(img) {
    console.log("Canvas draw call");
    let image = new Image();
    image.src = img;
    context.drawImage(image, 0, 0);
}