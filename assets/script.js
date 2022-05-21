// add current time in header
var timeDisplayEl = $("#rightNow")


function timeDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(timeDate, 1000);

//   function to keep inputs saved after page reload




//   function to color code the past, present and future