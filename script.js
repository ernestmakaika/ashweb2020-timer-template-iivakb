let totalSeconds = 60; // a global with the total seconds
let remainSeconds = 0; // a global with remaining seconds
// the next variables define the Circle
const PI = 3.1415927;
let r = 120;
let circumference = r * 2 * PI;

function getSliceSize() {
  return 1 * (circumference / (totalSeconds - 1));
}
function createCircleStyle() {
  const CircleAnimationDefault = {
    strokeDasharray: circumference,
    strokeDashoffset:
      remainSeconds > 0 ? getSliceSize() * (remainSeconds - 1) : 0,
    transition: "all 1s linear"
  };
  return CircleAnimationDefault;
}
/**
 * Call updateCircle to set the circle stroke to the right angle for the number of remainSeconds and display the text passed in @param circleText in the center of the circle.
 */
function updateCircle(circleText) {
  const circleStyle = createCircleStyle();
  // set the text in the middle of the circle
  const timeText = document.getElementById("timedisplay");
  timeText.innerText = circleText;
  // get the circlestroke to be animated to the right number of seconds.
  const circle = document.getElementById("timecircle");
  circle.style.strokeDasharray = circleStyle.strokeDasharray;
  circle.style.strokeDashoffset = circleStyle.strokeDashoffset;
  circle.style.transition = circleStyle.transition;
}

function settimeSubmit(event) {
  event.preventDefault();
  secondInput = document.getElementById("seconds");
  remainSeconds = +secondInput.value;
  totalSeconds = remainSeconds;
  updateCircle(5);

  // todo:  use setInterval to create a timer.  Create a seperate function passed to  setInterval that updates the timecircle by calling "updateCircle" each second.
  // The timer should be cleared when it's complete.
}

// function setIntervalEverysecond()
const settimeForm = document.getElementById("settime");
settimeForm.addEventListener("submit", settimeSubmit);
