// const simple=require('./ESM_Module2');
// simple();
// import {simple2 as simple} from './ESM_Module2.mjs';
// import {simple50} from './ESM_Module2.mjs';
// import {simple,simple2} from './ESM_Module2.mjs';
import * as a from './ESM_Module2.mjs';

console.log(a.simple());
console.log(a.simple2())
// simple();
// simple2();