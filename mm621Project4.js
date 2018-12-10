var powerUseOnScreen;
var solarMonthlyCost;
var gridMonthlyCost;
var netDifferenceResult;
var monthList;
var monthSlider;
var button;
//var solarCostMessage;
//var chickenPulling;
//var zachPulling;
var allData;
//var timeChange;


//current month selected - will tie into createSlider() function
var monthSelector;
//var gridRate = 0.27;

function preload() {
  allData = loadJSON("data/allData.json");
  //  chickenPulling = loadImage("data/chickenPulling.png");
  //  zachPulling = loadImage("data/zachPulling.png");
  //load data on cost of power w/ grid only (difference of the above two will be the net result you need)
  monthSlider = createSlider(0, 11, 6)
}

function setup() {
  createCanvas(1080, 720);
  if (powerUseOnScreen) {
    //time up/down variable "timeChange"

    createP("This is the total power use for the given month");
    //turn this into a running total counter
    powerUseOnScreen == createP(allData.months[monthSelector].totalPowerUsage);
    //ladies and gentlemen we have a SUCCESSFUL callback function!!! BOO yaa!
  }
  solarCost();
  gridCost();
  netResult();
  currentMonth();

  //create slider that will serve as main user interface
  button = createButton("GO");
  createP("This is the test slider");
  monthSlider;
}

function draw() {
  background(100);
  fill(255, 0, 175);
  //test circle to ensure code functions
  ellipse(300, 300, monthSlider.value() * 20, monthSlider.value() * 20);
  monthSelector == monthSlider.value();

  //replace Y-location with variable connected to current month
  //image(chickenPulling, 500, 500);
  //image(zachPulling, 500, 500);

//in theory, when the value on the slider (represented by monthSlider.value() ), increases or decreases, the monthSelector, which powers the array position selector (e.g. array[monthSelector]) will change causing all custom funcctions to "++" or "--" accordingly
  if (monthSlider.value() ++) {
    monthSelector++;
  }

  if (monthSlider.value() --) {
    monthSelector--;
  }

}

function solarCost() {
  if (solarMonthlyCost) {

    createP("This is the cost of solar power");
    //testing section & display numbers
    solarMonthlyCost == createP(allData.months[monthSelector].solarCost);
    //solarCostMessage = join(solarMessageArray + seperator);
  }
}

function gridCost() {
  if (gridMonthlyCost) {

    createP("This is the cost of grid power");
    //testing section & display numbers
    gridMonthlyCost == createP(allData.months[monthSelector].gridCost);
  }
}

function netResult() {
  if (netDifferenceResult) {

    createP("This is the net difference of grid cost and solar cost");
    //testing section & display numbers
    netDifferenceResult == createP(allData.months[monthSelector].netDifference);
    //solarCostMessage = join(solarMessageArray + seperator);
  }
}

//slider controls what month
function currentMonth() {
  if (monthList) {

    createP("This is the current timeframe selected")
    monthList == createP(allData.months[monthSelector].date);
  }

}
