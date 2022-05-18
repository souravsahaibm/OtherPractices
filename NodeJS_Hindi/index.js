// const impObj1=require('./first');

// console.log('Hello Sourav!',impObj1);

// import OS mudule
/*
const os=require('os');
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release()); */

// path module

//FileSystem module
//writeFile(),readFile()

const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// });
const a=fs.readFileSync('file.txt');
console.log(a.toString());
console.log('File reading Finished');
