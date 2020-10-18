const CORS = "https://cors-anywhere.herokuapp.com/";
const ITEM_DATABASE = "https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item="

function setup() {
    createCanvas(windowWidth, windowHeight);
    //noLoop();
    //https://cors-anywhere.herokuapp.com/
    loadJSON(ITEM_DATABASE + 50, logData);
}

let icon;
let iconLoaded = false;

function logData(data) {
    console.log(data);
    let imgURL = data.item.icon_large;
    icon = loadImage(imgURL, loaded);
    console.log(imgURL);
}

function loaded() {
 iconLoaded = true;   
}

function draw() {
    if (iconLoaded) {
        image(icon, 0, 0);
    }
}
