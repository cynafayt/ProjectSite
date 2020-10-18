const CORS = "https://cors-anywhere.herokuapp.com/";
const ITEM_DATABASE = "https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    //https://cors-anywhere.herokuapp.com/
    loadJSON(CORS + ITEM_DATABASE + 50, logData);
}

let icon;

function logData(data) {
    console.log(data);
    let imgURL = CORS + data.item.icon_large;
    icon = loadImage(imgURL);
    console.log(imgURL);
}

function draw() {
    if (icon) {
        image(icon, 0, 0, 100, 100);
    }
}