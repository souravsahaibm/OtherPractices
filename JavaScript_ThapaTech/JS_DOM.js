// get html elements by DOM object
var elementsbyID = document.getElementById('p1');
var elementsbyIDhtml = document.getElementById('p1').innerHTML;
var elementsbyIDText = document.getElementById('p1').innerText;
console.log('Element for Id p1 :', elementsbyID);
console.log('InnerHtml of Id p1: ', elementsbyIDhtml);
console.log('InnerText of Id p1: ', elementsbyIDText);

var elementsbyClass = document.getElementsByClassName('para');
var elementbyClsHtml = document.getElementsByClassName('para')[1].innerHTML;
console.log('Elements for Class para ', elementsbyClass);
console.log('InnerHtml of Class para[1]:', elementbyClsHtml);

var elementsbyTag = document.getElementsByTagName('p');
var elementbyTagHtml = document.getElementsByTagName('p')[1].innerHTML;
var elementbyTagText = document.getElementsByTagName('p')[1].innerText;
console.log('Elements for Tag p:', elementsbyTag);
console.log('InnerHtml of Tag p[1]:', elementbyTagHtml);
console.log('InnerText of Tag p[1]:', elementbyTagText);

// get children of body
var child = document.body.children;
console.log(child);

//add a new element/tag in body
var para = document.createElement('p');
var paraText = document.createTextNode('This is a new para');
para.appendChild(paraText);
console.log(para);
document.body.appendChild(para);

// access first and last child
var firstChild = document.querySelector('ul');
console.log('FirstChild of document from query selector', firstChild.firstChild);
var firstChild = document.body.firstChild;
var lastChild = document.body.lastChild;
console.log('FirstChild of document', firstChild);
console.log('LastChild of document', lastChild);

// access siblings and parent node of a element
var sibling = p1.nextElementSibling.nextElementSibling;
console.log('Next Sibling of p1 is ', sibling);
var nextElement = document.getElementById('p1').nextElementSibling;
console.log('Next sibling of p1 by getElement', nextElement);
var parentNode = firstChild.parentNode;
console.log('Parent node of ul', parentNode);
var parentNodeByElementId = document.getElementById('p1').parentNode;
console.log('Parent node of p1 by Element Id', parentNodeByElementId);

//Change CSS style by JS
// document.getElementById('header').style.color='Red';
//Change multiple CSS properties from JS
document.getElementById('header').setAttribute('style', 'color:red; background-color:black; text-align:center;');
