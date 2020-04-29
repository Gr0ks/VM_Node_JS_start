const os = require('os');

console.log('OS: ', os.platform());

console.log('core arch: ', os.arch());

console.log('cpu: ', os.cpus());

console.log('free mem: ', os.freemem());

console.log('total mem: ', os.totalmem());

console.log('home dir: ', os.homedir());

console.log('up time: ', os.uptime());