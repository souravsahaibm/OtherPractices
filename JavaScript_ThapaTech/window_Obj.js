//Print whole page
function printWholePage() {
    window.print();
}
//Print perticular Div
function myFunc(paramValue) {
    var backUp = document.body.innerHTML;
    var printDiv = document.getElementById(paramValue).innerHTML;
    document.body.innerHTML = printDiv;
    window.print();
    document.body.innerHTML = backUp;
}

//Window.Location properties
var location = window.location;
console.log('Value of Window.Location:', location);
var host = window.location.host;
console.log('Value of Window.Location.host:', host);
var hostname = window.location.hostname;
console.log('Value of Window.Location.hostname:', hostname);
var href = window.location.href;
console.log('Value of Window.Location.href:', href);
var origin = window.location.origin;
console.log('Value of Window.Location.origin:', origin);
var pathname = window.location.pathname;
console.log('Value of Window.Location.pathname:', pathname);
var port = window.location.port;
console.log('Value of Window.Location.port:', port);
var protocol = window.location.protocol;
console.log('Value of Window.Location.protocol:', protocol);

function youtube(){
    // window.location='https://www.youtube.com/';
    window.location.assign('https://www.youtube.com/');
}