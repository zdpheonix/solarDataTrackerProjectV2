var powerUseOnScreen;
var solarMonthlyCost;
var gridMonthlyCost;
var netDifferenceResult;
var monthList;
var monthSlider;
var button;
//var solarCostMessage; (to display this quntity as a $ value in the on screen message)
var tugOfWarImage;
var allData;


//current month selected - will tie into createSlider() function
var monthSelector;

function preload() {
  allData = loadJSON("data/allData.json");
  tugOfWarImage = loadImage("data/tugOfWar.png");
  //load data on cost of power w/ grid only (difference of the above two will be the net result you need)
  monthSlider = createSlider(0, 11, 6);
}

function setup() {
  //createCanvas(720, 480);
  if (powerUseOnScreen) {
    //time up/down variable "timeChange"

    createP("This is the total power use for the given month");
    //turn this into a running total counter
    powerUseOnScreen = createP(allData.months[monthSelector].totalPowerUsage);
    //ladies and gentlemen we have a SUCCESSFUL callback function!!! BOO yaa!
  }

  //create slider that will serve as main user interface
  button = createButton("GO");
  createP("This is the test slider");
  monthSlider;
}

function draw() {
  //background(100);
  //fill(255, 0, 175);
  //test circle to ensure code functions. Wiull be replaced with monthSelector
  //ellipse(200, 200, monthSlider.value() * 20, monthSlider.value() * 20);
  monthSelector = monthSlider.value();

  solarCost();
  gridCost();
  netResult();
  currentMonth();

  //replace Y-location with variable connected to current month
  //image(chickenPulling, 500, 500);
  //image(zachPulling, 500, 500);

//in theory, when the value on the slider (represented by monthSlider.value() ), increases or decreases, the monthSelector, which powers the array position selector (e.g. array[monthSelector]) will change causing all custom functions to "++" or "--" accordingly

}

function solarCost() {
  if (solarMonthlyCost) {

    createP("This is the cost of solar power");
    //testing section & display numbers
    solarMonthlyCost = createP(allData.months[monthSelector].solarCost);
    //solarCostMessage = join(solarMessageArray + seperator);
  }
}

function gridCost() {
  if (gridMonthlyCost) {

    createP("This is the cost of grid power");
    //testing section & display numbers
    gridMonthlyCost = createP(allData.months[monthSelector].gridCost);
  }
}

function netResult() {
  if (netDifferenceResult) {

    createP("This is the net difference of grid cost and solar cost");
    //testing section & display numbers
    netDifferenceResult = createP(allData.months[monthSelector].netDifference);
  }
}

//slider controls what month
function currentMonth() {
  if (monthList) {

    createP("This is the current timeframe selected")
    monthList = createP(allData.months[monthSelector].date);
  }

}
