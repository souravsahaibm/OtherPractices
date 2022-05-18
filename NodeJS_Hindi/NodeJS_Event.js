const EventEmitter = require('events');
class myEmitter extends EventEmitter { }

const emitter = new myEmitter();

emitter.on('waterfull', () => {
    console.log('Please turn off motor');
    setTimeout(() => {
        console.log('This is a gental reminder to turn off motor');
    }, 3000);
});

console.log('Script is running');
emitter.emit('waterfull');
console.log('script is stil running');
