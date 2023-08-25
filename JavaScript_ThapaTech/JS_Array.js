// Different between array and object
var a = ['a', 2, 3, 'c', 'b'];
var b = new Array('a', 'b', 'c', 'd');
console.log('Type of a:', typeof (a));
console.log('Type of b:', typeof (b));
// So as per output there is no type called array, all arrays are object type

// pop() & push()
console.log('Return from pop:', a.pop()); // return last element of the array
console.log('After Pop function:', a);
console.log('Return from push:', a.push());// return length of array
console.log('After Push function:', a);
console.log('Return from push with item:', a.push(6));
console.log('After Push with a item:', a);

// shift() & unshift()
console.log('Return from shift function:', a.shift());
console.log('After Shift function:', a);
console.log('Return from unshift function:', a.unshift());
console.log('After Unshift function:', a);
console.log('Return from unshift function with item:', a.unshift('a'));
console.log('After Unshift function:', a);

// slice() & splice()
console.log('Result of \'a\' array', a);
console.log('Result of splice function:', a.splice(1, 3, 'Shanu'));
console.log('After splice function:', a);
a = ['a', 2, 3, 'c', 'b'];
console.log('Result of \'a\' array', a);
console.log('Result of slice function:', a.slice(1, 3));

// Other array functions and properties
a = ['a', 2, 3, 'c', 'b'];
console.log('Result of \'a\' array', a);
console.log('Length of a:', a.length);
console.log('Sorting:', a.sort());
console.log('Reverse:', a.reverse());
console.log('Concat a & b:', a.concat(b));
console.log('Result of \'a\' array', a);
console.log('Index of a \'3\' element of a:', a.indexOf(3));

// array printing using for, foreach, for in, for of
a = ['a', 2, 3, 'c', 'b'];
console.log('Result of \'a\' array', a);
console.log('Array printed using for loop');
for (let i = 0; i < a.length; i++)
    console.log(a[i] + ',');
