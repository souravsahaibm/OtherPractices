// Get Date
var d = new Date(2019, 5, 1);
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
document.write(d);
document.write("<br>");
document.write(year + "/" + month + "/" + date);
document.write("<br>");
// Set Date
var setDate = new Date();
var sDate = setDate.setDate(10);
var sMonth = setDate.setMonth(10);
var sYear = setDate.setFullYear(2020);
document.write(setDate);
document.write("<br>");
//document.write(sYear + "/" + sMonth + "/" + sDate);
document.write("<br>");
//Time
var time = new Date();
var t = time.getTime();
document.write(t);
document.write("<br>");
var hrs = time.getHours();
var mins = time.getMinutes();
var sec = time.getSeconds();
document.write(hrs + ":" + mins + ":" + sec);

//Dynamic Clock using setInterval()
document.write("<br>");
var clock = setInterval(clockFunc, 1000);
function clockFunc() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById('dynClock').innerHTML = time;
}

//use of setTimeout()
var timeout = setTimeout(timeOut, 3000);
function timeOut() {
    alert('This is a simple test of setTimeout()');
}

