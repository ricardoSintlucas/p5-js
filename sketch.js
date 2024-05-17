var testColor;
//var tolkienList;
//var tolkienNames = [];
var buttonGetArtist;
var inputArtist;
var selection;
var link = "https://www.rijksmuseum.nl/api/nl/collection?key=gqPbKxmD&involvedMaker=";
var nameArtist;

var rijksMuseum;

function preload() {
  testColor = loadJSON("test.json");
  //tolkienList = loadJSON("tolkienCharacterNames.json", setNames);
  rijksMuseum = loadJSON("https://www.rijksmuseum.nl/api/nl/collection?key=gqPbKxmD", showArtist);
}

function setNames(data) {
  tolkienNames = data.names;
  createP(tolkienNames[Math.round(random(0, tolkienNames.length))]);
}



function getArtist() {
  var url = link + selection.value();
  console.log(selection.value());
  loadJSON(url, showArtist);
}


function showArtist(data) {
  var artObjects = data.artObjects;
  selection = select("#nameArtist");
  for (var i = 0; i < artObjects.length; i++) {
    var artist = createElement("option", artObjects[i].principalOrFirstMaker);
    selection.child(artist);
    var image = createImg(artObjects[i].webImage.url);
    image.style("width", "400px");
    var discription = createP(artObjects[i].longTitle);
    discription.addClass("discription");
  }
}


function setup() {
  createCanvas(400, 400);
  inputArtist = select("#nameArtist");
  buttonGetArtist = select("#showWork");
  buttonGetArtist.mouseClicked(getArtist);
}

function draw() {

  background(220);
  fill(testColor.r, testColor.g, testColor.b);
  noStroke();
  ellipse(width / 2, height / 2, 100, 100);


}
