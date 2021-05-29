const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;
setTimeout(() => console.log("Timer 1 Finished!"), 0);
setImmediate(() => console.log("Immediate 1 Finished!"));

fs.readFile('test-file.txt', "utf8", (err, data) => {
    console.log("IO Finished");
    setTimeout(() => console.log("Timer 2 Finished!"), 0);
    setTimeout(() => console.log("Timer 3 Finished!"), 3000);
    setImmediate(() => console.log("Immediate 2 Finished!"));
    process.nextTick(() => console.log("Process . nexttrick"));
    crypto.pbkdf2("password", 'salt', 10000, 1024, 'sha512', () => {
        console.log(Date.now() - start ,"Password Encrypted");
    });
    crypto.pbkdf2("password", 'salt', 10000, 1024, 'sha512', () => {
        console.log(Date.now() - start ,"Password Encrypted");
    });
    crypto.pbkdf2("password", 'salt', 10000, 1024, 'sha512', () => {
        console.log(Date.now() - start ,"Password Encrypted");
    });
    crypto.pbkdf2("password", 'salt', 10000, 1024, 'sha512', () => {
        console.log(Date.now() - start ,"Password Encrypted");
    });
    crypto.pbkdf2("password", 'salt', 10000, 1024, 'sha512', () => {
        console.log(Date.now() - start ,"Password Encrypted");
    });
    
    
});

console.log("HEllo from the top level code");