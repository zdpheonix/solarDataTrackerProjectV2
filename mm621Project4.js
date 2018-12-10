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

}

function setup() {
  createCanvas(1080, 720);

  //create slider that will serve as main user interface
  button = createButton("GO");
  createP("This is the test slider");
  monthSlider;
}

function draw() {
  background(100);
  //fill(255, 0, 175);
  //test circle to ensure code functions. Wiull be replaced with monthSelector
  //ellipse(200, 200, monthSlider.value() * 20, monthSlider.value() * 20);
  monthSlider = createSlider(0, 11, 6);
  monthSelector = monthSlider.value();

  //tug-of-war image with X-location replaced by variable connected to current month
  image(tugOfWarImage, monthSlider*20, 400, 700, 300);

  solarCost();
  gridCost();
  netResult();
  currentMonth();
  totalPowerUse();

//in theory, when the value on the slider (represented by monthSlider.value() ), increases or decreases, the monthSelector, which powers the array position selector (e.g. array[monthSelector]) will change causing all custom functions to "++" or "--" accordingly

}

function totalPowerUse(){
  if (allData.months[monthSelector].totalPowerUsage) {

    createP("This is the total power use for the given month");

  }
}

function solarCost() {
  if (allData.months[monthSelector].solarCost) {

    createP("This is the cost of solar power");
    //testing section & display numbers
    //solarCostMessage = join(solarMessageArray + seperator);
  }
}

function gridCost() {
  if (allData.months[monthSelector].gridCost) {

    createP("This is the cost of grid power");
    //testing section & display numbers
  }
}

function netResult() {
  if (allData.months[monthSelector].netDifference) {

    createP("This is the net difference of grid cost and solar cost");
    //testing section & display numbers
  }
}

//slider controls what month
function currentMonth() {
  if (allData.months[monthSelector].date) {

    createP("This is the current timeframe selected")

  }

}
