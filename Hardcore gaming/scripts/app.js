let name1 = prompt("Player 1");
let name2 = prompt("Player 2");
const player1 = document.querySelector("#P1");
const player2 = document.querySelector("#P2");
player1.innerHTML = name1;
player2.innerHTML = name2;

let playerKeyboard = document.querySelector("#cuby");
document.addEventListener("keydown", moveCube);
function moveCube(e) {
    let key_code = e.which || e.keyCode;
    switch (key_code) {
        case 37: moveLeft();
            break;
        case 38: moveUp();
            break;
        case 39: moveRight();
            break;
        case 40: moveDown();
            break;
    }


}
let tmerz
tmerz = setTimeout(timer, 30000);


//playerKeyboard.style.top = "5px";
//playerKeyboard.style.left = "5px";

let posTop = 0;
let posLeft = 0;

function moveLeft() {
    posLeft -= 50;
    if (posLeft < 1) {
        posLeft = 1001;
    }
    playerKeyboard.style.left = posLeft + "px";
}
function moveUp() {
    posTop -= 50;
    if (posTop < 1) {
        posTop = 750;
    }
    playerKeyboard.style.top = posTop + 'px';

}
function moveRight() {
    posLeft += 50;
    if (posLeft > 1002) {
        posLeft = 2;
    }
    playerKeyboard.style.left = posLeft + 'px';
}

function moveDown() {
    posTop += 50;
    if (posTop > 751) {
        posTop = 1;
    }
    playerKeyboard.style.top = posTop + "px";
    // if (posTop = 0) {
    //      playerKeyboard.style.top = "3%";

}

const wholeBody = document.querySelector("section");
// wholeBody.style.border = "3px solid black";
wholeBody.style.width = "1050px";
wholeBody.style.height = "800px";
wholeBody.style.position = "relative";

wholeBody.addEventListener('')

playerKeyboard.addEventListener("click", killButton);
function killButton(event) {
    playerKeyboard.style.backgroundColor = "red";
    document.removeEventListener("keydown", moveCube);
    alert("You have lost. Accept it!");
    clearTimeout(tmerz);
    let mousePlayer = 0;
    mousePlayer += 1;
    if (mousePlayer == 5) {
        alert('congratz for playing my GAEM');
        mousePlayer = 0;
        let keyPlayer = 0;
        moveCube();
    }
}

function timer() {
    alert("Cheater won!");
    document.removeEventListener("keydown", moveCube);
    clearTimeout(tmerz);
    let keyPlayer = 0;
    keyPlayer += 1;
    if (keyPlayer == 5) {
        alert('congratz for playing my GAEM');
        keyPlayer = 0;
        let mousePlayer = 0;
        moveCube();
    }
}

