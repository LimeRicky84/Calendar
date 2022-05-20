// add current time in header
var timeDisplayEl = $("#rightNow")


function timeDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  setInterval(timeDate, 1000);