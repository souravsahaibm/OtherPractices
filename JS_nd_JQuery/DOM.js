var panel1=document.getElementById('p1').innerHTML;
var panel2=document.getElementById('p2').innerText;
var panel3=document.getElementsByClassName('cp1')[1].innerText; // without index value o/p will be undefined

var panel=document.querySelector('p').innerHTML;// default first element willbe selected

    document.write(panel1);
    document.write('<br>');
    document.write(panel2);
    document.write('<br>');
    document.write(panel3);
    document.write('<br>');
    document.write(panel);

    var newpanel=document.createElement('p');
    var paneltext=document.createTextNode('This is fifth panel');
    newpanel.appendChild(paneltext);
    document.body.appendChild(newpanel);

    // document.write(document.body.children);
    document.write('<br>');
    var arr=[1,2,3,4,5];
    document.write(arr);
    document.write('<br>');
    // arr.splice(1,3,'shanu');
    // arr.splice(1,2); //o/p=>[1,4,5]
    // var arr1=arr.slice(1,3); 
    document.write(arr); 
    document.write('<br>');
    // document.write(arr1);
    // document.write('<br>');

    arr.forEach(item=>document.write(item +" "));
    