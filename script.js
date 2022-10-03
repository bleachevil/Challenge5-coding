var timeDisplayEl = $('#currentDay');
var allValue = $("button");
var presentHour = moment().hour();

var finalTime = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "13 PM": "",
    "14 PM": "",
    "15 PM": "",
    "16 PM": "",
    "17 PM": "",
  };

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd') + "," + moment().format('MMMM DD YYYY');
    timeDisplayEl.text(rightNow);
    //console.log(rightNow)
  }


// coloring the past,present,and future 
for ( let i = 8; i < 18; i++ ) {
    var timeNumber = "#" + i ;
    var timeString = $(timeNumber).text();

    var matches = timeString.match(/(\d+)/);
    var finalNumber = matches[0]; 
    //console.log(timeString);
    var textEntry =  '#text-entry' + i;

    if (presentHour == finalNumber) {
        $(textEntry).addClass("present");}
    else if (presentHour > finalNumber) {
        $(textEntry).addClass("future");}
    else {$(textEntry).addClass("past");}


}

//save to localstorage
allValue.click(function() {
    value = $(this).siblings("textarea").val();
    key = $(this).siblings("div").text();
    if(!localStorage.getItem('finalTime')) {
    localStorage.setItem('finalTime', JSON.stringify(finalTime));
    }  
    var total = JSON.parse(localStorage.getItem('finalTime'));
    total[key] = value;
  
    localStorage.setItem('finalTime', JSON.stringify(total));
  });
  

displayTime();
localStorage.clear();