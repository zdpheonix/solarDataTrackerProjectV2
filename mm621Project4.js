var monthSlider;
var button;
//var solarCostMessage; (to display this quntity as a $ value in the on screen message)
var tugOfWarImage;
var allData;
//current month selected - will tie into createSlider() function
var monthSelector;
//var netDifference;
var input;
var tugWarXPos;

function preload() {
  allData = loadJSON("data/allData.json");
  tugOfWarImage = loadImage("data/tugOfWar.png");
  //load data on cost of power w/ grid only (difference of the above two will be the net result you need)
}

function setup() {
  createCanvas(1300, 740);
  textSize(18);
  fill(255, 240, 0);
  textFont('Georgia');
  button = createButton("GO");
  monthSlider = createSlider(0, 11, 6);
  //input creation zone
  input = createInput("Insert Data here");
}

function draw() {
  background(100);

  //create slider that will serve as main user interface
  // button = createButton("GO");
  text(input.value(), 500, 200);
  // monthSlider = createSlider(0, 11, 6);
  monthSelector = monthSlider.value();
  monthSlider;
  input;


  //tug-of-war image with X-location replaced by variable connected to current month

  image(tugOfWarImage, monthSelector*20+100, 90, 700, 300);

  solarCost();
  gridCost();
  netResult();
  currentMonth();
  totalPowerUse();

//in theory, when the value on the slider (represented by monthSlider.value() ), increases or decreases, the monthSelector, which powers the array position selector (e.g. array[monthSelector]) will change causing all custom functions to "++" or "--" accordingly

}

function totalPowerUse(){
  if (allData.months[monthSelector].totalPowerUsage) {

    text("Power Usage (kWh)", 50, 500);
    text(allData.months[monthSelector].totalPowerUsage, 75, 600);
  }
}

function solarCost() {
  if (allData.months[monthSelector].solarCost) {

    text("Solar Cost (US$)", 230, 500);
    text(allData.months[monthSelector].solarCost, 230, 600);
    //testing section & display numbers
    //solarCostMessage = join(solarMessageArray + seperator);
  }
}

function gridCost() {
  if (allData.months[monthSelector].gridCost) {

    text("Grid Cost (US$)", 400, 500);
    text(allData.months[monthSelector].gridCost, 400, 600);
    //testing section & display numbers
  }
}

function netResult() {
  if (allData.months[monthSelector].netDifference) {

    text("Net Difference (US$)", 550, 500);
    text(allData.months[monthSelector].netDifference, 550, 600);
    //testing section & display numbers
  }

}

//slider controls what month
function currentMonth() {
  if (allData.months[monthSelector].date) {

    text("Timeframe", 750, 500);
    text(allData.months[monthSelector].date, 750, 600);

  }

}
