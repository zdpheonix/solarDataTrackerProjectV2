var powerUseOnScreen;
//var solarMonthlyCost;
//var gridMonthlyCost;
//var netDifferenceResult;
//var monthList;
//var solarCostMessage;
//var chickenPulling;
//var zachPulling;
//var allData;


//current month selected - will tie into createSlider() function
//var monthSelector;
//var gridRate = 0.27;

var monthSlider;

function preload() {
  allData = loadJSON("data/allData.json");
  chickenPulling = loadImage("data/chickenPulling.png");
  zachPulling = loadImage("data/zachPulling.png");
  //load data on cost of power w/ grid only (difference of the above two will be the net result you need)
}

function setup() {
  createCanvas(1080, 720);
  if (powerUseOnScreen) {
    //time up/down variable "timeChange"

    createP("This is the total power use for the given month");
    //turn this into a running total counter
    powerUseOnScreen = createP(allData.months[0].totalPowerUsage);
    //ladies and gentlemen we have a SUCCESSFUL callback function!!! BOO yaa!
  }
    solarCost();
    gridCost();
    netResult();
    currentMonth();

//    createP("   ");
//    createP("This is the test slider");
//    monthSlider = createSlider(0, 11, 6);

//    fill(255, 0, 175);
  //  ellipse (100, 100, monthSlider.value, monthSlider.value);
}

//function draw() {
  //background(100);
  //imageLocations();
//
function solarCost() {
  if (solarMonthlyCost) {

    createP("This is the cost of solar power");
    //testing section & display numbers
    solarMonthlyCost = createP(allData.months[0].solarCost);
    //solarCostMessage = join(solarMessageArray + seperator);
  }
}

function gridCost() {
  if (gridMonthlyCost) {

    createP("This is the cost of grid power");
    //testing section & display numbers
    gridMonthlyCost = createP(allData.months[0].gridCost);
    //solarCostMessage = join(solarMessageArray + seperator);
  }
}

function netResult() {
  if (netDifferenceResult) {

    createP("This is the net difference of grid cost and solar cost");
    //testing section & display numbers
    netDifferenceResult = createP(allData.months[0].netDifference);
    //solarCostMessage = join(solarMessageArray + seperator);
  }
}

//function imageLocations() {
  //replace Y-location with variable connected to current month
  //image(chickenPulling, 500, 500);
  //image(zachPulling, 500, 500);
//}

//slider controls what month
function currentMonth() {
  if(monthList){

  createP("This is the current timeframe selected")
  monthList = createP(allData.months[0].date);

  //if (monthSelector++){
    //solarCost, gridCost, and netDifference (all equipped with the changing month variable) all ++ to change their individual data types/view
  //}

  //if (monthSelector--){
    //solarCost, gridCost, and netDifference (all equipped with the changing month variable) all -- to change their individual data types/view
  //}

  }
}
