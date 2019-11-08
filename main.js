
function showTime(){
const today = new Date();
let amPm= "AM";
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getHours();
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
if(hour>12){
amPm="PM";
}
hour=hour%12;

month = addZero(month);
sec = addZero(sec);
hour = addZero(hour);

document.getElementById('day').innerHTML = month + "/" + date + "/" + year;

document.getElementById('time').innerHTML =hour + ":" + month + ":" + sec+" "+amPm;
setTimeout(showTime, 500);
}


function addZero(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

showTime();