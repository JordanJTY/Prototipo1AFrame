window.onload = initialize;

function initialize() {
    const myMenu = document.getElementById("my-menu");
    myMenu.addEventListener("mouseenter", menuHoverAndSoundEnter);
    myMenu.addEventListener("mouseout", menuReturnToNormality);
}

function menuReturnToNormality() {
    const myMenu = document.getElementById("my-menu");
    myMenu.style.borderStyle = "groove";
    myMenu.style.backgroundColor = "gray";
}

function menuHoverAndSoundEnter() {
    menuHover();
    menuSoundEnter();
}

function menuHover() {
    const myMenu = document.getElementById("my-menu");
    myMenu.style.borderStyle = "outset";
    myMenu.style.backgroundColor = "darkgray";
}

function menuSoundEnter() {
    let beat = new Audio('mp3/bubble_pop.mp3');
    beat.play();
}