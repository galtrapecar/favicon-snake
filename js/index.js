import snake_face_URIs from './snake_face_URIs';

function game_init() {
    let interval = game_favicon_wait_animation();
}

function game_favicon_wait_animation() {
    let index;

    let interval = setInterval(() => {
        
        let favicon_uri = snake_face_URIs[index].URI;
        game_set_favicon(favicon_uri);

        index = (index == snake_face_URIs.length - 1) ? 0 : index + 1;
    }, 500);

    return interval;
}

function game_animation_loop() {

}

function game_set_favicon(favicon_uri) {
    let favicon_link = document.querySelector('[rel=icon]');
    favicon.setAttribute("href", favicon_uri);
	history.replaceState(null, null, window.location.hash == "#1" ? "#0" : "#1");
}